(function lifeBackground() {
  if (window.__lifeBackgroundInitialized) {
    return;
  }
  window.__lifeBackgroundInitialized = true;

  const FALLBACK_COLOR = '#ffffff';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const runner = {
    canvas: null,
    ctx: null,
    width: 0,
    height: 0,
    dpr: 1,
    frameId: null,
    lastTick: 0,
    tickDelay: 200,
    resizeTimer: null,
    pointerCooldown: 0,
    listenersAttached: false,
    simulation: null
  };

  const SIMULATION_FACTORIES = [
    () => createLeniaSimulation()
  ];

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function ensureCanvas() {
    if (runner.canvas) {
      return;
    }
    const canvas = document.createElement('canvas');
    canvas.id = 'life-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.setAttribute('role', 'presentation');
    Object.assign(canvas.style, {
      position: 'fixed',
      inset: '0',
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: '-1',
      opacity: '0.95',
      backgroundColor: FALLBACK_COLOR,
      transition: 'opacity 600ms ease'
    });
    document.body.prepend(canvas);
    runner.canvas = canvas;
    runner.ctx = canvas.getContext('2d');
  }

  function getDimensions() {
    return {
      width: runner.width,
      height: runner.height,
      dpr: runner.dpr
    };
  }

  function configureDimensions() {
    if (!runner.canvas) {
      return;
    }
    runner.width = window.innerWidth;
    runner.height = window.innerHeight;
    runner.dpr = Math.min(2, window.devicePixelRatio || 1);
    runner.canvas.width = Math.max(1, Math.floor(runner.width * runner.dpr));
    runner.canvas.height = Math.max(1, Math.floor(runner.height * runner.dpr));
    runner.canvas.style.width = runner.width + 'px';
    runner.canvas.style.height = runner.height + 'px';
    runner.ctx.setTransform(runner.dpr, 0, 0, runner.dpr, 0, 0);
    if (runner.simulation && typeof runner.simulation.handleResize === 'function') {
      runner.simulation.handleResize(getDimensions());
    }
  }

  function chooseSimulation() {
    const factory = SIMULATION_FACTORIES[Math.floor(Math.random() * SIMULATION_FACTORIES.length)];
    const simulation = factory();
    runner.simulation = simulation;
    runner.tickDelay = simulation.tickDelay || 200;
    if (simulation && typeof simulation.handleResize === 'function') {
      simulation.handleResize(getDimensions());
    }
  }

  function loop(timestamp) {
    runner.frameId = window.requestAnimationFrame(loop);
    const delay = (runner.simulation && runner.simulation.tickDelay) || runner.tickDelay;
    if (timestamp - runner.lastTick < delay) {
      return;
    }
    runner.lastTick = timestamp;
    if (runner.simulation && typeof runner.simulation.step === 'function') {
      runner.simulation.step(timestamp, getDimensions());
    }
    draw(timestamp);
  }

  function draw(timestamp) {
    if (!runner.ctx) {
      return;
    }
    runner.ctx.clearRect(0, 0, runner.width, runner.height);
    runner.ctx.fillStyle = FALLBACK_COLOR;
    runner.ctx.fillRect(0, 0, runner.width, runner.height);
    if (runner.simulation && typeof runner.simulation.draw === 'function') {
      runner.simulation.draw(runner.ctx, timestamp, getDimensions());
    }
  }

  function attachListeners() {
    if (runner.listenersAttached) {
      return;
    }
    runner.listenersAttached = true;

    window.addEventListener('resize', () => {
      if (runner.resizeTimer) {
        window.clearTimeout(runner.resizeTimer);
      }
      runner.resizeTimer = window.setTimeout(() => {
        configureDimensions();
      }, 120);
    });

    window.addEventListener('pointermove', (event) => {
      if (!runner.simulation || typeof runner.simulation.handlePointer !== 'function') {
        return;
      }
      const now = window.performance.now();
      if (now - runner.pointerCooldown < 120) {
        return;
      }
      runner.pointerCooldown = now;
      runner.simulation.handlePointer(event, false, getDimensions());
    });

    window.addEventListener('click', (event) => {
      runner.simulation && runner.simulation.handlePointer && runner.simulation.handlePointer(event, true, getDimensions());
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (runner.frameId) {
          window.cancelAnimationFrame(runner.frameId);
          runner.frameId = null;
        }
      } else if (!prefersReducedMotion.matches) {
        runner.lastTick = 0;
        runner.frameId = window.requestAnimationFrame(loop);
      }
    });
  }

  function start() {
    ensureCanvas();
    configureDimensions();
    chooseSimulation();
    runner.lastTick = 0;
    runner.frameId = window.requestAnimationFrame(loop);
  }

  function stop() {
    if (runner.frameId) {
      window.cancelAnimationFrame(runner.frameId);
      runner.frameId = null;
    }
    runner.simulation = null;
    if (runner.canvas && runner.canvas.parentNode) {
      runner.canvas.parentNode.removeChild(runner.canvas);
    }
    runner.canvas = null;
    runner.ctx = null;
  }

  function handleMotionPreference(event) {
    if (event.matches) {
      stop();
      document.documentElement.style.backgroundColor = FALLBACK_COLOR;
      document.body.style.backgroundColor = 'transparent';
    } else {
      start();
    }
  }

  function init() {
    attachListeners();
    if (prefersReducedMotion.matches) {
      document.documentElement.style.backgroundColor = FALLBACK_COLOR;
      document.body.style.backgroundColor = 'transparent';
      return;
    }
    start();
  }

  function createConwaySimulation() {
    const sim = {
      id: 'conway',
      tickDelay: 220,
      cols: 0,
      rows: 0,
      cellSize: 10,
      grid: null,
      buffer: null
    };

    function seed(density = 0.42) {
      if (!sim.grid) {
        return;
      }
      for (let i = 0; i < sim.grid.length; i += 1) {
        sim.grid[i] = Math.random() < density ? (1 + Math.floor(Math.random() * 4)) : 0;
      }
    }

    function countNeighbors(x, y) {
      let total = 0;
      for (let dy = -1; dy <= 1; dy += 1) {
        for (let dx = -1; dx <= 1; dx += 1) {
          if (dx === 0 && dy === 0) {
            continue;
          }
          const nx = (x + dx + sim.cols) % sim.cols;
          const ny = (y + dy + sim.rows) % sim.rows;
          total += sim.grid[ny * sim.cols + nx] > 0 ? 1 : 0;
        }
      }
      return total;
    }

    return {
      id: sim.id,
      tickDelay: sim.tickDelay,
      handleResize(dim) {
        if (!dim.width || !dim.height) {
          return;
        }
        const smaller = Math.min(dim.width, dim.height);
        const baseSize = Math.max(6, Math.round(smaller / 42));
        sim.cellSize = clamp(Math.round(baseSize / 2), 5, 12);
        sim.cols = Math.max(1, Math.ceil(dim.width / sim.cellSize));
        sim.rows = Math.max(1, Math.ceil(dim.height / sim.cellSize));
        sim.grid = new Uint8Array(sim.cols * sim.rows);
        sim.buffer = new Uint8Array(sim.cols * sim.rows);
        seed();
      },
      step() {
        if (!sim.grid) {
          return;
        }
        let alive = 0;
        for (let y = 0; y < sim.rows; y += 1) {
          for (let x = 0; x < sim.cols; x += 1) {
            const idx = y * sim.cols + x;
            const neighbors = countNeighbors(x, y);
            const current = sim.grid[idx] > 0;
            let next = 0;
            if (current && (neighbors === 2 || neighbors === 3)) {
              next = Math.min(255, sim.grid[idx] + 1);
            } else if (!current && neighbors === 3) {
              next = 1;
            }
            sim.buffer[idx] = next;
            if (next) {
              alive += 1;
            }
          }
        }
        const tmp = sim.grid;
        sim.grid = sim.buffer;
        sim.buffer = tmp;
        if (!alive || alive / sim.grid.length < 0.05) {
          seed(0.55);
        }
      },
      draw(ctx, timestamp) {
        if (!sim.grid) {
          return;
        }
        const pulse = (Math.sin(timestamp / 1600) + 1) * 0.5;
        const gap = Math.max(0.25, sim.cellSize * 0.04);
        for (let y = 0; y < sim.rows; y += 1) {
          for (let x = 0; x < sim.cols; x += 1) {
            const age = sim.grid[y * sim.cols + x];
            if (!age) {
              continue;
            }
            const intensity = Math.min(1, age / 12);
            const lightness = clamp(85 - intensity * 60 - pulse * 10, 5, 85);
            const alpha = 0.2 + intensity * 0.5;
            ctx.fillStyle = `hsla(0, 0%, ${lightness}%, ${alpha})`;
            ctx.fillRect(
              x * sim.cellSize,
              y * sim.cellSize,
              sim.cellSize - gap,
              sim.cellSize - gap
            );
          }
        }
      },
      handlePointer(event, boost, dim) {
        if (!sim.grid || !dim.width || !dim.height) {
          return;
        }
        const gx = Math.floor((event.clientX / Math.max(1, dim.width)) * sim.cols);
        const gy = Math.floor((event.clientY / Math.max(1, dim.height)) * sim.rows);
        const radius = boost ? 5 : 3;
        for (let dy = -radius; dy <= radius; dy += 1) {
          for (let dx = -radius; dx <= radius; dx += 1) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > radius) {
              continue;
            }
            if (Math.random() > dist / (radius + 0.0001)) {
              const nx = (gx + dx + sim.cols) % sim.cols;
              const ny = (gy + dy + sim.rows) % sim.rows;
              sim.grid[ny * sim.cols + nx] = boost ? 12 : 6;
            }
          }
        }
      }
    };
  }

  function createLeniaSimulation() {
    const sim = {
      id: 'lenia',
      tickDelay: 90,
      cols: 0,
      rows: 0,
      cellSize: 6,
      field: null,
      buffer: null,
      stabilityCounts: null,
      lockedValues: null,
      params: {
        radius: 6,
        mu: 0.4,
        sigma: 0.1,
        dt: 0.25,
        lockFrames: 22,
        lockEpsilon: 0.1
      }
    };

    function ensureStateArrays() {
      if (!sim.field) {
        return;
      }
      if (!sim.stabilityCounts || sim.stabilityCounts.length !== sim.field.length) {
        sim.stabilityCounts = new Uint16Array(sim.field.length);
      } else {
        sim.stabilityCounts.fill(0);
      }
      if (!sim.lockedValues || sim.lockedValues.length !== sim.field.length) {
        sim.lockedValues = new Float32Array(sim.field.length);
      }
      sim.lockedValues.fill(-1);
    }

    function seedTrajectories(count = 9) {
      if (!sim.field) {
        return;
      }
      sim.field.fill(0);
      ensureStateArrays();
      for (let i = 0; i < count; i += 1) {
        let fx = Math.random() * sim.cols;
        let fy = Math.random() * sim.rows;
        let heading = Math.random() * Math.PI * 2;
        const length = 8 + Math.floor(Math.random() * 18);
        for (let step = 0; step < length; step += 1) {
          const cx = Math.round(fx) % sim.cols;
          const cy = Math.round(fy) % sim.rows;
          const strength = 0.3 + Math.random() * 0.35;
          const radius = Math.max(2, Math.round(sim.params.radius + 1 + Math.random() * 1.5));
          sprinkle(cx, cy, strength, radius);
          const speed = 0.8 + Math.random() * 0.6;
          fx = (fx + Math.cos(heading) * speed + sim.cols) % sim.cols;
          fy = (fy + Math.sin(heading) * speed + sim.rows) % sim.rows;
          heading += (Math.random() - 0.5) * 0.45;
        }
      }
    }

    function sprinkle(cx, cy, amount, radius) {
      for (let dy = -radius; dy <= radius; dy += 1) {
        for (let dx = -radius; dx <= radius; dx += 1) {
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > radius) {
            continue;
          }
          const nx = (cx + dx + sim.cols) % sim.cols;
          const ny = (cy + dy + sim.rows) % sim.rows;
          const idx = ny * sim.cols + nx;
          const falloff = Math.exp(-(dist * dist) / Math.max(1, radius * radius));
          sim.field[idx] = clamp(sim.field[idx] + amount * falloff, 0, 1);
          if (sim.lockedValues) {
            sim.lockedValues[idx] = -1;
          }
          if (sim.stabilityCounts) {
            sim.stabilityCounts[idx] = 0;
          }
        }
      }
    }

    function convolve(x, y) {
      const radius = sim.params.radius;
      let acc = 0;
      let weight = 0;
      for (let dy = -radius; dy <= radius; dy += 1) {
        for (let dx = -radius; dx <= radius; dx += 1) {
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > radius) {
            continue;
          }
          const nx = (x + dx + sim.cols) % sim.cols;
          const ny = (y + dy + sim.rows) % sim.rows;
          const idx = ny * sim.cols + nx;
          const w = Math.exp(-(dist * dist) / (radius * radius));
          acc += sim.field[idx] * w;
          weight += w;
        }
      }
      return weight ? acc / weight : 0;
    }

    return {
      id: sim.id,
      tickDelay: sim.tickDelay,
      handleResize(dim) {
        if (!dim.width || !dim.height) {
          return;
        }
        const smaller = Math.min(dim.width, dim.height);
        sim.cellSize = clamp(Math.round(smaller / 70), 4, 9);
        sim.params.radius = [3, 4, 5, 6][Math.floor(Math.random() * 4)];
        sim.cols = Math.max(1, Math.ceil(dim.width / sim.cellSize));
        sim.rows = Math.max(1, Math.ceil(dim.height / sim.cellSize));
        sim.field = new Float32Array(sim.cols * sim.rows);
        sim.buffer = new Float32Array(sim.cols * sim.rows);
        sim.stabilityCounts = new Uint16Array(sim.cols * sim.rows);
        sim.lockedValues = new Float32Array(sim.cols * sim.rows);
        sim.lockedValues.fill(-1);
        seedTrajectories();
      },
      step() {
        if (!sim.field) {
          return;
        }
        const { mu, sigma, dt, lockFrames, lockEpsilon } = sim.params;
        for (let y = 0; y < sim.rows; y += 1) {
          for (let x = 0; x < sim.cols; x += 1) {
            const idx = y * sim.cols + x;
            if (sim.lockedValues && sim.lockedValues[idx] >= 0) {
              sim.buffer[idx] = sim.lockedValues[idx];
              continue;
            }
            const potential = convolve(x, y);
            const growth = Math.exp(-Math.pow(potential - mu, 2) / (2 * sigma * sigma)) * 2 - 1;
            const current = sim.field[idx];
            const value = clamp(current + dt * growth, 0, 1);
            const delta = Math.abs(value - current);
            if (delta < lockEpsilon) {
              const nextCount = Math.min(
                lockFrames + 1,
                (sim.stabilityCounts ? sim.stabilityCounts[idx] : 0) + 1
              );
              if (sim.stabilityCounts) {
                sim.stabilityCounts[idx] = nextCount;
              }
              if (nextCount >= lockFrames) {
                if (sim.lockedValues) {
                  sim.lockedValues[idx] = value;
                }
                sim.buffer[idx] = value;
                continue;
              }
            } else if (sim.stabilityCounts) {
              sim.stabilityCounts[idx] = 0;
            }
            sim.buffer[idx] = value;
          }
        }
        const tmp = sim.field;
        sim.field = sim.buffer;
        sim.buffer = tmp;
      },
      draw(ctx, timestamp) {
        if (!sim.field) {
          return;
        }
        const pulse = (Math.sin(timestamp / 2200) + 1) * 0.5;
        const gap = Math.max(0.2, sim.cellSize * 0.03);
        for (let y = 0; y < sim.rows; y += 1) {
          for (let x = 0; x < sim.cols; x += 1) {
            const value = sim.field[y * sim.cols + x];
            if (value < 0.02) {
              continue;
            }
            const lightness = clamp(96 - value * 60 - pulse * 4, 35, 96);
            const alpha = 0.15 + value * 0.55;
            ctx.fillStyle = `hsla(210, 12%, ${lightness}%, ${alpha})`;
            ctx.fillRect(
              x * sim.cellSize,
              y * sim.cellSize,
              sim.cellSize - gap,
              sim.cellSize - gap
            );
          }
        }
      },
      handlePointer(event, boost, dim) {
        if (!sim.field || !dim.width || !dim.height) {
          return;
        }
        const gx = Math.floor((event.clientX / Math.max(1, dim.width)) * sim.cols);
        const gy = Math.floor((event.clientY / Math.max(1, dim.height)) * sim.rows);
        sprinkle(gx, gy, boost ? 0.8 : 0.4, sim.params.radius + (boost ? 4 : 2));
      }
    };
  }

  if (prefersReducedMotion.addEventListener) {
    prefersReducedMotion.addEventListener('change', handleMotionPreference);
  } else if (prefersReducedMotion.addListener) {
    prefersReducedMotion.addListener(handleMotionPreference);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


---
layout: page
title: Pixel Evolution
subtitle: An attempt to implement real time neuroevolution to study how genetic evolution can create intelligence without explicit fitness functions and generations.
---

Most of the evolutionary projects that I have been working on have consisted of two very important features of evolutionary algoritms:
* Fitness Function
  * This allows creatures' performance to be assigned a single number or rank that shows how good the behavior of this creature is.
  * For example, \\[ F = \text{Distance from Origin}\\]
  * This function would promote creatures to move away from the origin, as the ones that do move away from the origin have a higher chance to reproduce and spread their genetic makeup.
* Generations
  * This gives the evolutionary algorithm a chance to evaluate creatures, sort them by fitness, and then breed the higher fitness creatures together to create the next generation.

Although these are very important features of evolutionary algorithms, we don't see any explicit fitness functions in real life. We also do not see any explicit generations where all creatures are stopped, evaluated, and bred. This intruiged me, because I wanted to figure out how the evolution happened over the course of our history. 
Here's my attempt at doing that:

# PIXEL EVOLUTION
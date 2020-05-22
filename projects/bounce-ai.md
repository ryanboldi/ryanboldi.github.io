---
layout: page
title: Bouncer AI
subtitle: Training an AI to bounce a ball to a given goal. The AI would need to rotate and move its body to change the trajectory of the ball to the desired trajectory.
---

## Basic inputs and outputs for the neural network controller:
<p align="center">
<img src='./bounce/game.png' alt="Game plan" width="800px">
</p>

## How the creature can gain (:smile:) or lose (:frowning_face:) fitness
<p align="center">
<img src='./bounce/Plan.png' alt="How the player can die" width="850px">
</p>

### Results
This is the result after a few generations of training. Some of them have inverted brains and score on the RED side, but most of them learn to bounce the ball on the green wall, scoring repeatedly:
<p align="center">
<img src='./bounce/WinningDecent.gif' alt="Game plan" width="800px">
</p>

#### Here's another example of some interesting behaviour:
This one stays in place until the ball comes in short so it moves to the left to catch it.
<p align="center">
<img src='./bounce/Generation36.gif' alt="Game plan" width="800px">
</p>

#### I made the paddle much shorter, to see what happens:
They developed the behaviour to catch their own rebound off the wall between generation 14-15. They then learned how to hit it up into the air and then score with a somewhat obscure strategy (generation 19).
<p align="center">
<img src='./bounce/SmallPaddle.gif' alt="Game plan" width="800px">
</p>


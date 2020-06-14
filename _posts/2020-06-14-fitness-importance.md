---
layout: post
title: Why fitness is so important.
subtitle: And I'm not talking about physical fitness
tags: [evolutionary algorithm]
---

Fitness functions are a VERY important part of evolutionary algorithms. I'll be explaining some of the issues i've had with my most recent project, "Moon Lander", and why these issues were caused by the fitness function.

### What is a fitness function?
A fitness function is a function that returns how much reward a robot should be given for doing a certain task. Let's say we are training a robot to jump. the fitness function here could be:
\(\require{color}\)
\\[ F = \text{Distance Off Ground}\\]

This means whenever we want to evaluate a certain robot controller or morphology, we simply compute the distance off the ground of each robot, and this becomes its fitness. This means that the robots that jump higher will have a higher chance to reproduce, causing the robots to get better at jumping over many generations.


---
layout: page
title: Robot Arm
subtitle: Using symbolic regression to control a robot's arm.
---

This is a project attempting to create a robotic arm that can follow a user given trajectory. Instead of doing some complex math to figure out exactly how the different arm segments should move, I will attempt to use Genetic Evolution to evolve a good controller for the robot arm. 

[Run the project in your browser](https://ryanboldi.github.io/RobotArm/) 

(Start drawing at the tip of the robot's arm and release mouse at the end of the path)


## What is symbolic regression?

I like to think of it as the evolution as a mathematical expression. It is very close to the evolution of a neural network, but instead of neurons, we have 'processing units' that contain either a simple mathematical function (like addition) or a value (like 3.14).

The output is a somewhat illegible function that is (if done well) an accurate regression of the training data that can be used to predict new data points.

![Symbolic Regression Joke from medium.com](https://miro.medium.com/max/875/1*Drd2Jxzu8UCmDG3Sz0ZcfA.png)

#### Here is how I attempted to implement it in this project:
![Robot Arm Planning](RobotArmPlanning.png)

#### How I compared two different paths:
![Frechet](RobotArmPlanningFrechet.png)

#### Example Result:
![Result](RobotArmResult.gif)
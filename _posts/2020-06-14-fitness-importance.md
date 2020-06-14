---
layout: post
title: Why fitness is so important
subtitle: And I'm not talking about physical fitness
tags: [evolutionary algorithm]
---

Fitness functions are a VERY important part of evolutionary algorithms. I'll be explaining some of the issues i've had with my most recent project, "Moon Lander", and why these issues were caused by the fitness function.

### What is a fitness function?
A fitness function is a function that returns how much reward a robot should be given for doing a certain task. Let's say we are training a robot to jump. the fitness function here could be:
\\[ F = \text{Distance Off Ground}\\]

This means whenever we want to evaluate a certain robot controller or morphology, we simply compute the distance off the ground of each robot, and this becomes its fitness. This means that the robots that jump higher will have a higher chance to reproduce, causing the robots to get better at jumping over many generations.

Now, if the robot is having trouble jumping, it will NEVER recieve any fitness as it never leaves the ground. Common practice is to give a slightly smaller reward for doing something that leads to jumping. i.e. putting both feet on ground. The new fitness function would look something like:
\\[ F = \begin{cases}
        \text{Distance Off Ground} & \text{if jumped,}\newline
        5 & \text{if both feet on ground,}\newline
        0 & \text{otherwise.}\newline
        \end{cases}
        \\]

This means that creatures will first learn how to put both feet on the ground, as this gives them $$5$$ reward. This intermediary reward scaffolds the learning as having both your feet on the ground is a good starting point to learn how to jump.

### So what?
Well, here is where the issue comes in. In my latest project, [Moon Lander](https://github.com/ryanboldi/Moon-Lander), I am trying to get robots to learn how to land on the moon. Here is the fitness function I use to evaluate them:
\\[ F = \begin{cases}
        \text{10} & \text{if landed,}\newline
        \pi - \lvert\theta_{g} - \theta_{L}\rvert & \text{if crashed,}\newline
        0 & \text{otherwise.}\newline
        \end{cases}
        \\]

Let's break this down. If the moon lander LANDS safely, it gets $$10$$ reward. If it hits the ground, but crashes, it gets a score that depends on it's orientation relative to the ground. If it is entirely parrallel to the ground, that means $$\theta_{g} = \theta_{L}$$. This means the lander will receive $$\pi - 0 = \pi$$ reward. If the lander is entirely upside-down, that means $$\theta_{g}-\theta_{L} = \pi$$, therefore it will get $$\pi - \pi = 0$$ reward. If the lander never lands, it gets 0 fitness.

#### How's that an issue?
They say an image is worth a thousand words, so how many words would a gif be worth?:
<p stlye="text-align:center"><img src="/img/blog/fitness/bad.gif" alt="gif of landers falling without using boosters to receive small fitness instead of the main goal of landing.">

After about 950 generations of evolution, I would expect the creatures to have learnt how to use their boosters by now. Lo and behold, they haven't. Why? I claim that it is because of how generous I have been when assigning them intermediary fitness. Landing and bouncing off the ground seems to give the creatures between $$2$$ and $$3$$ fitness, but landing correctly only gives about 4x that, $10$ fitness. This means that creatures only benefit a (proportionally) small benefit for doing a much more complex task (turning on booster and landing). This means they reach a local maxima in the fitness landscape, and just fall down aiming to get those sweet sweet intermediary points.

Also, it doesn't help that some of them are lucky and survive the drop.

### Conclusion
In conclusion, we need to ensure that we are assigning the fitness of creatures to reward the behaviour we WANT, but also reward behaviour that leads to our goal behaviour. We don't want to reward intermediary behavior MORE than our goal. 

So, in future projects, I am going to ensure I create the fitness functions very delicately, as they are very important in pushing evolution in the direction we want!
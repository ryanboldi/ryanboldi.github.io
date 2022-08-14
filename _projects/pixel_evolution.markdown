---
layout: page
title: Pixel Evolution
description: Real time neuroevolution without explicit fitness functions or generations
img: /assets/img/pixel-evolution/evolved2.gif
importance: 1
category: fun
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
[Github page](https://github.com/ryanboldi/Pixel-Evolution)
[Watch the evolution happen in your browser!](https://ryanboldi.github.io/Pixel-Evolution/)

### Goal:
* Evolve sufficiently intelligent creatures without an explicit fitness function, similar to how intelligence evolved in nature.
* Simplicity was key for this project, as the more rules I put in, the more chance my human nature biases the outcome of the project.

### Plan:
As with most of my other projects, here's a quick doodle plan for this project:
<img src='/assets/img/pixel-evolution/plan.png' alt="plan" width="800"/>
I wanted to include a way for creature's behavior to be better than others, while not explicitly measuring their fitnesses. To do this, we have **food** particles floating around the world, and if the creature eats this food, they immediately reproduce and spread their genetic information throughout the population by replacing a random individual.

So, due to the individual nature of the reproduction scheme, we do not need generations as now each creature will have its own children and grandchildren, much like humans and other animals on Earth.

Creatures have the capacity to live forever, although to be able to do this, they must be eating food very consistently or their genetic makeup will go extinct. This is because everytime one of the other creatures eats food, you have a small chance to be replaced by their children. 

### Here is what they looked like right when they are initialized:
 ![random pixels](/assets/img/pixel-evolution/random1.gif)

 All of their brains are randomly instantiated Neural Networks, and through this evolutionary process, the neural networks that perform better have more children, and thus spread their good genes across the population.

I let evolution run for a few thousand **timesteps** (or 5 mins of training time). Here is the result:
 ![evolved pixels](/assets/img/pixel-evolution/evolved2.gif)

 As we can see, the creature's have "learned" to move downwards constantly, eating as much food as they can see in their eyesight. I claim that all the creatures moving downwards have evolved from one ancestral pixel than had the "move down" genes (or some varient of it). We could think of this like a **species** of pixels. We can also see a few pixels moving to the left. These would be part of a different species.

To test this claim, I re-evolved the creatures from the beginning with different random conditions:

 ![evolved pixels 2](/assets/img/pixel-evolution/evolved1.gif)
This is a really interesting result, because we can now see that the majority of pixels are moving left, eating any food that they can see. There are a few creatures who move upward aswell, representing two new species.

From these results, we can see that the creatures very quickly speciate due to a common ancestor that knocked out all the competition. 


### Issues / Further comments
Something I noticed when I dropped the creature population from 100 to 15 is that sometimes they get "stuck". This is because none of the 15 creatures ever actually eat a food, so they continute going in circles, no food is eaten, so no reproduction happens, and evolution halts. 
In the future, I plan to create a new project where each pixel has a set of energy, and has to eat a certain amount of food to replenish that energy. If it goes in circles for too long without eating, it will be killed off and replaced with a random pixel.

Something like this:
<img src='/assets/img/pixel-evolution/plan-energy.png' alt="plan energy" width="800"/>
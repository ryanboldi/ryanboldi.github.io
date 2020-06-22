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


### Goal:
* Evolve sufficiently intelligent creatures without an explicit fitness function, similar to how intelligence evolved in nature.
* Simplicity was key for this project, as the more rules I put in, the more chance my human nature biases the outcome of the project.

### Plan:
As with most of my other projects, here's a quick doodle plan for this project:
![pixel evolution plan](/img/pixel-evolution/plan.png)
I wanted to include a way for creature's behavior to be better than others, while not explicitly measuring their fitnesses. To do this, we have **food** particles floating around the world, and if the creature eats this food, they immediately reproduce and spread their genetic information throughout the population by replacing a random individual.

So, due to the individual nature of the reproduction scheme, we do not need generations as now each creature will have its own children and grandchildren, much like humans and other animals on Earth.

Creatures have the capacity to live forever, although to be able to do this, they must be eating food very consistently or their genetic makeup will go extinct. This is because everytime one of the other creatures eats food, you have a small chance to be replaced by their children. 

Here is what they looked like after about 6000 **timesteps**:

---
layout: post
title: To steer or not to steer
subtitle: that is the question
tags: [genetic algorithm, NEAT]
---

I've always wanted to test how far I could take my limited knowledge of [Neuroevolution of augmenting topologies](https://en.wikipedia.org/wiki/Neuroevolution_of_augmenting_topologies). In this project, I attempt to program creatures that learn how to steer. They will be controlled by neural networks that are created through neuroevolution.

### What is a genetic algorithm?
Simply put, it's a method to optimize a given problem that is based on Charles Darwin's 'Theory of Evolution by [natrual selection](https://en.wikipedia.org/wiki/Natural_selection)'.
#### How do they work?
![Genetic Algorithms Basic structure: Initialization -> Selection -> Crossover -> Mutation -> Termination](https://www.researchgate.net/profile/Hongfang_Liu/publication/260377604/figure/fig2/AS:213452158181378@1427902368463/Genetic-Algorithm-Tree-Basic-steps-of-GA-selection-crossover-and-mutation.png){: .center-block :}
* _Initialization_  
    This is the step where the population is created for the first time, usually all the creatures have completely random genes.
~~~~
popsize = 100  
for i from 0 -> popsize  
    make new random creature
~~~~

* _Selection_  
After we test the genes to figure out how good they are (fitness) we select a few of the best performers to be bred into the next generation.
My favorite way to do this is a method called [Roulette wheel selection](https://en.wikipedia.org/wiki/Fitness_proportionate_selection).
In fitness proportionate selection, 
~~~~
fitnesses = []
for i from 0 -> len(population)
    fitnesses.append(fitness(population[i]))

newPop = []
for i from 0 -> popsize
~~~~




### What is NEAT?
Good question! Its a pretty interesting approach to genetic algorithms

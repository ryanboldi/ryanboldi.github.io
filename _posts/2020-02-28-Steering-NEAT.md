---
layout: post
title: To steer, or not to steer
subtitle: that is the question
tags: [genetic algorithm, NEAT]
---

I've always wanted to test how far I could take my limited knowledge of [Neuroevolution of augmenting topologies](https://en.wikipedia.org/wiki/Neuroevolution_of_augmenting_topologies). In this project, I attempt to program creatures that learn how to steer. They will be controlled by neural networks that are created through neuroevolution.

### What is a genetic algorithm?
Simply put, it's a method to optimize a given problem that is based on Charles Darwin's 'Theory of Evolution by [natrual selection](https://en.wikipedia.org/wiki/Natural_selection)'.
#### How do they work?
![Genetic Algorithms Basic structure: Initialization -> Selection -> Crossover -> Mutation -> Termination](https://www.researchgate.net/profile/Hongfang_Liu/publication/260377604/figure/fig2/AS:213452158181378@1427902368463/Genetic-Algorithm-Tree-Basic-steps-of-GA-selection-crossover-and-mutation.png){: .center-block :}
* #### **_Initialization_**  
This is the step where the population is created for the first time, usually all the creatures have completely random genes.  
~~~~  
loop until population is full
    add new randomised creature to population
end for
~~~~

* #### **_Selection_**  
After we test the genes to figure out how good they are (fitness) we select a few of the best performers to be bred into the next generation.
My favorite way to do this is a method called [Roulette wheel selection](https://en.wikipedia.org/wiki/Fitness_proportionate_selection).
In fitness proportionate selection, the higher the fitness of a creature in the population, the more likely it is to be selected for the next population.   
~~~~
for all members of population
    sum += fitness of this individual
end for
~~~~    
The above code just totals up the fitnessses.
Next, we need to assign a probability based on the total.
~~~~
for all members of population
    probability = sum of probabilities + (fitness / sum)
    sum of probabilities += probability
end for
~~~~
The above code just figures out the probability for each member of the population. Next, we need to choose the creatures randomly, with a higher probability of selection if their fitness is higher.
~~~~
loop until new population is full
    do this twice
        number = Random between 0 and 1
        for all members of population
            if number > probability but less than next probability 
                then you have been selected
        end for
    end
    add offspring to new population
end loop
~~~~
After this is completed, we should have a new population made completely out of 


### What is NEAT?
Good question! Its a pretty interesting approach to genetic algorithms

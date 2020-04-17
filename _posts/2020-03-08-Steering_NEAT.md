---
layout: post
title: To steer, or not to steer?
subtitle: That is the quesiton
tags: [genetic algorithm, NEAT, Neuroevolution]
---

I've always wanted to test how far I could take my limited knowledge of [Neuroevolution through augmenting topologies](http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf). In this project, I attempt to program creatures that learn how to steer. They will be controlled by neural networks that are created through neuroevolution.



### What is NEAT?
Good question! Its a pretty interesting _(I would have said **neat**, but didn't want to witness the end of my comedic career)_ approach to genetic algorithms

Let's go through every word of "NeuroEvolution through augmenting topologies", and I'll explain each one to the best of my ability.
#### Neuro:
This part of algorithm referes to **Neural Networks**.

Well, What _is_ a neural network?
![Neural Network](https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Colored_neural_network.svg/280px-Colored_neural_network.svg.png){: .center-block :}
A Neural network is a _(very simplified)_ mathematical model of the human brain. Neurons are connected to each other by **weights**, and they are arranged in **layers**.
This arrangement is known as the **topology** _(more on this later)_ of the neural network. 

The weights of the neural network are the things that can be asigned to allow the network to do certain tasks.
What can they do?


_**Supervised:**_
* Classification - Recognise handwritten letters and numbers, detecting faces, and even classifying emails as spam.  
This is a supervised learning method as you would need to train the network on a predifined dataset with labels. This would allow the network's weights to be adjusted correctly to have the functionality we want.

_**Unsupervised:**_
* Clustering - The detection of similarities in a dataset.
This is unsupervised learning as the network will be provided with data that isn't labeled, and is tasked with making sense out of this data.

For this project, we will be using unsupervised learning because we will not be giving the neural network a labeled dataset.

More on Neural Networks later. For now, we will discuss the evolution aspect of this.

#### Evolution:
As I discussed in [a previous post](/2020-02-28-intro_GAs/), genetic algorithms are very powerful. In this project, I will be using genetic evolution to change the neural networks, making them better and better at the given task.

#### Augmenting topologies:
Augmenting topologies is just the fancy way to say "Changing Shape". Not only will the previsously discussed neural network have its weights changed by the genetic algorithm, the _topology_ of the neural network will also change. This means there will be a change in the amount of nodes in each layer, or maybe even new connections between nodes that already exist.

According to [(Stanley 2002)](http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf), Augmenting the topology of the neural network, along with the weights, will allow for more complex behaviour that better resembles true evolution.

### How do you implement this?

In the future, I intend to program my own implenetation of NEAT. For the time being, I will use this [fantastic implementation of NEAT](https://github.com/wagenaartje/neataptic), written by [Thomas Wagenaar](https://github.com/wagenaartje).

### Final result:
Here's a GIF of the creatures after 27 generations of training:
![27 generations](/img/steering/Steering27.gif)

You can find more information about the specifics of the project [here](https://ryanboldi.github.io/Steering-NEAT/)
or, you could just skip to seeing them live [here](https://ryanboldi.github.io/Steering-NEAT/game.html)












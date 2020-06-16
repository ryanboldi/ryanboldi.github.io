---
layout: post
title: Why fitness is so important
subtitle: And I'm not talking about physical fitness
tags: [evolutionary algorithm]
---
# Multiplicative Persistence
 A genetic algorithm to find a number with very large multiplicative persistence: (how long it takes to boil down to a single digit)
 * 123 -> 1x2x3 = 6 (so this has MP of 1)
 *  6788 -> 6x7x8x8 = 2688 -> 2x6x8x8 = 768 -> 7x6x8 = 336 -> 3x3x6 = 54 -> 5x4 = 20 -> 2x0 = 0 (that's 6) 

the official record for the smallest number with mulptiplicative persistence of 11 is:
**277777788888899**


I let my genetic algorithm search through all possible 15 digit numbers to see how close I could get to the real record.

This is the log after training for 50 generations. The Algorithm discorvers a solution with MP of 10 within one generation. 
~~~
gen: 0 -> best: 4 || answer: 111122344688889
gen: 1 -> best: 10 || answer: 122333344666778
gen: 2 -> best: 9 || answer: 223344467778888
gen: 3 -> best: 10 || answer: 113333344667788
gen: 4 -> best: 10 || answer: 113333444666778
gen: 5 -> best: 10 || answer: 122333344666778
gen: 6 -> best: 10 || answer: 113333444666778
gen: 7 -> best: 10 || answer: 112333446666778
gen: 8 -> best: 8 || answer: 111122234677789
gen: 9 -> best: 9 || answer: 111222233446669
gen: 10 -> best: 10 || answer: 111234444778999
gen: 11 -> best: 9 || answer: 111233477777899
gen: 12 -> best: 10 || answer: 112223346778899
gen: 13 -> best: 10 || answer: 112222446778999
gen: 14 -> best: 10 || answer: 112223346778899
gen: 15 -> best: 10 || answer: 112223337788899
gen: 16 -> best: 10 || answer: 112223346778899
gen: 17 -> best: 10 || answer: 112233336778889
gen: 18 -> best: 10 || answer: 112223346778899
gen: 19 -> best: 10 || answer: 112223346778899
gen: 20 -> best: 10 || answer: 112233336778889
gen: 21 -> best: 10 || answer: 112223446677899
gen: 22 -> best: 10 || answer: 112223346778899
gen: 23 -> best: 10 || answer: 112223346778899
gen: 24 -> best: 10 || answer: 111223466778899
gen: 25 -> best: 10 || answer: 112223446677899
gen: 26 -> best: 10 || answer: 112223446677899
gen: 27 -> best: 10 || answer: 111223367788899
gen: 28 -> best: 10 || answer: 112233444677899
gen: 29 -> best: 10 || answer: 111223466778899
gen: 30 -> best: 10 || answer: 122333334477889
gen: 31 -> best: 10 || answer: 111223466778899
gen: 32 -> best: 10 || answer: 111223466778899
gen: 33 -> best: 10 || answer: 111233347788899
gen: 34 -> best: 10 || answer: 112223346778899
gen: 35 -> best: 10 || answer: 111233347788899
gen: 36 -> best: 10 || answer: 111223466778899
gen: 37 -> best: 10 || answer: 112233346677889
gen: 38 -> best: 10 || answer: 111223466778899
gen: 39 -> best: 10 || answer: 112233346677889
gen: 40 -> best: 10 || answer: 112233336778889
gen: 41 -> best: 9 || answer: 111112233468899
gen: 42 -> best: 10 || answer: 111233446778899
gen: 43 -> best: 9 || answer: 111122333446689
gen: 44 -> best: 10 || answer: 112223346778899
gen: 45 -> best: 10 || answer: 112223346778899
gen: 46 -> best: 10 || answer: 111233446778899
gen: 47 -> best: 10 || answer: 222333333467788
gen: 48 -> best: 9 || answer: 111122333466668
gen: 49 -> best: 10 || answer: 112223337788899
~~~

As we can see, the algorithm quickly learns not to have 5s and 2s together, as they multiply to make 10, (which has a 0 and thus -> instant loss)
BUT, we also see that it doesn't actually reach the optimum of 11.

Let's see if we can try with a different amount of digits.

#### 2 digit
The highest multiplicative persistence of a 2 digit number is 4. 
* 77 -> 7x7 = 49 -> 4x9 = 36 -> 3x6 = 18 -> 1x8 -> 8     (4 steps)

Let's see what this program finds:
~~~
gen: 0 -> best: 3 || answer: 49
gen: 1 -> best: 4 || answer: 77
~~~

Pretty easy.

Let's do some more:
#### 5 digit
68889 has a multiplicative persistence of 7, and it has the largest MP of a 5 digit number. let's see what the program finds:
~~~
gen: 0 -> best: 6 || answer: 24678
gen: 1 -> best: 5 || answer: 23448
gen: 2 -> best: 6 || answer: 34478
gen: 3 -> best: 5 || answer: 12777
gen: 4 -> best: 6 || answer: 23788
gen: 5 -> best: 6 || answer: 23788
gen: 6 -> best: 6 || answer: 24678
gen: 7 -> best: 6 || answer: 23788
gen: 8 -> best: 6 || answer: 16788
gen: 9 -> best: 6 || answer: 23788
gen: 10 -> best: 5 || answer: 11679
gen: 11 -> best: 6 || answer: 23788
gen: 12 -> best: 6 || answer: 24678
gen: 13 -> best: 6 || answer: 23788
gen: 14 -> best: 6 || answer: 23788
gen: 15 -> best: 6 || answer: 23788
gen: 16 -> best: 6 || answer: 24678
gen: 17 -> best: 5 || answer: 13448
gen: 18 -> best: 6 || answer: 24678
gen: 19 -> best: 6 || answer: 23788
gen: 20 -> best: 5 || answer: 26888
gen: 21 -> best: 5 || answer: 12388
gen: 22 -> best: 6 || answer: 24678
gen: 23 -> best: 6 || answer: 23788
gen: 24 -> best: 5 || answer: 22388
gen: 25 -> best: 6 || answer: 67788
gen: 26 -> best: 6 || answer: 23788
gen: 27 -> best: 6 || answer: 24678
gen: 28 -> best: 7 || answer: 68889
~~~

A bit harder, but not much.

Alright, how about one more?

#### 8 digits

26888999 is the smallest 8 digit number with an MP of 9. This number takes a whopping 9 steps to reduce down to a one digit number!
let's give this one a go:

~~~
gen: 0 -> best: 7 || answer: 12347789
gen: 1 -> best: 7 || answer: 12347789
gen: 2 -> best: 7 || answer: 12347789
gen: 3 -> best: 7 || answer: 11666778
gen: 4 -> best: 7 || answer: 12347789
gen: 5 -> best: 7 || answer: 11666778
gen: 6 -> best: 8 || answer: 14666778
gen: 7 -> best: 7 || answer: 11666778
gen: 8 -> best: 7 || answer: 11666778
gen: 9 -> best: 7 || answer: 11666778
gen: 10 -> best: 6 || answer: 11667778
gen: 11 -> best: 6 || answer: 13468889
gen: 12 -> best: 8 || answer: 13477889
gen: 13 -> best: 8 || answer: 12677889
gen: 14 -> best: 7 || answer: 22333488
gen: 15 -> best: 7 || answer: 12226889
gen: 16 -> best: 8 || answer: 13477889
gen: 17 -> best: 7 || answer: 12344668
gen: 18 -> best: 7 || answer: 11238889
gen: 19 -> best: 8 || answer: 33688899
gen: 20 -> best: 6 || answer: 12233999
gen: 21 -> best: 8 || answer: 33688899
gen: 22 -> best: 8 || answer: 24688999
gen: 23 -> best: 8 || answer: 33688899
gen: 24 -> best: 8 || answer: 24688999
gen: 25 -> best: 8 || answer: 33688899
gen: 26 -> best: 6 || answer: 24789999
gen: 27 -> best: 8 || answer: 33688899
gen: 28 -> best: 6 || answer: 14678888
gen: 29 -> best: 7 || answer: 11347799
gen: 30 -> best: 7 || answer: 22333779
gen: 31 -> best: 7 || answer: 22333779
gen: 32 -> best: 9 || answer: 44688999
~~~

I got *A* solution with an MP of 9 after 32 generations, but this isn't the smallest one. Let's keep going:

~~~
gen: 33 -> best: 7 || answer: 12244689
gen: 34 -> best: 8 || answer: 34668899
gen: 35 -> best: 8 || answer: 34668899
gen: 36 -> best: 8 || answer: 34668899
gen: 37 -> best: 6 || answer: 36667899
gen: 38 -> best: 8 || answer: 34668899
gen: 39 -> best: 8 || answer: 26668899
gen: 40 -> best: 6 || answer: 34678999
gen: 41 -> best: 6 || answer: 36667899
gen: 42 -> best: 9 || answer: 36688899
gen: 43 -> best: 5 || answer: 11334788
gen: 44 -> best: 9 || answer: 44688999
gen: 45 -> best: 7 || answer: 12334688
gen: 46 -> best: 8 || answer: 26668899
gen: 47 -> best: 7 || answer: 12333888
gen: 48 -> best: 7 || answer: 23334778
gen: 49 -> best: 7 || answer: 12366778
gen: 50 -> best: 8 || answer: 33688899
gen: 51 -> best: 7 || answer: 23344677
gen: 52 -> best: 6 || answer: 47777888
gen: 53 -> best: 7 || answer: 22344779
gen: 54 -> best: 8 || answer: 26668899
gen: 55 -> best: 7 || answer: 22344779
gen: 56 -> best: 7 || answer: 12234889
gen: 57 -> best: 7 || answer: 11344889
gen: 58 -> best: 8 || answer: 77788899
gen: 59 -> best: 7 || answer: 11344889
gen: 60 -> best: 6 || answer: 37778888
gen: 61 -> best: 8 || answer: 22377889
gen: 62 -> best: 7 || answer: 12344489
gen: 63 -> best: 9 || answer: 26888999
~~~

There we go! it took 63 generations to find the smallest 8 digit number with an MP of 9.



Here are the smallest n digit numbers with maximal MP:
n number

1 0

2 77

3 679

4 6788

5 68889

6 168889

7 2677889

8 26888999

9 126888999

10 3778888999

11 13778888999

12 113778888999

13 1113778888999

14 11113778888999

15 277777788888899

16 1277777788888899

17 11277777788888899

18 111277777788888899


#### Source:
Weisstein, Eric W. "Multiplicative Persistence." From MathWorld--A Wolfram Web Resource. https://mathworld.wolfram.com/MultiplicativePersistence.html
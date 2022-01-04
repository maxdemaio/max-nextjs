---
title: Nand to Tetris - Memory
date: '2022-01-03'
---

Example description

---

## Sequential Logic

Before, I completely ignored the issue of time. The ALU took input and spit out an output. The output was a function of the input. This is know as Combinatorial logic.

We want to be able to remember state. Physical time in the real world is continuous. We can't mimic real time, but we can use [discretization](https://en.wikipedia.org/wiki/Discretization). This is like how we can use riemann sums to approximate the area under a function's curve.

We can use a clock to turn physical time into discrete time. A clock is an oscillator of 0's and 1's at a fixed rate. Each cycle would be a digit time unit. Clock cycles are longer than the time it takes a bit to travel the distance from one chip in the architecture to another. This guarantees that by the time a sequential chip updates its state, the inputs will be valid.

Combinatorial: out[t] = function(in[t])

Sequential: out[t] = function(in[t-1])

## Flip Flops

## Memory Units

## Counters

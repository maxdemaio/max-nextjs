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

state[t] = function(state[t-1])

We now need a chip that can remember one bit of information from time t-1 so it can be used at time 1. There are two possible states, remembering t-1 or not remembering t-1 (1 or 0). Flipping between two possible states allows for this. Gates that can flip between two states are called Flip-Flops.

How is this done? Clocked data flip flops remembers the data from the previous time unit it and can output it in the current time unit. In the diagram, the triangle represents that the chip depends on time. The chip depends upon what happened in a previous state.

![DFF Diagram](/static/images/nand-tetris/dff.png)

To remember a value forever until requested to load a new value we can use registers. If load(t-1) then out(t)=in(t-1) otherwise out(t)=out(t-1). Let's take this 1-bit register as an example:

![Register Diagram](/static/images/nand-tetris/register.png)

The implementation would consist of one MUX chip and one DFF chip. Once we have made a basic mechanism to remember a single bit over time, we can construct arbitrarily wide registers. To do this, we form an array of as many single-bit registers as needed, creating a register that holds multi-bit values.

## Memory Units

## Counters

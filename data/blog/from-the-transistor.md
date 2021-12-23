Hardware Platform: Low level code --(assembler)--> computer architecture --(digital design)--> CPU, RAM, chipset --(gate logic)--> elementary logic gates --> EE and hardware.

In programming we normally start with how to make a "hello, world" application. We would write this is a high-level programming language. This programming language would be rich with expressions, loops, data types, classes methods, and built in operations. However, what is the underlying implementation of this? The underlying implementation is the "how" and the high-level programming language is the "what".

Programming allows us to have multiple levels of abstraction which lets us forget about the "how". Here I'm going to learn the "how" by traversing these levels. At each step we can take the last level as given, focus on the current level's implementation, and test that it works and continue.

This post contains my reflections while teaching myself about elementary logic gates, ALUs, memory systems, low level programs, computer architecture, assemblers, and how to build a [Hack Computer](https://en.wikipedia.org/wiki/Hack_computer). This computer will have 3 components (ROM, CPU, RAM) and the final product can be connected to a keyboard and a display unit.

![The Hack Computer Block Diagram](/static/images/nand-tetris/Hack_Diagram.png)

---

## Boolean Functions and Gate Logic

### Boolean logic

Boolean values can either be 0 or 1. We can perform boolean operations like And, Or, and Not:

| a   | b   | And |
| --- | --- | --- |
| 0   | 0   | 0   |
| 0   | 1   | 0   |
| 1   | 0   | 0   |
| 1   | 1   | 1   |

| a   | b   | Or  |
| --- | --- | --- |
| 0   | 0   | 0   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 1   |

| a   | Not |
| --- | --- |
| 0   | 1   |
| 1   | 0   |

With these boolean operations we can perform boolean expressions Not(0 Or (1 And 1)) = Not(0 Or 1) = Not(1) = 0. Using this knowledge we can make boolean functions like f(x,y,z) = (x And y) Or (Not(x) And z). These functions can be represented with formulas, truth tables, or canonical representations.

Boolean identities relate to mathematics. For example, a + b = b + a. similarly (x And y) = (y And x). This is the commutative law. Also, associative laws, distributive laws, de morgan laws [Not(x Or y) = Not(x) And Not(y)], and more apply.

We can now apply these identities to boolean algebra to rearrange and rewrite expressions by laws. For example, Not(Not(x) And Not(x Or y)) = x Or y.

## Boolean Functions

The art of logic design can be broken down into doing the most with the least amount possible. Let's take for example the Xor function:

| a   | b   | out |
| --- | --- | --- |
| 0   | 0   | 0   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 0   |

The Xor function like can be expressed as Or(And(a, Not(b)), And(Not(a),b)). However, this approach requires five gates of three different kinds. To do the most with the least amount of gates possible you can use four Nand gates.

## Boolean Arithmetic and the ALU

## Memory

## Machine Language

## Computer Architecture

## Assembler

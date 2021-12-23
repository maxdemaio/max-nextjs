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

### Boolean Functions

Any boolean function can be represented using an expression only using the operations And, Or, and Not. This is thanks to the finite world of boolean algebra. In fact, you can represent any expression using only And and Not operations.

**Proof (de morgan law):**

(x Or y) = Not(Not(x) And Not(y))

There is one operation that suffices to represent any expression, Nand. (x Nand y) = Not(x And y). It is the negation of x And y.

| a   | b   | Nand |
| --- | --- | ---- |
| 0   | 0   | 1    |
| 0   | 1   | 1    |
| 1   | 0   | 1    |
| 1   | 1   | 0    |

**Proof:**

If you can do Not and And, you can do everything. We can see that Not(x) = (x Nand x) and (x And y) = Not(x Nand y).

### Logic Gates

A logic gate is a technique to implement boolean functions. Can be used interchangeably with "chips" because we're talking about physical devices that implement boolean functions. Examples can be elementary like Nand, And, Or etc. or composite like Mux, Adder, and more. Here I show an And and a three way And:

**put and svgs here**
**put three way and which is composite here**

We see only the inputs and outputs and not the implementation. If you wanted to briefly understand it, you'd take a look at the documentation/interface/abstraction of the chip. The implementation is the "how" and the interface is the "what". Think of chips as APIs where you could pass a request body (input) and receive a response (output) based on the chip's inner functions (business logic/implementation).

Circuit implementations can realize these gates with electricity. The light bulb in a circuit being on/off would represent the output of a gate.

![And Circuit Diagram](/static/images/nand-tetris/and-circuit.png)

However, I will not be diving into physical implementations since that would be more aligned with electrical engineering and physics than computer science.

### HDL

Hardware Description Language (HDL)

...

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

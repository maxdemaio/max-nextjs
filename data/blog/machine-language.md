---
title: Nand to Tetris - Machine Language
date: '2022-01-12'
---

Machine language is any low-level programming language that has machine language instructions. These instructions are used to control a computer's central processing unit (CPU).

---

## Machine Languages

There is a universality in technology. The same hardware can run many different software programs. The most primitive form of a program is a sequence of instructions in binary. These sequences cause our hardware to apply the functionality of the program.

How do we specify these sequences of instructions? We need operations, program counters, and addressing. We could write programs in binary but it would be very difficult. High-level languages can be compiled into machine language for hardware to understand.

To learn how to build a computer we need to deal directly with machine language. It's very good for highly optimized code because you can tell the hardware exactly what you want. Writing code closer to the hardware is known as [hardware acceleration](https://en.wikipedia.org/wiki/Hardware_acceleration).

Instruction: 010001000110010

- ADD: 0100010
- R3: 0011
- R2: 0010

Now instead of coding directly in binary we can use a machine language instructions using assembly language. This assembly language will have an Assembler program to convert it into its binary counterpart.

```asm
ADD R2, R1, R3
```

## Machine Language Elements

Machine languages are the most important interface in the world of computer science. It allows software to speak with the hardware. What are the operations our hardware should perform? Where should we get the data? How is the program controlled? This is all answered by machine language.

Throughout these sequences of instructions accessing memory is costly. We need to supply a long address to get data and supplying its contents to the CPU is slow. A solution to this is having a memory hierarchy.

A memory hierarchy consists of a small memory that is easy to access and fast. This is the cache. The main memory is larger and less cheap to access. Then the slowest memory can sit on disk. The farther away you get from the ALU/CPU the more expensive it becomes to get that data.

Also, the CPU usually contains a few easily accessed registers. They are central to machine language. Not only can you use them to store data, but you can store addresses in them.

Addressing Modes:

```asm
// R2 <- R2 + R1
// Register
Add R1, R2
```

```asm
// Mem[200] <- Mem[200] + R1
// Direct
Add R1, M[200]
```

```asm
// Mem[A] <- Mem[A] + R1
// Indirect
Add R1, @A
```

```asm
// R1 <- R1 + 73
// Immediate
Add 73, R1
```

Input and output devices interact with the CPU with drivers. Drivers know the protocol on how to talk to the CPU. Example I/O devices would be a keyboard, mouse, camera, screen, and many more. This can be done by memory mapping locations specific to the I/O devices.

When the CPU executes these machine instructions in sequence there is a flow control. Occasionally you need to jump unconditionally to another location to loop. You can also do condition jumps to check if conditions are met.

## The Hack Computer and Machine Language

The Hack Computer is a 16-bit machine.

![Hack Computer Diagram](/static/images/nand-tetris/Hack_Diagram.png)

**Hardware**

- Data memory (RAM): a sequence of 16-bit registers (RAM[0], RAM[1], RAM[2], ...)
- Instruction memory (ROM): a sequence of 16-bit registers (RAM[0], RAM[1], RAM[2], ...)
- CPU: performs 16-bit instructions
- Instruction bus / data bus / address buses

**Software**

- Hack machine language
  - 16-bit A instructions
  - 16-bit C instructions
- Hack program: sequence of instructions written in the Hack machine language

**Control**

- ROM is loaded with a Hack program
- Reset button is pushed
- Program begins running

**Registers**

- CPU has two registers close to it, A (data or address) and D (data) registers
- The RAM can also be called the M register (addressed by A)

You can write machine languages in two different flavors. You can write machine language in symbolic language or binary code.

```hack
@17
D+1;JLE
```

```
0000000000010001
1110011111000110
```

The symbolic language is translated into binary code (assembler) which can then be executed by the computer.

### Syntax (Symbolic)

**A-instruction**

- `@value` (non-negative decimal or symbol referring to such a constant):

```hack
// Set RAM[100] to -8
@100 // A=100
M=-8 // RAM[100] = -8
```

This will set the A-register to 100. Then RAM[100] becomes the selected RAM register (M). Then RAM[100]'s value becomes -8.

**C-instruction**

- `dest = comp ; jump` (destination and jump are optional)
- comp field is any computation out of a fixed set of computations
- dest field is where the computation result will be stored
- jump directive if(comparing jump to 0) jumps to execute the instruction in ROM[A]

```hack
// Set RAM[12] to the value of the D register minus 1
@12 // A=12
M=D-1 // RAM[12]=D-1
```

```hack
// If (D-1==0) then jump to execute instruction stored in ROM[68]
// Check to terminate loop pretty much
@68 // A=56
D-1;JEQ // if (D-1==0) goto 56
```

## Input/Output

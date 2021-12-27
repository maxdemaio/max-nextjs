---
title: Nand to Tetris - Boolean Arithmetic & the ALU
date: '2021-12-26'
---

Some description here lol

---

## Binary Numbers

For n bits, you can have 2^n possible binary combinations. With binary we can represent numbers. For example, if you wanted to know the value of "101" of binary in decimal form you would do (2^2 \* 1 + 2^1 \* 0 + 2^0 \* 1).

| Decimal | Binary |
| ------- | ------ |
| 0       | 0      |
| 1       | 1      |
| 2       | 10     |
| 3       | 11     |
| 4       | 100    |

## Binary Addition

Binary numbers can be added digit by digit from right to left, with the same method as decimal addition. If the last bit-wise addition generates a carry of 1, we can report overflow; otherwise, the addition completes successfully. Subtraction comes for free once we learn how to use negative binary numbers. Multiplication and division I'll postpone until we use software.

### Adders

- Half adder: adds two bits
- Full adder: adds three bits
- Adder: adds two numbers

We can implement all of these adders as chips in HDL. The goal is to build up to a multi-bit adder. An example of this would be 16 full adders together or 15 full adders and 1 half adder. This would result in out=(a+b) where everything is a 16-bit integer and overflow is ignored. We could code the implementations for half/full adders and be set to add any n-sized bit binary number.

## Negative Numbers

To represent negative numbers in binary, almost all computers use what's known as 2's complement or the radix complement. The complement of a binary digit x would be (2^n - x).
If x is 0 it would just remain as 0.

| Positive Decimal | Positive Binary | Negative Binary | Negative Decimal |
| ---------------- | --------------- | --------------- | ---------------- |
| 0                | 0000            |                 |                  |
| 1                | 0001            | 1111            | -1               |
| 2                | 0010            | 1110            | -2               |
| 3                | 0011            | 1101            | -3               |
| 4                | 0100            | 1100            | -4               |
| 5                | 0101            | 1011            | -5               |
| 6                | 0110            | 1010            | -6               |
| 7                | 0111            | 1001            | -7               |
|                  |                 | 1000            | -8               |

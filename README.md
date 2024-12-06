# TypeScript Type Error: Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript type error and its solution. The error occurs when a function expecting a number receives a string argument. The solution involves stricter type checking and input validation to prevent this error.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, the code calls `add` with a string and a number, leading to a type error. 

## Solution

The solution uses type guards to check if the input is a number. If not, it throws an error or provides a default value. This prevents the type error at runtime and improves code robustness.
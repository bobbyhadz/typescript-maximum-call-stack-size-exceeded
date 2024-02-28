export {};

// Maximum call stack size exceeded Error in TypeScript

// EXAMPLE 1 - Solve the error when using getter methods

class Employee {
  protected _country = 'Germany';

  get country(): string {
    return this._country;
  }
}

// ---------------------------------------------------

// // EXAMPLE 2 - Solve the error when working with regular functions

// let counter = 0;

// function example(num: number) {
//   if (num < 0) {
//     return;
//   }

//   counter += 1;
//   example(num - 1);
// }

// example(3);

// console.log(counter); // 👉️ 4

// ---------------------------------------------------

// // EXAMPLE 3 - Make sure you don't have infinite loops

// function sum(a: number, b: number) {
//   return a + b;
// }

// let total = 0;

// for (let i = 10; i > 0; i--) {
//   total += sum(5, 5);
// }

// console.log(total); // 👉️ 100

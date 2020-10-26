// function getTotal(num1: number, num2: number): number {
//   return num1 + num2
// }

console.log(getTotal(1, 2))

// function sayHello(): void {
//   console.log('Hello, World')
// }

// sayHello()

// function errorFn(): never {
//   throw new Error()
//   console.log('123')
// }

// errorFn()
// console.log('fn')

function add({ num1, num2 }: { num1: number, num2: number }): number {
  return num1 + num2
}

let total: number = add({ num1: 3, num2: 2 })
console.log(total)
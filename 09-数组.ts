// let arr: number[] = [1]
// for(let i = 0; i < 10; i++) {
//   arr.push(i)
// }
// console.log(arr)
let arr: any[] = [1, '2', 3, {}]
console.log(arr)

// 数组泛型写法定义
let arr1: Array<number> = [1, 2, 3, 4, 5]
console.log(arr1)

// 接口定义数组
interface NumberArray {
  [index: number]: number
}

let arr2: NumberArray = [1, 2, 3, 4]
console.log(arr2)

// 也可以使用联合类型
let arr3: (number | string)[] = [1, '2', 3]
console.log(arr3)

class Madam {
  name: string;
  age: number;
}

let males: Madam[] = [
  {
    name: 'xiaomi',
    age: 18
  },
  {
    name: 'dami',
    age: 20
  },
]
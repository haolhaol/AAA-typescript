// 当我们使用的时候，这里第一第二个参数都是能够传入string和number类型的，
// 但是我们希望假如第一个传入的是string类型的时，第二个参数也是string类型
// function join(first: string | number, second: string | number) {
//   return `${first}${second}`
// }

// T用于捕获用户传入的类型
function join<T>(first: T, second: T): string {
  return `${first}${second}`
}

// 这里函数在使用时尖括号中传入的类型就指向了上面函数定义时的 T
// let str3 = join<string>('123', '456')

// 泛型也支持类型推断，不指定类型时，会根据传入的参数自动推断类型，例如这里传入的是string类型的，会加上泛型类型为string
let str3 = join('123', '456')
console.log(str3)

// 方法一
// function myFun<T>(...parmas: T[]) {
//   return parmas
// }

// 方法二
function myFun<T>(...parmas: Array<T>): Array<T> {
  return parmas
}
console.log(myFun<string>('123', '456'))

// 支持同时定义多个泛型
function join2<T, P>(first: T, second: P): string {
  return `${first}${second}`
}

console.log(join2<string, number>('张三', 123))
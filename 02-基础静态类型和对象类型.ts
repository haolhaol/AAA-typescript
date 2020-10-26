let count1: number = 918
let myName: string = 'zhangsan'
// null undefine boolean void symbol

// 定义对象类型
let xiaojiejie: {
  name: string,
  age: number
} = {
  name: 'xiaohong',
  age: 18
}

console.log(xiaojiejie)

// 数组类型
let citys: string[] = ['北京', '上海', '天津']
console.log(citys)

// 定义类
class Person {
  constructor(name: string) {
    this.name = name
  }
  name: string
  say() {
    console.log(this.name)
  }
}

let xiaoming: Person = new Person('小明')
xiaoming.say()

// 函数形式
let fn: Function = () => {
  console.log('fn的内容')
}
fn()

// 定义有返回值的函数
let fn2: () => string = function () {
  return 'fn2'
}
console.log(fn2())

function fn3(): string {
  return 'fn3'
}
console.log(fn3())

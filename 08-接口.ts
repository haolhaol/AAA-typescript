interface Dog {
  name: string;
  color: string;
  // 定义方法, 前面是函数名，后面是返回值类型
  say(): string;
}

let laifu: Dog = {
  name: 'laifu',
  color: 'red',
  say() {
    console.log('这是一只' + this.color + this.name)
    return '123'
  }
}

laifu.say()
console.log(laifu)

// interface Cat {
//   name: string
//   color: string
// 任意属性，可有可无，属性名是任意的，自己在实现接口时定义，不指定，必须是any类型的
//   [propName: string]: any
// }

// let xiaomi: Cat = {
//   name: '小咪',
//   color: '花色',
//   host: '张三'
// }

// console.log(xiaomi)

interface Girl {
  name: string;
  age: number;
  bust: number;
  // ?可以选参数
  waistline?: number;
  [propname: string]: any;
  say(): string
}

// 继承
interface Teacher extends Girl {
  teach(): void
}


let girl: Girl = {
  name: 'xiaomi',
  age: 18,
  bust: 90,
  waistline: 21,
  sex: '女',
  say() {
    console.log(this.name)
    return ''
  }
}

// 实现这个接口
class Xiaojiejie implements Girl {
  name = 'xiaoliu'
  age = 8
  bust = 100
  say() {
    console.log('123')
    return ''
  }
}

girl.say()
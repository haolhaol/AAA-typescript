class Person2 {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class Teacher extends Person2 {
  age: number
  constructor(age: number) {
    super('zhangsan')
    this.age = age
  }
}

let person2 = new Person2('zhangsan')
console.log(person2.name)

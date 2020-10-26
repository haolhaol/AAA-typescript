// public private protected
// 不同于Java类没有修饰符，里面的属性和方法有
class Person1 {
  protected name: string
  private age: number = 13
  constructor(name: string) {
    this.name = name
  }
  public setters(age: number): void {
    this.age = age
  }
  public getters(): number {
    return this.age
  }
  protected sayHello(): void {
    console.log('Hello')
  }
}

class Star extends Person1 {
  constructor(name: string) {
    super(name)
  }
  public sayByb() {
    console.log(this.name)
  }
}

let person1 = new Person1('张三')
console.log(person1.getters())

let star = new Star('lisi')
console.log(star)
star.sayByb()

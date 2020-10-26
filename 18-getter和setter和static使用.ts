class Person4 {
  constructor() { }
  private _age: number

  public set age(age: number) {
    this._age = age;
  }


  public get age(): number {
    return this._age - 10
  }

}

// 这里如果没有定义getter 和 setter 的话，就无法访问age，定义之后访问的时候会映射到 getter 和 setter 中获取设置属性值
let person4 = new Person4()
person4.age = 18
console.log(person4.age)

class Girl {
  static SayLove() {
    console.log('I Love You')
  }
}

// let girl1 = new Girl()
// girl1.sayLove()
Girl.SayLove()
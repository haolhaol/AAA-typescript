class Lady {
  content = 'hi, 帅哥'
  constructor() {

  }
  sayHello(): any {
    return this.content
  }
}

class Xiaojie extends Lady {
  constructor() {
    super()
  }
  sayHello() {
    console.log(super.sayHello() + '. 你好')
  }
  sayLove() {
    console.log('i love')
  }
}

let xiaomei = new Xiaojie()
xiaomei.sayHello()
xiaomei.sayLove()
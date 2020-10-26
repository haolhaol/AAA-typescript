interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

// let animal: Cat | Fish
function isFish(animal: Cat | Fish): boolean {
  // as 类型断言，断定这个变量为as后面这个类型，本质上animal类型还是原来的，只是用来欺骗编译器的
  // animal 可以断言成Fish 和 Cat 或 any 不能是其他类型
  // 任何类型都可以断言成any类型
  if ((animal as Fish).swim) {
    return true
  } else {
    return false
  }
}

let fish1: Fish = {
  name: 'mimi',
  swim() {
    console.log('游泳')
  }
}

let cat1: Cat = {
  name: 'xiaoya',
  run() {
    console.log('跑')
  }
}

console.log(isFish(cat1))

// let arr4: any[]
// arr4 = ['10', '10', '10', '10'].map(parseInt)
// console.log(arr4)
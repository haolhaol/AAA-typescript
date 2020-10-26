interface Waiter {
  anjiao: boolean
  say(): void
}

interface Teacher {
  anjiao: boolean
  skill(): void
}

// function judgeWho(animal: Waiter | Teacher) {
//   if (animal.anjiao) {
//     (animal as Teacher).skill()
//   } else {
//     (animal as Waiter).say()
//   }
// }
function judgeWho(animal: Waiter | Teacher) {
  if ('skill' in animal) {
    animal.skill()
  } else {
    animal.say()
  }
}

let xiaoz: Waiter = {
  anjiao: false,
  say() {
    console.log('说话')
  }
}

judgeWho(xiaoz)
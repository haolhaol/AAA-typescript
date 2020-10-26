// 普通数组类型对数组内部数据的顺序没有要求
// 假如这里要有一个数组依次存 姓名 职业 年龄， 假如使用数组的话没有办法做到
// let males: (string | number)[] = ['xiaomi', 'teacher', 20]

// 这里使用元组就可以约定
let males: [string, string, number] = ['xiaomi', 'teacher', 20]
console.log(males)

let xiaojiejies: [string, string, number][] = [
  ['dajiao', 'teacher', 18],
  ['liuying', 'teacher', 20],
  ['cuihua', 'teacher', 22]
]
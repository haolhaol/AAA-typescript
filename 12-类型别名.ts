type myString = string
let str: myString = '123'
console.log(str)

// 定义联合类型别名
type myStringNumber = string | number
let str2: myStringNumber = 123
str2 = '123'

// 约束字符串的取值
// 当约束之后，这个类型的变量只能取这几个值
type eventname = 'click' | 'scroll' | 'mouseover'

let event1: eventname = 'click'
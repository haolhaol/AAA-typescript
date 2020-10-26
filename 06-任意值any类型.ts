// let someting
// someting = '123'
// someting = 123

// 上面的代码等价于, 直接声明变量并且没有赋值，那么这个变量就是any类型的，
// 如果声明时赋值的话会进行类型推断，赋值是什么类型的，这个变量就是什么类型的

let someting: any
someting = '123'
someting = 123
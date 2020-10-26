let myFavoriteNumber: number | string
myFavoriteNumber = '123/'
myFavoriteNumber = 123
// 因为这里使用的是联合类型，所以只要给这个变量赋值是声明时定义的两种类型就可以4

// 访问联合类型的方法或属性
// 当定义时定义的时联合类型的话，访问对应的方法时只能使用两种属性共有的方法
// 例如声明number 和 string类型的联合变量，只能使用number和string共有的方法
function getLength(someting: number | string): number {
  // 这里number和string两种类型中共有的属性没有length所以会报错
  // return someting.length

  // toString是共有的方法所以可以访问
  someting.toString()
  return 0
}

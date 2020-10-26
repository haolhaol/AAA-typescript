enum weeks {
  one = 1,
  two,
  three,
  four,
  five,
  six,
  seven
}

console.log(weeks['one'])
console.log(weeks[1])

let week: weeks = weeks.one
let week1: weeks[] = [weeks.one, weeks.two]
console.log(week, week1)
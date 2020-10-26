abstract class Girl {
  abstract skill(): void
}

class waiter extends Girl {
  skill() {
    console.log('大爷请喝水')
  }
}

class baseTeacher extends Girl {
  skill() {
    console.log('大爷，来按个摩吧')
  }
}

class seniorTeacher extends Girl {
  skill() {
    console.log('大爷，老哥SPA全身按摩')
  }
}
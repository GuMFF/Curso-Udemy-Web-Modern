function soma (a, b) {
  return a + b
}

const somaCom10 = soma.bind(null, 10)
console.log(somaCom10(5))

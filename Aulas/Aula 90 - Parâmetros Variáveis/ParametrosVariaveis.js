function soma (...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0)
}

console.log(soma(1, 2, 3, 4))

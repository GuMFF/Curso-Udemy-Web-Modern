function imparesEntre (inicio = 0, fim = 100) {
  let a = inicio
  let b = fim
  if (a > b) {
    const t = a
    a = b
    b = t
  }
  for (let n = a; n <= b; n++) {
    if (n % 2 !== 0) console.log(n)
  }
}

imparesEntre()
imparesEntre(20, 10)

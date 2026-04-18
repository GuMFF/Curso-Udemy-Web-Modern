function contarNegativos (vetor) {
  let q = 0
  for (const n of vetor) {
    if (n < 0) q++
  }
  console.log('Quantidade de negativos:', q)
}

contarNegativos([1, -3, 0, -1, 5])

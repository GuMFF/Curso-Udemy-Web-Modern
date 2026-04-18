function contarParesImpares (vetor) {
  let pares = 0
  let impares = 0
  for (const n of vetor) {
    if (n % 2 === 0) pares++
    else impares++
  }
  console.log('Pares:', pares, 'Ímpares:', impares)
}

contarParesImpares([1, 2, 3, 4, 5, 6])

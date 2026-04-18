function multiplicarVetor (vetor, inteiro) {
  return vetor.map(x => x * inteiro)
}

function multiplicarVetorSeMaior5 (vetor, inteiro) {
  return vetor.map(x => (x > 5 ? x * inteiro : x))
}

console.log(multiplicarVetor([2, 3, 4], 2))
console.log(multiplicarVetorSeMaior5([2, 6, 8], 2))

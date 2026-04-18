function maiorMenor (vetor) {
  if (vetor.length === 0) return
  let maior = vetor[0]
  let menor = vetor[0]
  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) maior = vetor[i]
    if (vetor[i] < menor) menor = vetor[i]
  }
  console.log('Maior:', maior, 'Menor:', menor)
}

maiorMenor([3, 1, 9, -2, 7])

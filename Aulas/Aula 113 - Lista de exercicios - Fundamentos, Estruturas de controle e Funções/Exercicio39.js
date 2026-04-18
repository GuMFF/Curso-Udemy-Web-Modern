function trocarVetores (vetorA, vetorB) {
  if (vetorA.length !== vetorB.length) return
  for (let i = 0; i < vetorA.length; i++) {
    vetorA[i] += vetorB[i]
    vetorB[i] = vetorA[i] - vetorB[i]
    vetorA[i] -= vetorB[i]
  }
}

const a = [1, 2, 3]
const b = [10, 20, 30]
trocarVetores(a, b)
console.log(a)
console.log(b)

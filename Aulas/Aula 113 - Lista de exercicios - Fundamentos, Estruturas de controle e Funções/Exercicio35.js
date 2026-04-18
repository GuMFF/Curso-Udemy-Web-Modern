const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

for (const v of vetorAdiciona) {
  const tamanho = vetorPilha.push(v)
  console.log('push retornou tamanho:', tamanho)
}

console.log('vetorPilha:', vetorPilha)
console.log('vetorAdiciona:', vetorAdiciona)

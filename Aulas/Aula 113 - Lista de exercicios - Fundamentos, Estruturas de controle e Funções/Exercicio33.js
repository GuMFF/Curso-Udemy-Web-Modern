const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['a', 'b', 'c', 'd']
const vetorDouble = [1.1, 2.2, 3.3, 4.4]

const r1 = vetorInteiro.concat(vetorString).concat(vetorDouble)
const r2 = [].concat(vetorInteiro, vetorString, vetorDouble)

console.log(r1.join(' '))
console.log(r2.join(' '))

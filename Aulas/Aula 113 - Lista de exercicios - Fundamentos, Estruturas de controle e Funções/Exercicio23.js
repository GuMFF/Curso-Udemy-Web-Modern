function mediaPonderadaTresNotas (n1, n2, n3) {
  const notas = [n1, n2, n3]
  let iMaior = 0
  for (let i = 1; i < 3; i++) {
    if (notas[i] > notas[iMaior]) iMaior = i
  }
  let soma = 0
  for (let i = 0; i < 3; i++) {
    soma += notas[i] * (i === iMaior ? 4 : 3)
  }
  return soma / 10
}

function processarAluno (codigo, n1, n2, n3) {
  const media = mediaPonderadaTresNotas(n1, n2, n3)
  const situacao = media >= 5 ? 'APROVADO' : 'REPROVADO'
  console.log('Código:', codigo)
  console.log('Notas:', n1, n2, n3)
  console.log('Média:', media)
  console.log(situacao)
}

const entradas = [
  [101, 7, 6, 8],
  [102, 4, 4, 5],
  [-1, 0, 0, 0]
]

let i = 0
while (true) {
  const [codigo, a, b, c] = entradas[i++]
  if (codigo < 0) break
  processarAluno(codigo, a, b, c)
}

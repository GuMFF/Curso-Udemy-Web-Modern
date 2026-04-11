// while: testa a condição antes (pode não executar o bloco)
let n = 10
while (n < 5) {
  console.log('while: não entra')
  n++
}

// do/while: executa o bloco pelo menos uma vez
let m = 10
do {
  console.log('do/while: executa uma vez, m =', m)
  m++
} while (m < 5)

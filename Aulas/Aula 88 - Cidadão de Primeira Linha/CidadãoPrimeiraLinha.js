// Função como cidadão de primeira classe: 
// valor que pode ser atribuído, passado e retornado
const soma = function (a, b) {
  return a + b
}

function executar (fn, x, y) {
  return fn(x, y)
}

console.log(executar(soma, 2, 3))

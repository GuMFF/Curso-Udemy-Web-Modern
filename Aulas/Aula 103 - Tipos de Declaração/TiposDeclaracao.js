// Tipos de declaração de função

// 1) Function Declaration (hoisting completo)
function soma (a, b) {
  return a + b
}

// 2) Function Expression
const sub = function (a, b) {
  return a - b
}

// 3) Named Function Expression (nome útil em stack traces)
const mult = function mult (a, b) {
  return a * b
}

console.log(soma(2, 3))
console.log(sub(7, 2))
console.log(mult(3, 4))

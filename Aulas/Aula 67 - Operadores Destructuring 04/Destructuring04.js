// rest (resto) no array
const [n1, n2, ...n3] = [1, 2, 3, 4, 5, 6]
console.log(n1, n2, n3)

// troca de valores com destructuring
let a = 3, b = 7
;[a, b] = [b, a]
console.log(a, b)

// rest em objeto
const { x, ...outros } = { x: 10, y: 20, z: 30 }
console.log(x, outros)

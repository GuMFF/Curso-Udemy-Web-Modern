function classificarTriangulo (lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) return 'Equilátero'
  if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) return 'Isósceles'
  return 'Escaleno'
}

console.log(classificarTriangulo(3, 3, 3))
console.log(classificarTriangulo(3, 3, 4))
console.log(classificarTriangulo(3, 4, 5))

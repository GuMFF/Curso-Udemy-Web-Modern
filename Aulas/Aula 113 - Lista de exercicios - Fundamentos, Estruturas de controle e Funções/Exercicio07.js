function bhaskara (a, b, c) {
  const delta = b * b - 4 * a * c
  if (delta < 0) return 'Delta é negativo'
  const raizDelta = Math.sqrt(delta)
  const x1 = (-b + raizDelta) / (2 * a)
  const x2 = (-b - raizDelta) / (2 * a)
  return [x1, x2]
}

console.log(bhaskara(1, -5, 6))
console.log(bhaskara(1, -4, 4))
console.log(bhaskara(3, 1, 1))

function caracteresContidosEmAmbas (s1, s2) {
  const a = new Set(s1.toLowerCase())
  const b = new Set(s2.toLowerCase())
  for (const ch of a) {
    if (!b.has(ch)) return false
  }
  for (const ch of b) {
    if (!a.has(ch)) return false
  }
  return true
}

console.log(caracteresContidosEmAmbas('Abcd', 'dcbA'))
console.log(caracteresContidosEmAmbas('abc', 'ab'))

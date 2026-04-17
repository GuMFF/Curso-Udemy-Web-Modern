function fatorial (n) {
  if (n < 0) return NaN
  let r = 1
  for (let i = 2; i <= n; i++) r *= i
  return r
}

console.log(fatorial(5))
console.log(fatorial(0))

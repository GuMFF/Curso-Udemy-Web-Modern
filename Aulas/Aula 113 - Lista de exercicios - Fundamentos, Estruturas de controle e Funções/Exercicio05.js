function formatarReal (valor) {
  const arredondado = Math.round(valor * 100) / 100
  const partes = arredondado.toFixed(2).split('.')
  const inteiro = partes[0]
  const centavos = partes[1]
  return `R$${inteiro},${centavos}`
}

console.log(formatarReal(0.1 + 0.2))
console.log(formatarReal(0.30000000000000004))

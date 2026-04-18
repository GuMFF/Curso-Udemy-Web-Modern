function mensalidadeAssociacao (mes, valorAnuidade) {
  if (mes < 1 || mes > 12) return null
  const mesesAtraso = mes - 1
  return valorAnuidade * 1.05 ** mesesAtraso
}

console.log(mensalidadeAssociacao(1, 1000))
console.log(mensalidadeAssociacao(3, 1000))

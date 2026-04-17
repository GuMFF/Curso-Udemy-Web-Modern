function notaFinal (nota) {
  if (nota < 38) return nota

  const proximoMultiplo5 = Math.ceil(nota / 5) * 5
  if (proximoMultiplo5 - nota < 3) return proximoMultiplo5
  return nota
}

console.log(notaFinal(84))
console.log(notaFinal(29))
console.log(notaFinal(38))

function cedulas (valor) {
  const notas = [100, 50, 10, 5, 1]
  let resto = valor
  const partes = []
  for (const n of notas) {
    const q = Math.floor(resto / n)
    if (q > 0) {
      partes.push(`${q} nota(s) de R$ ${n}`)
      resto -= q * n
    }
  }
  console.log(partes.join('. ') + (partes.length ? '.' : ''))
}

cedulas(18)

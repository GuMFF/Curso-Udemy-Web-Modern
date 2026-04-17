function analisarPlacares (placaresStr) {
  const placares = placaresStr.trim().split(/\s+/).map(Number)
  if (placares.length === 0) return [0, 0]

  let melhor = placares[0]
  let pioresPontos = placares[0]
  let indicePior = 1
  let quebrouRecorde = 0

  for (let i = 1; i < placares.length; i++) {
    const p = placares[i]
    if (p > melhor) {
      melhor = p
      quebrouRecorde++
    }
    if (p < pioresPontos) {
      pioresPontos = p
      indicePior = i + 1
    }
  }

  return [quebrouRecorde, indicePior]
}

console.log(analisarPlacares('10 20 20 8 25 3 0 30 1'))

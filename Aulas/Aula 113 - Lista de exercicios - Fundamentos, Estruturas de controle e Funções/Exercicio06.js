function jurosSimples (capital, taxa, tempo) {
  return capital + capital * taxa * tempo
}

function jurosCompostos (capital, taxa, tempo) {
  return capital * (1 + taxa) ** tempo
}

console.log('Simples:', jurosSimples(1000, 0.01, 12))
console.log('Composto:', jurosCompostos(1000, 0.01, 12))

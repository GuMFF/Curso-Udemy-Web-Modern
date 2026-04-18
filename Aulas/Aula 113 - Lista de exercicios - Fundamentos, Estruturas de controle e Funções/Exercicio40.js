function conceitoNota (nota) {
  if (nota >= 9 && nota <= 10) return 'A'
  if (nota >= 7 && nota < 9) return 'B'
  if (nota >= 5 && nota < 7) return 'C'
  if (nota >= 0 && nota < 5) return 'D'
  return '?'
}

function mostrarConceitos (vetorNotas) {
  for (const n of vetorNotas) {
    console.log(n, conceitoNota(n))
  }
}

mostrarConceitos([4.5, 6, 8, 9.5, 10])

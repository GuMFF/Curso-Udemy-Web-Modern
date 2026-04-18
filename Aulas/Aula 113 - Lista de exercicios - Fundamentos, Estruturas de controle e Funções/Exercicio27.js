function crescimentoCriancas (altura1, taxa1, altura2, taxa2) {
  if (altura1 === altura2) {
    console.log('Mesma altura inicial')
    return
  }
  let hMenor
  let rMenor
  let hMaior
  let rMaior
  if (altura1 < altura2) {
    hMenor = altura1
    rMenor = taxa1
    hMaior = altura2
    rMaior = taxa2
  } else {
    hMenor = altura2
    rMenor = taxa2
    hMaior = altura1
    rMaior = taxa1
  }
  if (rMenor <= rMaior) {
    console.log('A criança menor não ultrapassará a maior com essas taxas')
    return
  }
  let anos = 0
  while (hMenor <= hMaior) {
    hMenor += rMenor
    hMaior += rMaior
    anos++
    if (anos > 10000) {
      console.log('Não convergiu')
      return
    }
  }
  console.log('Ultrapassa em', anos, 'ano(s)')
}

crescimentoCriancas(150, 6, 160, 4)

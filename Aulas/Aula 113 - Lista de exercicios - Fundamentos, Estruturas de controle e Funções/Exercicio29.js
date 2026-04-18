function contarIntervalo1020 (arr) {
  let dentro = 0
  let fora = 0
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    if (n >= 10 && n <= 20) dentro++
    else fora++
  }
  console.log('Dentro [10,20]:', dentro, 'Fora:', fora)
}

contarIntervalo1020([5, 10, 15, 20, 25])

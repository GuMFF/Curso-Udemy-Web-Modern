function fora () {
  const segredo = 'closure'

  return function dentro () {
    return segredo
  }
}

const minhaFuncao = fora()
console.log(minhaFuncao())

function imprimirNomeGritado (obj) {
  try {
    console.log(obj.nome.toUpperCase())
  } catch (e) {
    console.log('Erro tratado:', e.message)
  } finally {
    console.log('finally sempre roda')
  }
}

imprimirNomeGritado({ nome: 'ana' })
imprimirNomeGritado({})

function validarIdade (idade) {
  if (idade < 0) {
    throw new Error('Idade inválida')
  }
  return idade
}

try {
  validarIdade(-1)
} catch (e) {
  console.log('Capturado:', e.message)
}

function vendaFruta (fruta) {
  switch (fruta) {
    case 'maçã':
      return 'Não vendemos esta fruta aqui'
    case 'kiwi':
      return 'Estamos com escassez de kiwis'
    case 'melancia':
      return 'Aqui está, são 3 reais o quilo'
    default:
      return 'Erro: fruta não reconhecida'
  }
}

console.log(vendaFruta('maçã'))
console.log(vendaFruta('kiwi'))
console.log(vendaFruta('melancia'))

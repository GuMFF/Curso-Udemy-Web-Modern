function valorLanche (codigo, quantidade) {
  let precoUnitario
  switch (codigo) {
    case 100:
      precoUnitario = 3
      break
    case 200:
      precoUnitario = 4
      break
    case 300:
      precoUnitario = 5.5
      break
    case 400:
      precoUnitario = 7.5
      break
    case 500:
      precoUnitario = 3.5
      break
    case 600:
      precoUnitario = 2.8
      break
    default:
      return null
  }
  return precoUnitario * quantidade
}

const total = valorLanche(100, 2)
console.log(total != null ? `Total: R$ ${total.toFixed(2)}` : 'Produto inexistente')

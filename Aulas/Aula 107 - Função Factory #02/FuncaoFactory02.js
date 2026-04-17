function criarProduto (nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
    precoFinal () {
      return this.preco * (1 - this.desconto)
    }
  }
}

console.log(criarProduto('iPad', 3999).precoFinal())
console.log(criarProduto('Mouse', 59.9).precoFinal())

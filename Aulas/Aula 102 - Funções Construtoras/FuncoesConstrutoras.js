function Produto (nome, preco, desconto = 0) {
  this.nome = nome
  this.preco = preco
  this.desconto = desconto

  this.precoFinal = function () {
    return this.preco * (1 - this.desconto)
  }
}

const p1 = new Produto('Notebook', 3000, 0.1)
const p2 = new Produto('Caneta', 2.5)

console.log(p1.nome, p1.precoFinal())
console.log(p2.nome, p2.precoFinal())

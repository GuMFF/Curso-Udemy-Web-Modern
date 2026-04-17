function getPreco (imposto = 0, moeda = 'R$') {
  return `${moeda} ${(this.preco * (1 - this.desc)) * (1 + imposto)}`
}

const produto = { preco: 4589, desc: 0.15 }

console.log(getPreco.call(produto))
console.log(getPreco.apply(produto))
console.log(getPreco.call(produto, 0.1, '$'))
console.log(getPreco.apply(produto, [0.1, '$']))

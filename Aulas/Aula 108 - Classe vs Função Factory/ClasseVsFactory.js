class Pessoa1 {
  constructor (nome) {
    this.nome = nome
  }

  falar () {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa1('João')
p1.falar()

const criarPessoa2 = nome => ({
  nome,
  falar: () => console.log(`Meu nome é ${nome}`)
})

const p2 = criarPessoa2('Maria')
p2.falar()

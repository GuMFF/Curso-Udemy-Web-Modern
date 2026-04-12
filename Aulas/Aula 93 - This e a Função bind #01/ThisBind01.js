const pessoa = {
  nome: 'Ana',
  falar () {
    console.log(this.nome)
  }
}

const falar = pessoa.falar.bind(pessoa)
falar()

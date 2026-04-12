const pessoa = {
  nome: 'Ana',
  falar () {
    console.log(this.nome)
  }
}

pessoa.falar()

const falar = pessoa.falar
falar()

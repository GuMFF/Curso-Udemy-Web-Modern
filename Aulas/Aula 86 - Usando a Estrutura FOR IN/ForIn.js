const notas = [6.5, 7.8, 9.2]
for (let i in notas) {
  console.log(i, notas[i])
}

const pessoa = { nome: 'Ana', idade: 20 }
for (let atributo in pessoa) {
  console.log(atributo, '=', pessoa[atributo])
}

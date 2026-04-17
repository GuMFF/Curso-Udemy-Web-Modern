// Callback: função passada como argumento
// Exemplo com filter + map (bem comum no dia a dia)

const alunos = [
  { nome: 'Ana', nota: 8.7 },
  { nome: 'Bia', nota: 7.2 },
  { nome: 'Carlos', nota: 6.1 }
]

const aprovados = alunos
  .filter(a => a.nota >= 7)
  .map(a => a.nome)

console.log(aprovados)

function novoSalario (plano, salarioAtual) {
  switch (plano) {
    case 'A':
    case 'a':
      return salarioAtual * 1.1
    case 'B':
    case 'b':
      return salarioAtual * 1.15
    case 'C':
    case 'c':
      return salarioAtual * 1.2
    default:
      console.log('Plano inválido')
      return null
  }
}

const s = novoSalario('B', 1000)
console.log('Novo salário:', s)

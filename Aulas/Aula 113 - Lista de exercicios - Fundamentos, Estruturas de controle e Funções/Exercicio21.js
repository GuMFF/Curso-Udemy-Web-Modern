function valorPlanoSaude (idade) {
  let adicional
  if (idade < 10) adicional = 80
  else if (idade <= 30) adicional = 50
  else if (idade <= 60) adicional = 95
  else adicional = 130

  return 100 + adicional
}

console.log('Idade 8:', valorPlanoSaude(8))
console.log('Idade 25:', valorPlanoSaude(25))
console.log('Idade 45:', valorPlanoSaude(45))
console.log('Idade 70:', valorPlanoSaude(70))

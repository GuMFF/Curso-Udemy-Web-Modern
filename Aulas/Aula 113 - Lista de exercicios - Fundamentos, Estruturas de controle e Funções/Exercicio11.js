function anoBissexto (ano) {
  const bissexto = (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)
  console.log(bissexto ? `${ano} é bissexto` : `${ano} não é bissexto`)
  return bissexto
}

anoBissexto(2000)
anoBissexto(1900)
anoBissexto(2024)

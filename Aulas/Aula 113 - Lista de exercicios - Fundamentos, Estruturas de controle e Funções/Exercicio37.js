function progressaoAritmetica (n, a1, r) {
  const termos = []
  let soma = 0
  for (let i = 0; i < n; i++) {
    const termo = a1 + i * r
    termos.push(termo)
    soma += termo
  }
  console.log('PA termos:', termos.join(', '))
  console.log('PA soma:', soma)
}

function progressaoGeometrica (n, a1, r) {
  const termos = []
  let soma = 0
  for (let i = 0; i < n; i++) {
    const termo = a1 * r ** i
    termos.push(termo)
    soma += termo
  }
  console.log('PG termos:', termos.join(', '))
  console.log('PG soma:', soma)
}

progressaoAritmetica(5, 2, 3)
progressaoGeometrica(4, 2, 3)

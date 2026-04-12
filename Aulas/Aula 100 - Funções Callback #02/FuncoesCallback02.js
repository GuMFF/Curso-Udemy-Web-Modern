function processar (valores, fn) {
  return valores.map(fn)
}

console.log(processar([1, 2, 3], n => n * 2))

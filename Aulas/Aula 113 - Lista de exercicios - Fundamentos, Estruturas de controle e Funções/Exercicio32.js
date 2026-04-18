function mediaAritmetica (vetor) {
  if (vetor.length === 0) return 0
  let s = 0
  for (const n of vetor) s += n
  return s / vetor.length
}

console.log(mediaAritmetica([2, 4, 6, 8]))

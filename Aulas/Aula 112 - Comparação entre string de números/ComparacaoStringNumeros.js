console.log('2' > '12') // true (comparação lexicográfica)
console.log('2' > 12) // false (string vira número)

console.log(Number('2') > Number('12')) // false (numérico)

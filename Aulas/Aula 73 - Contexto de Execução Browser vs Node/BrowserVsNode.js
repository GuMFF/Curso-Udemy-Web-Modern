// globalThis existe no browser e no Node
console.log(typeof globalThis)

const pareceNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null
const pareceBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'

console.log('Ambiente parece Node:', pareceNode)
console.log('Ambiente parece Browser:', pareceBrowser)

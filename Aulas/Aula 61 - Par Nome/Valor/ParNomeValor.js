// par nome/valor
const saudacao = 'Olá' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endreço: {
        logradouro: 'Rua Daora Demais',
        numero: 123
    }
}
console.log(saudacao)
console.log(cliente)
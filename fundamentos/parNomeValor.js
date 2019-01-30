const saudacao = 'olá'

function fala() {
  const saudacao = 'fala' // contexto léxico 2
  return saudacao
}

// Objeto são grupos aninhados de pares nome/valor

const cliente = {
  nome: 'Jackson',
  idade: 22,
  peso: 64,
  endereco: {
    logradouro: 'Rua do Aviador',
    numero: 45
  }
}

console.log(saudacao)
console.log(fala())
console.log(cliente)
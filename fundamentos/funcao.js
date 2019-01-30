//Funçoes sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5)
imprimirSoma()

// Funções com retorno
function soma(a, b) {
  return a + b
}

console.log(soma(3, 4))
console.log(soma(3))

//Função com variavel
const subtracao = function(a, b) {
  return  a - b
}

console.log(subtracao(56, 21))

// Armazenando uma função arrow em uma varialvel
const multiplicacao = (a, b) => {
  return a * b
}
console.log(multiplicacao(56, 21))
// retorno implicito
const divisao = (a, b) => a / b
console.log(divisao(60, 3))
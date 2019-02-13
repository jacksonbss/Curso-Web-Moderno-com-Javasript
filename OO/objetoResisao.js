const carro = {
  modelo: 'A4',
  valor: 89000,
  proprieario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero:123
    }
  },
  condutores: [{
    nome: 'Jackson',
    idade: 19
  }, {
    nome: 'João',
    idade: 42
  }],
  calcularValorSeguro: () => {
    //...
  }
}
carro.proprieario.endereco.numero = 1000

console.log(carro)

delete carro.condutores
delete carro.proprieario.endereco

console.log(carro)
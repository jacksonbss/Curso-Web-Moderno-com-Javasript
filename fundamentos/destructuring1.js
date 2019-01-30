const pessoa = {
  nome: 'Jackson',
  idade: 22,
  endereco: {
    logradouro: 'Rua do Aviador',
    numero: 45,
    cep: '64400-000'
  }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: nomePessoa, idade: idadePessoa } = pessoa
console.log(nomePessoa, idadePessoa)

const { sobrenome, bemHumorado  = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: {
  logradouro, numero, cep
}} = pessoa
console.log(logradouro, numero, cep)


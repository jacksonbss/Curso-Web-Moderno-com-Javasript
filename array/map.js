const nuns = [1, 2, 3, 4, 5]

//For com propósito
let resultado = nuns.map((e) => {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` 

resultado = nuns.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

// video 2
const carrinho = [
    '{ "nome": "Boracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 29.99 }',
    '{ "nome": "Kit de Lapis de Cor", "preco": 10.00 }',
    '{ "nome": "Caneta", "preco": 1.00 }',
    '{ "nome": "Estojo", "preco": 4.90 }',
]

// Retornar um array apenas com os preços

const getObj = json => JSON.parse(json)
const setPreco = produto => produto.preco 

const result = carrinho.map(getObj).map(setPreco)
console.log(result)
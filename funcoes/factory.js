function criarPessoa() {
  return {
    nome: 'Ana',
    sobreNome: 'Silva'
  }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {
  return {
    nome,
    preco, 
    desconto: 0.3
  }
}

console.log(criarProduto('MiBand', 2129.22))
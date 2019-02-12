const soma = (x, y) => {
  return x + y
}

const imprimirResultado = (a, b, operacao = soma) => {
  console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, (x, y) => x - y)
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
  falar: () => {
    console.log('Olá')
  }
}

pessoa.falar()

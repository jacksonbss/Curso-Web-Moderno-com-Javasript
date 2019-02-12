  const produtos = ['Arroz', 'Feijão', 'Macarrão', 'Trigo']

  function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
  }

  produtos.forEach(imprimir)
  produtos.forEach(produtos => console.log(produtos))

  const notas = ['7.0', '4.0', '3.5', '9.0', '6.5', '10.0']

  // Sem Callback
  const notasBaixas1 = []
  for (let i in notas) {
    if (notas[i] < 7) {
      notasBaixas1.push(notas[i])
    }
  }

  console.log(notasBaixas1)

  //Com Callback
  const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
  })

  console.log(notasBaixas2)

  const notasBaixas3 = notas.filter( notas => notas < 7)
  console.log(notasBaixas3)

  //Exemplo de callback no browser
  document.getElementsByTagName('body')[0].onclick = (e) => {
    console.log('O Evento ocorreu!')
  }
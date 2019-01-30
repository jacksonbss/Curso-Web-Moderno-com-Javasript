const imprimirNota = (nota) => {
  if(nota >= 7) {
    console.log('Aprovado!!')
  } else {
    console.log('Reprovado!!')
  }
}

imprimirNota(10)
imprimirNota(3)
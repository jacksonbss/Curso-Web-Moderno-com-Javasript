function soma (a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0))

function somaB (a, b, c) {
  a = a !== undefined ? a: 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c
  return a + b + c
}

console.log(somaB(), somaB(3), somaB(1, 2, 3), somaB(0, 0, 0))

function somaC (a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(somaC(), somaC(3), somaC(1, 2, 3), somaC(0, 0, 0))
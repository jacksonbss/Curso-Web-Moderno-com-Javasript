const pilotos = ['Vettel', 'Alonso', 'Raikkone', 'Massa']
pilotos.pop()// ultimo indice do array
console.log(pilotos)

pilotos.push('Botas')
console.log(pilotos)

pilotos.shift()// remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

const frutas = ['laranja', 'maçã', 'melão', 'melancia']
console.log(frutas)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Jackson', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const pilotosA = pilotos.slice(2)
console.log(pilotosA)

const pilotosB = pilotos.slice(1, 4)
console.log(pilotosB)
const alunos = [
    { nome: 'Jackson', nota: 7.3, matricula: 'AAA100', bolsista: false},
    { nome: 'Bruno', nota: 10.0, matricula: 'AAA110', bolsista: true},
    { nome: 'Marta', nota: 9.5, matricula: 'AAA120', bolsista: false},
    { nome: 'Calebe', nota: 8.9, matricula: 'AAA130', bolsista: true},
    { nome: 'Jady', nota: 6.0, matricula: 'AAA140', bolsista: false},
    { nome: 'Murilo', nota: 5.3, matricula: 'AAA150', bolsista: true},
]

const result = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista). reduce(todosBolsistas))
// Desafio 2: Algum alunos é bolsistas?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) 

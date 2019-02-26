const ferrari = {
    modelo: 'F40',
    valMax: 324
}

const volvo = {
    modelo: 'V40',
    valMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
// Cadeia de protótipos
const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo,
    attr2: 'B'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr1)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const poch = { 
    modelo: 'P50',
    velMax: 340
}
const ford = {
    modelo: 'F56',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(poch, carro)
Object.setPrototypeOf(ford, carro)

console.log(poch)
console.log(ford)

ford.acelerarMais(100)
console.log(ford.status())

const pessoa = {
    nome: 'Jackson',
    corCabelo: 'Preto'
}

const pessoa1 = Object.create(pessoa)
console.log(pessoa1.corCabelo)

const pessoa2 = Object.create(pessoa, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(pessoa2.nome)
pessoa2.nome = 'Carla'
console.log(`${pessoa2.nome} tem cabelo ${pessoa2.corCabelo}`)

console.log(Object.keys(pessoa1))
console.log(Object.keys(pessoa2))
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome
  this.exec = () => {
    console.log('Exec...')
  }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
obj3.exec()
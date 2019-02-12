let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a 
console.log(dobro(Math.PI))

function Pessoa() {
  this.idade = 0

  setInterval( () => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new Pessoa
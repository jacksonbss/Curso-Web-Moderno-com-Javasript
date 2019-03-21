const aprovados = ['Marta', 'Jackson', 'Bruno', 'Ana']

aprovados.forEach((nome, indice) => {
    console.log(`${indice + 1} - ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

Array.prototype.forEach2 = (callback) => {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const pessoas = ['Marta', 'Jackson', 'Bruno', 'Ana']

pessoas.forEach2((nome, indice) => {
    console.log(`${indice + 1} - ${nome}`)
})

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Xiaomi', preco: 1500, fragil: false },
    { nome: 'Fone de Ouvido', preco: 15.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(function(p) {
//     if (p.preco > 1000 && p.fragil === true) {
//         //const caro = p.preco > 1000 
//         return p.preco
//     }
    
    
// }))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))
for ( var i = 0; i < 10; i++) {
   console.log(i)
}
console.log('i =', i)

var funcs = []
for (var j = 0; j < 10; j++) {
  funcs.push(() => {
    console.log(j)
  })
}

funcs[2]()
funcs[8]()
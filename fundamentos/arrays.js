const val = [7.7, 8.9, 6.3, 9.2]
console.log(val[0], val[3])
console.log(val[4])

val [4] = 10.0
console.log(val)
console.log(val.length)

val.push({id: 3}, false, null, 'teste')
console.log(val)

console.log(val.pop())
delete val[0]
console.log(val)

console.log(typeof val)
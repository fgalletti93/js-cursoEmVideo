let num = [5, 8, 2, 9, 3]
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`ordenado de menor a maior são ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}


// for(let pos=0; pos<num.length; pos++){
//    console.log(num[pos])
//}
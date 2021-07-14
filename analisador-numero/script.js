let num = document.getElementById('num')
let list = document.getElementById('list')
let res = document.getElementById('res')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function onList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {  
    if (isNumber(num.value) && !onList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalize() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizer!')
    } else {
        let total = valores.length //quantos elementos o vetor tem
        let highest = valores[0]
        let lowest = valores[0]
        let sum = 0
        let medium = 0
        for (let pos in valores) { //quais posições do vetor tem o maior e menor valor.
            sum += valores[pos]
            if (valores[pos] > highest) {
                highest = valores[pos]
            }
            if (valores[pos] < lowest) {
                lowest = valores[pos]
            }
        }
        medium = (sum/total)
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${highest}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${lowest} </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${sum}</p>`
        res.innerHTML += `A média dos valores digitados é ${medium}`
    }
}
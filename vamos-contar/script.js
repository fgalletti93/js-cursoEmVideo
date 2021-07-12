function contar() {
    let start = document.getElementById('txts')
    let end = document.getElementById('txte')
    let step = document.getElementById('txtstep')
    let res = document.getElementById('res')
    
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert('[ERROR] faltam dados')
    } else{
        res.innerHTML = 'Contando: '
        let s = Number(start.value)
        let e = Number(end.value)
        let stp = Number(step.value)
        if (s < e) {
            // Contagem crescente
            for (let c = s; c <= e; c += stp) {
                res.innerHTML += `${c} \u{1F449}`
            }   
        } else {
            // Contagem regressiva
            for (let c =s; c >= e; c-= stp){
                res.innerHTML += `${c} \u{1F449}`
               
            }
        }
        res.innerHTML += `\u{1F3C1}`
            
        
    }
}

    
   


function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tenta novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'assets/young-kids.png')
            } else if (idade < 30){
                img.setAttribute('src', 'assets/young-man.png')
            } else if (idade < 60){
                img.setAttribute('src', 'assets/old-man.png')
            } else{
                img.setAttribute('src', 'assets/old-man.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'assets/young-kids.png')
            } else if (idade < 30){
                img.setAttribute('src', 'assets/young-woman.png')
            } else if (idade < 60){
                img.setAttribute('src', 'assets/old-woman.png')
            } else{
                img.setAttribute('src', 'assets/old-woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
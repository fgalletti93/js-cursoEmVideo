function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12) {
        img.src = 'assets/morning.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'assets/afternoon.png'
        document.body.style.background = '#b9846f'
    } else if (hora >= 16 && hora < 19) {
        img.src = 'assets/evening.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'assets/night.png'
        document.body.style.background = '#515154'
    }



}




    
   


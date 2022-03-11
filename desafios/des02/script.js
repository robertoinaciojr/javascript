function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[EROO] Verifique os dados digitados')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade} anos.`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bb-m.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
                

        }else if (fsex [1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bb-f.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.cssText = 
        'color: red;'+
        'border: 1px solid black;'+
        'font: bold 20pt Arial';
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
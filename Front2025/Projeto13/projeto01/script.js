function somar(){ /*( Nome da função encostado no parenteses )*/

    let numero1 = parseFloat(document.getElementById('numero1').value);
    /*( Numero1=variavelDeBloco(HTML=document(todo index) | Tags=getElementById(Imput) | Valor=Value) )*/

    let numero2 = parseFloat(document.getElementById('numero2').value);
    /*( Numero2=variavelDeBloco(HTML=document(todo index) | Tags=getElementById(Imput) | Valor=Value) )*/

    //console.log(2 + numero1); /*( Printa numero no console )*/

    let resultado = numero1 + numero2; /*( Variavel recebendo a conta )*/

    document.getElementById('resultado').innerText = resultado.toFixed(4); /*( toFixed = (casas apos a virgula) )*/
}



function dividir(){ /*( Nome da função encostado no parenteses )*/

    let numero1 = parseFloat(document.getElementById('numero1').value);
    /*( Numero1=variavelDeBloco(HTML=document(todo index) | Tags=getElementById(Imput) | Valor=Value) )*/

    let numero2 = parseFloat(document.getElementById('numero2').value);
    /*( Numero2=variavelDeBloco(HTML=document(todo index) | Tags=getElementById(Imput) | Valor=Value) )*/

    //console.log(2 + numero1); /*( Printa numero no console )*/

    let resultado = numero1 / numero2; /*( Variavel recebendo a conta )*/

    document.getElementById('resultado').innerText = resultado.toFixed(4); /*( toFixed = (casas apos a virgula) )*/
}
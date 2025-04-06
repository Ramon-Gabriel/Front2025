function lerNumero1(){ /*( Função para alocar o valor do numero1 capturado pelo HTML em uma variavel local a ser reutilizada )*/
    var numero1 = parseFloat(document.getElementById('numero1').value);
    return numero1;
}
function lerNumero2(){ /*( Função para alocar o valor do numero2 capturado pelo HTML em uma variavel local a ser reutilizada )*/
    var numero2 = parseFloat(document.getElementById('numero2').value);
    return numero2;
}

//========================================================================================================================================================================================================================

function somar(){ /*( Nome da função encostado no parenteses )*/
    let resultado = lerNumero1() + lerNumero2(); /*( Variavel recebendo a conta )*/
    document.getElementById('resultado').innerText = resultado.toFixed(4); /*( toFixed = (casas apos a virgula) )*/
}

//========================================================================================================================================================================================================================

function dividir(){ /*( Nome da função encostado no parenteses )*/
    if(lerNumero2() === 0){ /*(== apenas garante q dois valores são iguais (mesmo conteudo(char '0'== int 0)) | === garante q dois valores são exatamente o mesmo (ate o tipo da variavel(int 0 === int 0)))*/
        document.getElementById('resultado').innerText = "Divisão por zero";
    }else{
        let resultado = lerNumero1() / lerNumero2(); /*( Variavel recebendo a conta )*/
        document.getElementById('resultado').innerText = resultado.toFixed(4); /*( toFixed = (casas apos a virgula) )*/
    }
}

//========================================================================================================================================================================================================================

function subtrair(){ /*( Nome da função encostado no parenteses )*/
    let resultado = lerNumero1() - lerNumero2(); /*( Variavel recebendo a conta )*/
    document.getElementById('resultado').innerText = resultado.toFixed(4); /*( toFixed = (casas apos a virgula) )*/
}

//========================================================================================================================================================================================================================

function multiplicar(){ /*( Nome da função encostado no parenteses )*/
let resultado = lerNumero1() * lerNumero2(); /*( Variavel recebendo a conta )*/
    document.getElementById('resultado').innerText = resultado.toFixed(4); /*( toFixed = (casas apos a virgula) )*/
}

//========================================================================================================================================================================================================================
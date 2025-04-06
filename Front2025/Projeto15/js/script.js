function expressao(parametro) {
    /*console.log(parametro);*/ /*( Testar se ta recebendo as variaveis )*/

    document.getElementById('tela').value += parametro;
}

function resultado(){
    try {
        let expressao = document.getElementById('tela').value;
        let resultado = eval(expressao);
        document.getElementById('tela').value = resultado;
    } catch (error) {
        document.getElementById('tela').value = "Error";
    }
}

function limpar(){
    document.getElementById('tela').value = "";
}
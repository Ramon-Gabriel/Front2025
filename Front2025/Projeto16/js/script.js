//add eventListener()
//----------------------
//----------------------
const entrada = document.getElementById('entrada'); //variavel (guarda o id do html)
const botao = document.getElementById('add'); //variavel (guarda o id do html)
const lista = document.getElementById('lista'); //variavel (guarda o id do html)
//----------------------
//----------------------
const itens = []; //vetor
//----------------------
//----------------------
botao.addEventListener('click', function (){
    //console.log(entrada.value); //testar no console

    let item = entrada.value; //variavel local
    itens.push(item); //joga os itens da variavel local no vetor(linha 9)
    entrada.value = ""; //limpa a variavel local para reuso
    //console.log(itens);  //testar no console  

    saida();
}); //adicionando evento ao botao
//----------------------
//----------------------
function saida(){
    lista.innerHTML = ""; //limpar a variavel lista

    for(let i = 0; i < itens.length; i++){ // itens.length  =  uma posicao menor que o tamanho

        let li = document.createElement("li"); //a variavel recebe o elemento de lista
        li.textContent = itens[i]; //cria elemento, aparte, visivel na tela que da o feedback que funcionou (apenas quando da certo!)
        lista.appendChild(li); //adiciona o elemento criado a variavel lista

    }


    
/*
    let li = document.createElement("li"); //a variavel recebe o elemento de lista
    li.textContent = "Deu Certo."; //cria elemento, aparte, visivel na tela que da o feedback que funcionou (apenas quando da certo!)
    lista.appendChild(li); //adiciona o elemento criado a variavel lista
*/
}
//----------------------
//----------------------



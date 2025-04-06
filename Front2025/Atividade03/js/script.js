/*( Variaveis )*/
let pecaSelecionada = null; /*( Peça selecionada/clicada )*/
let quadradoOriginal = null; /*(  Lugar em que a peça estava antes de ser movida )*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*( Ao clica numa peça, salva a peça e seu quadrado atual, destacando o quadrado com borda azul e chamando a função que mostra os movimentos válidos )*/
function selecionarPeca(event, peca) {

  event.stopPropagation(); /*( Impede o clique de afetar o quadrado pai )*/
  limparDestinos(); /*(  Remove seleções anteriores )*/

  pecaSelecionada = peca; /*( Marca qual peça está sendo selecionada )*/
  quadradoOriginal = peca.parentElement; /*( Guarda o quadrado onde a peça selecionada estava )*/

  quadradoOriginal.classList.add("selecionado"); /*( Adiciona a borda azul na peça selecionada )*/

  mostrarMovimentosValidos(quadradoOriginal); /*( Mostra onde a peça selecionada pode ir )*/

}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*( Descobre a posição da peça selecionada (linha e coluna) e marca os quadrados vazios para o deslocamento )*/
/*( Os movimentos possiveis de cada peça são distinguidos pelo icone da peça ( ♜ ♝ ♞ ♛ ♚ ♟ ) e, com base neles, cada peça tem seu movimento proprio )*/
/*( O peão é a unica peça que possui mais de uma função, pois ele não pode retornar casas, asssim é necessario uma função para peão branco e uma para peão preto )*/
function mostrarMovimentosValidos(origem) {
    const tabuleiro = document.querySelector(".tabuleiro");
    const linhas = Array.from(tabuleiro.children);
  
    const linhaIndex = linhas.indexOf(origem.parentElement);
    const colunaIndex = Array.from(origem.parentElement.children).indexOf(origem);
  
    const simbolo = pecaSelecionada.textContent;
  
    /*( Movimento da torre )*/
    if (simbolo === "♜" || simbolo === "♖") {
      const direcoes = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
      ];
      for (let [dx, dy] of direcoes) {
        let i = linhaIndex + dx;
        let j = colunaIndex + dy;
        while (i >= 0 && i < 8 && j >= 0 && j < 8) {
          const destino = linhas[i].children[j];
          if (destino.children.length === 0) {
            destino.classList.add("destino");
            i += dx;
            j += dy;
          } else {
            break;
          }
        }
      }
    }
  
    /*( Movimento do peão preto )*/
    else if (simbolo === "♟" && pecaSelecionada.classList.contains("pecaP")) {
      const novaLinha = linhaIndex + 1;
      if (novaLinha < 8) {
        const destino = linhas[novaLinha].children[colunaIndex];
        if (destino.children.length === 0) {
          destino.classList.add("destino");
        }
      }
    }
  
    /*( Movimento do peão branco )*/
    else if (simbolo === "♟" && pecaSelecionada.classList.contains("pecaB")) {
      const novaLinha = linhaIndex - 1;
      if (novaLinha >= 0) {
        const destino = linhas[novaLinha].children[colunaIndex];
        if (destino.children.length === 0) {
          destino.classList.add("destino");
        }
      }
    }
  
    /*( Movimento do bispo )*/
    else if (simbolo === "♝" || simbolo === "♗") {
      const direcoes = [
        [-1, -1], [-1, 1], [1, -1], [1, 1]
      ];
      for (let [dx, dy] of direcoes) {
        let i = linhaIndex + dx;
        let j = colunaIndex + dy;
        while (i >= 0 && i < 8 && j >= 0 && j < 8) {
          const destino = linhas[i].children[j];
          if (destino.children.length === 0) {
            destino.classList.add("destino");
            i += dx;
            j += dy;
          } else {
            break;
          }
        }
      }
    }
  
    /*( Movimento do cavalo )*/
    else if (simbolo === "♞" || simbolo === "♘") {
      const movimentos = [
        [-2, -1], [-2, 1],
        [-1, -2], [-1, 2],
        [1, -2], [1, 2],
        [2, -1], [2, 1],
      ];
  
      for (let [dx, dy] of movimentos) {
        const i = linhaIndex + dx;
        const j = colunaIndex + dy;
        if (i >= 0 && i < 8 && j >= 0 && j < 8) {
          const destino = linhas[i].children[j];
          if (destino.children.length === 0) {
            destino.classList.add("destino");
          }
        }
      }
    }
  
    /*( Movimento da rainha )*/
    else if (simbolo === "♛" || simbolo === "♕") {
      const direcoes = [
        [-1, 0], [1, 0], [0, -1], [0, 1],     // torre
        [-1, -1], [-1, 1], [1, -1], [1, 1]    // bispo
      ];
      for (let [dx, dy] of direcoes) {
        let i = linhaIndex + dx;
        let j = colunaIndex + dy;
        while (i >= 0 && i < 8 && j >= 0 && j < 8) {
          const destino = linhas[i].children[j];
          if (destino.children.length === 0) {
            destino.classList.add("destino");
            i += dx;
            j += dy;
          } else {
            break;
          }
        }
      }
    }
  
    /*( Movimento do rei )*/
    else if (simbolo === "♚" || simbolo === "♔") {
      const direcoes = [
        [-1, 0], [1, 0], [0, -1], [0, 1],     // cima, baixo, esquerda, direita
        [-1, -1], [-1, 1], [1, -1], [1, 1]    // diagonais
      ];
      for (let [dx, dy] of direcoes) {
        const i = linhaIndex + dx;
        const j = colunaIndex + dy;
        if (i >= 0 && i < 8 && j >= 0 && j < 8) {
          const destino = linhas[i].children[j];
          if (destino.children.length === 0) {
            destino.classList.add("destino");
          }
        }
      }
    }
  }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*( Marca o quadrado como possível destino (com borda verde) se ele estiver vazio )*/
function marcarQuadrado(div) {

  if (div.children.length === 0) {
    div.classList.add("destino");
  }

}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*( Limpa a tela antes de selecionar outra peça (Remove as bordas verde) )*/
function limparDestinos() {

  document.querySelectorAll(".destino").forEach(div => div.classList.remove("destino"));
  document.querySelectorAll(".selecionado").forEach(div => div.classList.remove("selecionado"));

}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*( Move a peça, se possivel, para o quadrado selecionado e lipa os destaques )*/
function handleClick(quadrado) {

  if (quadrado.classList.contains("destino") && pecaSelecionada) {
    quadrado.appendChild(pecaSelecionada); /*( Move a peça para a posição selecionada )*/
  }

  limparDestinos(); /*( Limpa o destaque )*/
  pecaSelecionada = null;
  quadradoOriginal = null;

}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
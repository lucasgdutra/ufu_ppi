let tabuleiro;
let board;
let aviso;
let jogador;
let lin, col;
let fim = false;

function inicia() {
  tabuleiro = new Array(3);
  board = document.getElementById("board");
  aviso = document.getElementById("aviso");
  jogador = 1;

  for (let i = 0; i < 3; i++) tabuleiro[i] = new Array(3);

  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) tabuleiro[i][j] = 0;
  exibe();
}

function exibe() {
  HTML = '<table  cellpadding="10" border="1">';
  for (let i = 0; i < 3; i++) {
    HTML += "<tr>";
    for (let j = 0; j < 3; j++)
      if (tabuleiro[i][j] == 0) HTML += "<td>  -  </td>";
      else if (tabuleiro[i][j] == 1) HTML += "<td class=\"bg-orange\"> X </td>";
      else HTML += "<td class=\"bg-blue\"> O </td>";
    HTML += "</tr>";
  }
  HTML += "</table><br />";
  board.innerHTML = HTML;

  //O evento precisa ser recriado a cada vez que o tabuleiro é reescrito
  const tdElements = document.querySelectorAll("#board td");
  tdElements.forEach(function (element) {
    element.addEventListener("click", function (event) {
      const click = event.target;
      const lin = click.parentNode.rowIndex;
      const col = click.cellIndex;

      jogar(lin, col);
    });
  });
}

function jogar(lin, col) {
  if (fim) {
    aviso.innerHTML = "O jogo acabou!";
    return;
  }

  aviso.innerHTML = "Vez do jogador: " + ((jogador % 2) + 1);
  // lin = parseInt(document.getElementById("lin").value) - 1;
  // col = parseInt(document.getElementById("col").value) - 1;

  if (tabuleiro[lin][col] == 0)
    if (jogador % 2) tabuleiro[lin][col] = 1;
    else tabuleiro[lin][col] = -1;
  else {
    aviso.innerHTML = "Campo ja foi marcado!";
    jogador--;
  }

  jogador++;
  exibe();
  checa();
}

function checa() {
  var soma;

  //Linhas
  for (let i = 0; i < 3; i++) {
    soma = 0;
    soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];

    if (soma == 3 || soma == -3) {
      aviso.innerHTML =
        "Jogador " +
        ((jogador % 2) + 1) +
        " ganhou! Linha " +
        (i + 1) +
        " preenchida!";
      fim = true;
    }
  }

  //Colunas
  for (let i = 0; i < 3; i++) {
    soma = 0;
    soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];

    if (soma == 3 || soma == -3) {
      aviso.innerHTML =
        "Jogador " +
        ((jogador % 2) + 1) +
        " ganhou! Coluna " +
        (i + 1) +
        " preenchida!";
      fim = true;
    }
  }

  //Diagonal
  soma = 0;
  soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
  if (soma == 3 || soma == -3) {
    aviso.innerHTML =
      "Jogador " + ((jogador % 2) + 1) + " ganhou! Diagonal preenchida!";
    fim = true;
  }

  //Diagonal
  soma = 0;
  soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
  if (soma == 3 || soma == -3) {
    aviso.innerHTML =
      "Jogador " + ((jogador % 2) + 1) + " ganhou! Diagonal preenchida!";
    fim = true;
  }

  //Velha
  var velha = true;
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) if (tabuleiro[i][j] == 0) velha = false;

  if (velha) {
    aviso.innerHTML = "Deu velha!";
    fim = true;
  }
}

function reinicia() {
  fim = false;
  jogador = 1;
  aviso.innerHTML = "";
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) tabuleiro[i][j] = 0;

  exibe();
}

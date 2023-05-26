//Function para ativar o som das teclas
function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
} 
//Const para pegar a lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//while = enquanto
while (contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1];

  //template string
  const idAudio = `#som_${instrumento}`;

  //console.log(idAudio);

  //'som_{instrumento}' 
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  contador = contador + 1;

  //console.log(contador);
}
//Function para ativar o som das teclas
function tocaSomPom() {
  document.querySelector('#som_tecla_pom').play();
} 

//Eventos para ativar o som das teclas
document.querySelector('.tecla_pom').onclick = tocaSomPom;


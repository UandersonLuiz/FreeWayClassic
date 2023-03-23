//código dos carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [3, 4, 6, 7, 5.5, 3.5];
let comprimentoCarros = 50;
let alturaCarros = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){       xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
 return xCarro < -50;
}






//código do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
   if (keyIsDown(DOWN_ARROW)){
     if(atorPodeSeMover()){
      yAtor += 3;
     }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){  colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros, alturaCarros, xAtor, yAtor,15 )
    if (colisao){
      voltarAtorParaPosicaoInicial();
      somDaColisao.play();
      meusPontos = 0;
    }
  }  
}

function voltarAtorParaPosicaoInicial(){
  yAtor = 366;
}

function mostraPontos(){
  text(meusPontos, width / 5, 26);
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 255, 0));
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltarAtorParaPosicaoInicial();
  }
}

function atorPodeSeMover(){
  return yAtor < 366;
}






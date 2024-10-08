//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variaveis do oponente
let XRaqueteOponente = 585;
let YRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  colisaoMinhaRaqueteBiblioteca();
  colisaoRaqueteOponenteBiblioteca();
  mostraRaquete(XRaqueteOponente, YRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(XRaqueteOponente, YRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function colisaoMinhaRaqueteBiblioteca(){
  
 colidiu = 
   collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
   velocidadeXBolinha *= -1;
  }
}

function colisaoRaqueteOponenteBiblioteca(){
  
 colidiu = 
   collideRectCircle(XRaqueteOponente, YRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
   velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoMinhaRaquete(x, y) {
  colidiu = collideRectCircle(x, y,
    raqueteComprimento,
    raqueteAltura,
    xBolinha,
    yBolinha,
    raio);

  if (colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente =
    yBolinha - YRaqueteOponente - raqueteComprimento / 2 - 30;
  YRaqueteOponente += velocidadeYOponente;
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
  
}

 function marcaPonto() {
    if (xBolinha > 587) {
        meusPontos += 1;
    }
    if (xBolinha < 16) {
        pontosDoOponente += 1;
    }
}

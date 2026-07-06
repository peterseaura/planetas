class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.raio = 15;
    this.vel = 5;
    this.vida = 100;
    this.pontos = 0;
  }

  mover(teclas) {
    if (teclas.w) this.y -= this.vel;
    if (teclas.s) this.y += this.vel;
    if (teclas.a) this.x -= this.vel;
    if (teclas.d) this.x += this.vel;

    // não deixa sair da tela
    if (this.x < this.raio) this.x = this.raio;
    if (this.x > window.innerWidth - this.raio) this.x = window.innerWidth - this.raio;
    if (this.y < this.raio) this.y = this.raio;
    if (this.y > window.innerHeight - this.raio) this.y = window.innerHeight - this.raio;
  }

  desenhar(ctx) {
    ctx.fillStyle = '#00ffff';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#00ffff';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

class Universo {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.estrelas = [];
    this.criarEstrelas();
  }

  criarEstrelas() {
    for (let i = 0; i < 200; i++) {
      this.estrelas.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
      });
    }
  }

  desenhar() {
    this.ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
    this.estrelas.forEach(estrela => {
      estrela.y += estrela.speed;
      if (estrela.y > this.canvas.height) estrela.y = 0;
      this.ctx.beginPath();
      this.ctx.arc(estrela.x, estrela.y, estrela.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

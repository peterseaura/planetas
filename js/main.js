const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const universo = new Universo(canvas);
const player = new Player(canvas.width / 2, canvas.height / 2);

const teclas = {};
let gameRodando = false;

// Controle WASD
window.addEventListener('keydown', e => teclas[e.key.toLowerCase()] = true);
window.addEventListener('keyup', e => teclas[e.key.toLowerCase()] = false);

// Botão Start
document.getElementById('startBtn').onclick = () => {
  document.getElementById('startScreen').classList.add('hidden');
  gameRodando = true;
  loop();
}

function loop() {
  if (!gameRodando) return;
  
  // Limpa tela
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Desenha tudo
  universo.desenhar();
  player.mover(teclas);
  player.desenhar(ctx);
  
  // Atualiza UI
  document.getElementById('vida').innerText = player.vida;
  document.getElementById('pontos').innerText = player.pontos;
  
  requestAnimationFrame(loop);
}

// Ajusta canvas quando redimensiona
window.addEventListener('resize', () => universo.resize());
universo.resize();

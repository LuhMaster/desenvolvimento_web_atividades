(function() {
  const style = document.createElement('style');
  style.textContent = `
    .bola {
      position: fixed;
      width: 60px;
      height: 60px;
      background: url("../assets/bola.png") no-repeat center/contain;
      border-radius: 50%;
        transition: all 4s linear;
      z-index: 9999;
    }
  `;
  document.head.appendChild(style);

  const bola = document.createElement('div');
  bola.classList.add('bola');
  document.body.appendChild(bola);

  let angulo = 0;

  function moverAleatorio() {
    const largura = window.innerWidth - bola.offsetWidth;
    const altura = window.innerHeight - bola.offsetHeight;

    const novaX = Math.random() * largura;
    const novaY = Math.random() * altura;

    angulo += 90; 

    bola.style.left = novaX + 'px';
    bola.style.top = novaY + 'px';
    bola.style.transform = `rotate(${angulo}deg)`;
  }

  moverAleatorio(); 
  setInterval(moverAleatorio, 2000); 
})();

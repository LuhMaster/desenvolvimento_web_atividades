
(function () {
  const imagens = [
    '../assets/banner1.jpeg',
    '../assets/banner2.jpg',
    '../assets/banner3.webp',
    '../assets/banner4.jpg'
  ];

  const slider = document.createElement('div');
  slider.className = 'banner-slider';
  slider.style.width = '100%';
  slider.style.height = '18rem';
  slider.style.overflow = 'hidden';
  slider.style.position = 'relative';
  document.body.insertBefore(slider, document.body.firstChild);
  const header = document.querySelector('header');
  header.insertAdjacentElement('afterend', slider);

  const imgElement = document.createElement('img');
  imgElement.src = imagens[0];
  imgElement.style.width = '80%';
  imgElement.style.height = '300px';
  imgElement.style.objectFit = 'cover';
  imgElement.style.objectPosition = ' 80% 50%';
  imgElement.style.display = 'block';
  imgElement.style.margin = 'auto';
  imgElement.style.borderRadius = '20px'
  imgElement.style.transition = 'opacity 0.5s ease';
  slider.appendChild(imgElement);

  let index = 0;

  function proximaImagem() {
    index = (index + 1) % imagens.length;

    imgElement.style.opacity = -150;
    setTimeout(() => {
      imgElement.src = imagens[index];
      imgElement.style.opacity = 10;
    }, 500);
  }

  setInterval(proximaImagem, 5000);
})();

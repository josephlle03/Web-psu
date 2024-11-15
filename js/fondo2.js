document.addEventListener('DOMContentLoaded', () => {
    const sky = document.querySelector('.sky');
    const starCount = 100; // Número de estrellas
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const [x, y] = [Math.random() * 100, Math.random() * 100];
      const delay = Math.random() * 5;
      const duration = Math.random() * 2 + 1;
  
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.animationDelay = `${delay}s`;
      star.style.animationDuration = `${duration}s`;
  
      sky.appendChild(star);
    }
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelector('.stars');
    const starCount = 100; // Número de estrellas

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const [x, y] = [Math.random() * 100, Math.random() * 100];
        const duration = Math.random() * 5 + 5;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.animationDuration = `${duration}s`;
        stars.appendChild(star);
    }
});

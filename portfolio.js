document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelectorAll('.social-icons i').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.color = '#00ff85';
        icon.style.transition = 'transform 0.3s ease, color 0.3s ease';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
        icon.style.color = '';
    });
});

window.addEventListener('load', () => {
    const heroImage = document.querySelector('.hero-image img');
    heroImage.style.transform = 'translateY(0)';
    heroImage.style.opacity = '1';
    heroImage.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
});

document.querySelector('.download').addEventListener('click', () => {
    alert('Your resume is being downloaded!');
});

document.querySelector('.video').addEventListener('click', () => {
    alert('Playing the introduction video!');
});

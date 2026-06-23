// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.media-card, .feature-card').forEach(card => {
    observer.observe(card);
});

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Handle form submission
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada! Obrigado por entrar em contato com o Agro-Lost.');
    this.reset();
});

// Add random glitch effect to header on scroll
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    // Add slight parallax effect to hero
    const hero = document.querySelector('.hero-content');
    if (hero && lastScrollY < window.innerHeight) {
        hero.style.transform = `translateY(${lastScrollY * 0.5}px)`;
    }
});

// Easter egg: Konami code for special message
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #e94560, #ff6b9d);
        color: white;
        padding: 2rem;
        border-radius: 10px;
        z-index: 9999;
        text-align: center;
        font-size: 1.5rem;
        box-shadow: 0 0 30px rgba(233, 69, 96, 0.8);
        animation: fadeInScale 0.5s ease;
    `;
    message.textContent = '🎮 Você desbloqueou o modo Lost Media! 🎮';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeOutScale 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 2000);
}

const keyframeStyles = document.createElement('style');
keyframeStyles.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes fadeOutScale {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
`;
document.head.appendChild(keyframeStyles);

// Console easter egg
console.log('%c🎮 Bem-vindo ao Agro-Lost! 🎮', 'font-size: 24px; color: #ff6b9d; font-weight: bold;');
console.log('%cExplorando os mistérios da mídia perdida...', 'font-size: 14px; color: #e94560;');

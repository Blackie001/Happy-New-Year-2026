// Confetti Explosion
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const confetti = [];
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500'];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            spin: Math.random() * 10 - 5
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, index) => {
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation * Math.PI / 180);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
        ctx.restore();

        c.y += c.speed;
        c.rotation += c.spin;

        if (c.y > canvas.height) {
            confetti.splice(index, 1);
        }
    });
}

function animate() {
    drawConfetti();
    requestAnimationFrame(animate);
}

setInterval(createConfetti, 800);
createConfetti();
animate();

// Sparkling Particles (gentle falling sparkles)
function createParticle() {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.width = `${Math.random() * 5 + 2}px`;
    p.style.height = p.style.width;
    p.style.left = `${Math.random() * 100}vw`;
    p.style.opacity = Math.random() * 0.8 + 0.2;
    p.style.animationDuration = `${Math.random() * 10 + 10}s`;
    document.body.appendChild(p);

    setTimeout(() => p.remove(), 20000);
}

setInterval(createParticle, 300);

// Image Carousel
const images = [
    'https://media.gettyimages.com/id/2192592885/vector/happy-new-year-2026-fireworks-web-banner-design-template-in-gold-colors.jpg?s=1024x1024&w=gi&k=20&c=efARcqKWslfKBedB8PCMCmi2etyJ2MtLOGntuEwKxt8=',
    'https://static.vecteezy.com/system/resources/previews/070/390/989/non_2x/new-year-2026-fireworks-celebration-image-vector.jpg',
    'https://cdn.vectorstock.com/i/1000v/09/04/2026-happy-new-year-greeting-card-banner-vector-57100904.jpg',
    'https://static.vecteezy.com/system/resources/previews/070/390/956/non_2x/new-year-2026-celebration-with-golden-glitter-numbers-sparkling-lights-and-confetti-on-elegant-background-perfect-for-holiday-design-and-party-invitations-illustration-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/072/789/150/large_2x/a-sparkling-celebration-of-the-new-year-2026-with-glittering-numbers-and-colorful-bokeh-lights-in-the-background-photo.jpeg',
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
];

const slides = document.getElementById('slides');

images.forEach(src => {
    const div = document.createElement('div');
    div.classList.add('slide');
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Happy New Year 2026 Celebration';
    div.appendChild(img);
    slides.appendChild(div);
});

let currentSlide = 0;

function showSlide(n) {
    currentSlide = (n + images.length) % images.length;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto-play
setInterval(() => changeSlide(1), 5000);
showSlide(0);
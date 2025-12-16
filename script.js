// 🎨 Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 🌙 Toggle modo oscuro/claro
const toggle = document.getElementById("theme-toggle");
let dark = true;

toggle.addEventListener("click", () => {
  dark = !dark;
  document.body.style.background = dark ? "#0f172a" : "#f5f5f5";
  document.body.style.color = dark ? "#f1f5f9" : "#222";
  toggle.textContent = dark ? "🌙" : "☀️";
});

// ✨ Animación al hacer scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// --- HERO FULLSCREEN CON PARTÍCULAS EN MOVIMIENTO ---
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particlesArray = [];
let numParticles;
let hue = 200; // tono base azul

function initParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray = [];
  numParticles = Math.floor(window.innerWidth / 6);

  for (let i = 0; i < numParticles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2 + 1;
    const speedX = (Math.random() - 0.5) * 1;
    const speedY = (Math.random() - 0.5) * 1;
    particlesArray.push({ x, y, size, speedX, speedY });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hue += 0.5;
  ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;

  particlesArray.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    // Movimiento
    p.x += p.speedX;
    p.y += p.speedY;

    // Rebote de bordes
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    // Pequeño parpadeo
    p.size = Math.max(0.5, Math.min(2.5, p.size + (Math.random() - 0.5) * 0.05));
  });

  connectParticles();
  requestAnimationFrame(drawParticles);
}

// --- Conexiones entre partículas ---
function connectParticles() {
  let opacity;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let dx = particlesArray[a].x - particlesArray[b].x;
      let dy = particlesArray[a].y - particlesArray[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        opacity = 1 - distance / 120;
        ctx.strokeStyle = `rgba(0, 188, 212, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

window.addEventListener("resize", initParticles);
initParticles();
drawParticles();


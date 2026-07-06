// EXPERIENCIA - Animaciones suaves solo para el cuerpo de Experiencia.html
(() => {
  const elements = document.querySelectorAll('.experience-page .xp-reveal');

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -60px 0px'
  });

  elements.forEach((element) => observer.observe(element));
})();

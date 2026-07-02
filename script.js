document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const setActive = () => {
    let current = '';
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if(rect.top <= 120 && rect.bottom >= 120) current = sec.id;
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', setActive);
  setActive();

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

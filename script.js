const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const section = document.querySelectorAll("section[id]");
const navAnchor = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  let current = "";

  section.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 120) {
      current = section.id;
    }
  });
  navAnchor.forEach(link =>{
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current){
        link.classList.add('active');
    }
  });
}

window.addEventListener("scroll", setActiveLink);

const observer =  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.15});

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('year').textContent = new Data().getFullYear();
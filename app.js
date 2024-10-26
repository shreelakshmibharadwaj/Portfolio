// JavaScript for smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animation effect on scroll
  const projects = document.querySelectorAll('.project-card');
  
  window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
  
    projects.forEach(project => {
      const projectTop = project.getBoundingClientRect().top;
  
      if (projectTop < triggerBottom) {
        project.classList.add('show');
      } else {
        project.classList.remove('show');
      }
    });
  });
// Initialize AOS for scroll animations
AOS.init({
    duration: 1000,
    offset: 200,
    once: true,
  });
    
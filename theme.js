// Mobile menu functionality only
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navContainer = document.querySelector('.nav-container');
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    navContainer.classList.toggle('active');
    const isActive = navContainer.classList.contains('active');
    mobileMenuToggle.innerHTML = isActive ? '✕' : '☰';
  };
  
  // Event listener for mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navContainer.classList.remove('active');
        mobileMenuToggle.innerHTML = '☰';
      }
    });
  });
  
  // Close mobile menu when window is resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navContainer.classList.remove('active');
      mobileMenuToggle.innerHTML = '☰';
    }
  });
});
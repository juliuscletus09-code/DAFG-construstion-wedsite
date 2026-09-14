document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));

      if (!expanded) {
        mainNav.style.display = 'flex';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '82px';
        mainNav.style.left = '16px';
        mainNav.style.right = '16px';
        mainNav.style.flexDirection = 'column';
        mainNav.style.background = '#ffffff';
        mainNav.style.border = '1px solid rgba(10, 46, 93, 0.08)';
        mainNav.style.borderRadius = '18px';
        mainNav.style.padding = '18px';
        mainNav.style.boxShadow = '0 18px 40px rgba(10, 46, 93, 0.12)';
      } else {
        mainNav.style.display = '';
        mainNav.style.position = '';
        mainNav.style.top = '';
        mainNav.style.left = '';
        mainNav.style.right = '';
        mainNav.style.flexDirection = '';
        mainNav.style.background = '';
        mainNav.style.border = '';
        mainNav.style.borderRadius = '';
        mainNav.style.padding = '';
        mainNav.style.boxShadow = '';
      }
    });
  }
});

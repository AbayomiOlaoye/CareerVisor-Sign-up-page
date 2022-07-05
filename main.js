// Logic for menu modal control
const menuBtn = document.querySelector('.open');
const exitBtn = document.querySelector('.exit');
const navDiv = document.querySelector('nav');
const links = document.querySelectorAll('.mob');

menuBtn.addEventListener('click', () => {
  if (navDiv.style.display === 'none') {
    navDiv.style.display = 'block';
  }
});

exitBtn.addEventListener('click', () => {
  if (navDiv.style.display === 'block') {
    navDiv.style.display = 'none';
  }
});

// If user clicks any link, menu closes responds
links.forEach((link) => {
  link.addEventListener('click', () => {
    navDiv.style.display = 'none';
  });
});
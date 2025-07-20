document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('#toggle');
  const navList = document.querySelector('#nav-list');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('hidden');
  });
});

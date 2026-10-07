const root = document.documentElement;
const menu = document.getElementById('menu');
const menuBtn = document.querySelector('.menu-btn');

try {
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
} catch (e) {}

document.querySelector('.theme-btn').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => menu.classList.remove('open'))
);

document.getElementById('year').textContent = new Date().getFullYear();

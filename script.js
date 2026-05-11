// ===========================
// CHILI CHILI — script.js
// ===========================

// --- NAV SCROLL ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// --- BURGER MENU ---
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  burger.classList.toggle('active');
});

document.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.classList.remove('active');
  });
});

// --- MENU TABS ---
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// --- SCROLL REVEAL ---
const revealEls = document.querySelectorAll('.menu-item, .day-row, .contact-block, .photo-slot');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.5s ease both';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// --- HIGHLIGHT TODAY ---
const days = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
const today = days[new Date().getDay()];

document.querySelectorAll('.day-row').forEach(row => {
  const dayEl = row.querySelector('.day');

  if (dayEl && dayEl.textContent.trim() === today) {
    row.style.background = 'rgba(200,52,26,0.12)';
    row.style.borderLeft = '3px solid var(--red)';

    const badge = document.createElement('span');
    badge.textContent = 'Idag';
    badge.style.cssText = 'font-size:0.7rem;background:var(--red);color:#fff;padding:2px 8px;border-radius:20px;margin-left:8px;';

    dayEl.appendChild(badge);
  }
});
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
inject();
injectSpeedInsights();

const header = document.getElementById('header');
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

mobileBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  mobileBtn.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    mobileBtn.classList.remove('active');
  });
});

// Formulário de agendamento -> WhatsApp
const form = document.getElementById('form-agendamento');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = encodeURIComponent(document.getElementById('nome').value.trim());
    const tel = encodeURIComponent(document.getElementById('telefone').value.trim());
    const trat = encodeURIComponent(document.getElementById('tratamento').value);
    const msg = `Ol%C3%A1!%20Meu%20nome%20%C3%A9%20${nome}.%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20${trat}.%20Meu%20telefone%3A%20${tel}.`;
    window.open(`https://wa.me/553433130281?text=${msg}`, '_blank');
  });
}

// Animações de revelação no scroll
const revealSelectors = [
  '.section-kicker', '.section-title', '.section-subtitle',
  '.card-diferencial', '.card-tratamento', '.card-review',
  '.clinica-content', '.clinica-image-placeholder',
  '.agendamento-box', '.localizacao-info-wrap', '.faq-item',
  '.cta-final .container > *'
];
const revealEls = document.querySelectorAll(revealSelectors.join(','));
revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
});
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach((el) => io.observe(el));

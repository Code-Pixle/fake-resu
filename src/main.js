import './style.css';
import { icons } from './icons.js';
import { translations } from './data/content.js';
import { renderAll } from './sections/render.js';

const LANGUAGE_KEY = 'resume-language';
const THEME_KEY = 'resume-theme';
const html = document.documentElement;
const languagePicker = document.getElementById('language-picker');
const languageTrigger = document.getElementById('language-trigger');
const languageCurrent = document.getElementById('language-current');
const languageMenu = document.getElementById('language-menu');
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.getElementById('mobile-nav-links');
const header = document.getElementById('header');

let currentLanguage = 'fa';
let menuOpen = false;
let typewriterTimer = null;

function getPreferredLanguage() {
  const saved = localStorage.getItem(LANGUAGE_KEY);
  return Object.hasOwn(translations, saved) ? saved : 'fa';
}

function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  html.classList.toggle('dark', theme === 'dark');
  html.style.setProperty('color-scheme', theme);
  themeToggle.innerHTML = theme === 'dark' ? icons.sun : icons.moon;
  themeToggle.setAttribute('aria-label', translations[currentLanguage].aria.theme);
  localStorage.setItem(THEME_KEY, theme);
}

function setMenuOpen(open) {
  menuOpen = open;
  mobileMenu.classList.toggle('hidden', !open);
  mobileMenuBtn.innerHTML = open ? icons.close : icons.menu;
  mobileMenuBtn.setAttribute('aria-expanded', String(open));
  mobileMenuBtn.setAttribute(
    'aria-label',
    open ? translations[currentLanguage].aria.menuClose : translations[currentLanguage].aria.menuOpen
  );
}

function observeReveals() {
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
}

function observeProgressBars() {
  document.querySelectorAll('.progress-fill').forEach((bar) => progressObserver.observe(bar));
}

function startTypewriter(language) {
  if (typewriterTimer) window.clearTimeout(typewriterTimer);

  const element = document.getElementById('typewriter');
  const phrases = translations[language].typewriterTexts;
  if (!element || !phrases.length) return;

  let phraseIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  function tick() {
    if (!element.isConnected) return;
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      element.textContent = phrase.substring(0, characterIndex + 1);
      characterIndex += 1;

      if (characterIndex >= phrase.length) {
        deleting = true;
        typewriterTimer = window.setTimeout(tick, 1800);
        return;
      }
      typewriterTimer = window.setTimeout(tick, 75);
      return;
    }

    element.textContent = phrase.substring(0, Math.max(0, characterIndex - 1));
    characterIndex -= 1;

    if (characterIndex <= 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typewriterTimer = window.setTimeout(tick, 350);
      return;
    }
    typewriterTimer = window.setTimeout(tick, 35);
  }

  typewriterTimer = window.setTimeout(tick, 450);
}

function setActiveNav(sectionId) {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('nav-link-active', link.dataset.section === sectionId);
  });
}

function applyLanguage(language) {
  currentLanguage = Object.hasOwn(translations, language) ? language : 'fa';
  const locale = translations[currentLanguage];

  html.lang = locale.htmlLang;
  html.dir = locale.direction;
  document.title = locale.documentTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', locale.description);

  languageTrigger.setAttribute('aria-label', locale.aria.language);
  languageCurrent.textContent = ({ fa: 'فارسی', en: 'English', ar: 'العربية' })[currentLanguage];
  languageMenu.querySelectorAll('[data-language]').forEach((item) => {
    const selected = item.dataset.language === currentLanguage;
    item.setAttribute('aria-checked', String(selected));
    item.classList.toggle('is-selected', selected);
  });
  mobileMenuBtn.setAttribute('aria-label', menuOpen ? locale.aria.menuClose : locale.aria.menuOpen);
  themeToggle.setAttribute('aria-label', locale.aria.theme);

  renderAll(currentLanguage);
  observeReveals();
  observeProgressBars();
  startTypewriter(currentLanguage);
  if (location.hash) setActiveNav(location.hash.slice(1));

  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
}

/* Reveal and skill-bar observers are created once; new elements are observed after each re-render. */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');

      const progressFill = entry.target.querySelector('.progress-fill');
      if (progressFill) requestAnimationFrame(() => progressFill.classList.add('animate'));

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('animate');
      progressObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.5 }
);

/* The section elements stay in place while their translated contents are re-rendered. */
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveNav(entry.target.id);
    });
  },
  { rootMargin: '-35% 0px -45% 0px', threshold: 0 }
);

document.querySelectorAll('main section[id]').forEach((section) => navObserver.observe(section));

/* Language and theme controls */
languageTrigger.addEventListener('click', () => {
  const isOpen = !languageMenu.classList.contains('hidden');
  languageMenu.classList.toggle('hidden', isOpen);
  languageTrigger.setAttribute('aria-expanded', String(!isOpen));
});
languageMenu.addEventListener('click', (event) => {
  const option = event.target.closest('[data-language]');
  if (!option) return;
  applyLanguage(option.dataset.language);
  languageMenu.classList.add('hidden');
  languageTrigger.setAttribute('aria-expanded', 'false');
});
document.addEventListener('click', (event) => {
  if (!languagePicker.contains(event.target)) {
    languageMenu.classList.add('hidden');
    languageTrigger.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !languageMenu.classList.contains('hidden')) {
    languageMenu.classList.add('hidden');
    languageTrigger.setAttribute('aria-expanded', 'false');
    languageTrigger.focus();
  }
});
themeToggle.addEventListener('click', () => {
  const nextTheme = html.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(nextTheme);
});

/* Mobile navigation */
mobileMenuBtn.addEventListener('click', () => setMenuOpen(!menuOpen));
mobileNavLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});

/* Close the mobile menu when the viewport changes to desktop size. */
window.matchMedia('(min-width: 1024px)').addEventListener?.('change', () => {
  if (menuOpen) setMenuOpen(false);
});

/* Sticky header */
window.addEventListener(
  'scroll',
  () => header.classList.toggle('header-scrolled', window.scrollY > 20),
  { passive: true }
);

/* Smooth scrolling for in-page navigation links */
document.addEventListener('click', (event) => {
  const targetElement = event.target instanceof Element ? event.target : null;
  const anchor = targetElement?.closest('a[href^="#"]');
  if (!anchor) return;

  const targetId = anchor.getAttribute('href').slice(1);
  const target = document.getElementById(targetId);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.pushState(null, '', `#${targetId}`);
});

/* Initial render */
applyTheme(getPreferredTheme());
applyLanguage(getPreferredLanguage());

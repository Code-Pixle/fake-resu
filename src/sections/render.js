import { icons } from '../icons.js';
import { profile, translations } from '../data/content.js';
import { portfolioProjects } from '../data/projects.js';

export function renderNavigation(language) {
  const locale = translations[language];
  const logo = document.getElementById('nav-logo');
  logo.innerHTML = `${icons.logo}<span>${locale.brand}</span>`;

  const navMarkup = locale.nav
    .map((item) => `<li><a href="#${item.id}" class="nav-link" data-section="${item.id}">${item.label}</a></li>`)
    .join('');

  document.getElementById('nav-links').innerHTML = navMarkup;
  document.getElementById('mobile-nav-links').innerHTML = locale.nav
    .map((item) => `<li><a href="#${item.id}" class="nav-link block" data-section="${item.id}">${item.label}</a></li>`)
    .join('');

  document.querySelector('header nav')?.setAttribute('aria-label', locale.aria.navigation);
}

export function renderHero(language) {
  const locale = translations[language];
  const hero = locale.hero;
  const section = document.getElementById('hero');

  section.innerHTML = `
    <div class="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center w-full min-w-0">
      <div class="order-2 lg:order-1 min-w-0">
        <div class="hero-item hero-delay-1 section-badge">
          <span class="status-dot"></span>
          ${hero.badge}
        </div>

        <p class="hero-item hero-delay-1 text-slate-500 dark:text-slate-400 text-sm mb-3">
          ${hero.greeting}
        </p>

        <h1 class="hero-item hero-delay-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white mb-4">
          ${locale.displayName}
        </h1>

        <p class="hero-item hero-delay-3 text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-6 min-h-[2.5rem] break-words">
          <span id="typewriter" class="typewriter-cursor gradient-text"></span>
        </p>

        <p class="hero-item hero-delay-3 text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-[1.9] mb-8 max-w-lg">
          ${hero.bio}
        </p>

        <div class="hero-item hero-delay-4 flex flex-wrap gap-3 mb-10">
          <a href="mailto:${profile.email}" class="btn-primary">
            ${icons.mail}
            ${hero.contactButton}
          </a>
          <a href="#projects" class="btn-outline">
            ${icons.layers}
            ${hero.projectsButton}
          </a>
        </div>

        <div class="hero-item hero-delay-5 grid grid-cols-2 gap-3 max-w-sm mb-8 min-w-0">
          <div class="stat-card">
            <div class="stat-value">${hero.experienceValue}</div>
            <div class="stat-label">${hero.experienceLabel}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value text-lg sm:text-xl">${hero.specialtyValue}</div>
            <div class="stat-label">${hero.specialtyLabel}</div>
          </div>
        </div>

        <div class="hero-item hero-delay-5 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          ${icons.mail}
          <a href="mailto:${profile.email}" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">${profile.email}</a>
        </div>
      </div>

      <div class="hero-item hero-delay-3 order-1 lg:order-2 flex justify-center lg:justify-end min-w-0 w-full">
        <div class="profile-wrap">
          <div class="profile-ring"></div>
          <div class="relative glass-card p-6 w-full max-w-[260px] sm:max-w-[280px] mx-auto shadow-card">
            <div class="status-badge">
              <span class="status-dot"></span>
              ${hero.cardStatus}
            </div>
            <div class="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
              <span class="text-white text-7xl font-black select-none">${locale.displayName.charAt(0)}</span>
            </div>
            <div class="mt-5 text-center">
              <p class="font-bold text-lg text-slate-900 dark:text-white">${locale.displayName}</p>
              <p class="text-primary-600 dark:text-primary-400 text-sm mt-1 font-medium">${hero.title}</p>
            </div>
            <div class="flex justify-center mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-700/50">
              <span class="text-xs text-slate-500 dark:text-slate-400">${profile.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderSkills(language) {
  const locale = translations[language];
  const data = locale.skills;
  const section = document.getElementById('skills');

  const tagsHtml = data.tags
    .map((tag, index) => `<span class="skill-tag reveal" style="transition-delay:${index * 40}ms">${tag}</span>`)
    .join('');

  const numberFormat = new Intl.NumberFormat(locale.htmlLang);
  const barsHtml = data.bars
    .map(
      (skill, index) => `
      <div class="reveal" style="transition-delay:${index * 70}ms">
        <div class="flex justify-between items-center gap-3 mb-2">
          <span class="text-sm font-medium text-slate-700 dark:text-slate-300">${skill.name}</span>
          <span class="text-sm font-bold text-primary-600 dark:text-primary-400" dir="ltr">${numberFormat.format(skill.level)}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="--progress:${skill.level}%"></div>
        </div>
      </div>`
    )
    .join('');

  section.innerHTML = `
    <div class="reveal mb-12">
      <div class="section-badge">${icons.code} ${data.badge}</div>
      <h2 class="section-title">${data.title}</h2>
      <p class="section-subtitle">${data.subtitle}</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-6">
      <div class="glass-card p-6 sm:p-8 reveal">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-5">${data.coreTitle}</h3>
        <div class="flex flex-wrap gap-2.5">${tagsHtml}</div>
      </div>
      <div class="glass-card p-6 sm:p-8 reveal">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-6">${data.proficiencyTitle}</h3>
        <div class="space-y-5">${barsHtml}</div>
      </div>
    </div>
  `;
}

export function renderExperience(language) {
  const locale = translations[language];
  const data = locale.experience;
  const section = document.getElementById('experience');

  const itemsHtml = data.items
    .map(
      (item, index) => `
      <div class="experience-item relative pr-10 pb-10 last:pb-0 reveal" style="transition-delay:${index * 100}ms">
        <div class="timeline-dot"></div>
        <div class="glass-card-hover p-6">
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="text-xs font-bold px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400">${item.period}</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">${item.role}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">${item.description}</p>
          <div class="flex flex-wrap gap-2">
            ${item.tags.map((tag) => `<span class="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">${tag}</span>`).join('')}
          </div>
        </div>
      </div>`
    )
    .join('');

  section.innerHTML = `
    <div class="reveal mb-12">
      <div class="section-badge">${icons.briefcase} ${data.badge}</div>
      <h2 class="section-title">${data.title}</h2>
      <p class="section-subtitle">${data.subtitle}</p>
    </div>
    <div class="experience-list relative mr-1">${itemsHtml}<div class="timeline-line" aria-hidden="true"></div></div>
  `;
}

export function renderProjects(language) {
  const data = translations[language].projects;
  const portfolio = portfolioProjects[language] || portfolioProjects.fa;
  const section = document.getElementById('projects');
  const categoryKeys = [...new Set(portfolio.items.map((item) => item.category))];
  const filterMarkup = [
    `<button type="button" class="portfolio-filter is-active" data-filter="all" aria-pressed="true">${portfolio.all}</button>`,
    ...categoryKeys.map((key) =>
      `<button type="button" class="portfolio-filter" data-filter="${key}" aria-pressed="false">${portfolio.categories[key]}</button>`
    ),
  ].join('');

  const cardsMarkup = portfolio.items.map((item, index) => {
    const initials = item.title.trim().slice(0, 2);
    const tones = [
      'from-primary-600 to-indigo-500',
      'from-slate-700 to-slate-500',
      'from-amber-600 to-orange-400',
      'from-emerald-700 to-teal-500',
      'from-violet-700 to-fuchsia-500',
    ];
    return `
      <a class="project-card portfolio-card group reveal" data-category="${item.category}"
        href="/resum/${item.slug}/index.html" target="_blank" rel="noopener noreferrer"
        aria-label="${portfolio.visit}: ${item.title}">
        <div class="portfolio-card-art bg-gradient-to-br ${tones[index % tones.length]}">
          <span class="portfolio-card-mark" aria-hidden="true">${initials}</span>
          <span class="portfolio-card-category">${portfolio.categories[item.category]}</span>
        </div>
        <div class="p-5 sm:p-6">
          <div class="flex items-start justify-between gap-3 mb-3">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">${item.title}</h3>
            <span class="portfolio-card-arrow" aria-hidden="true">↗</span>
          </div>
          <p class="text-sm leading-7 text-slate-500 dark:text-slate-400 min-h-[5.5rem]">${item.description}</p>
          <span class="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary-600 dark:text-primary-400">
            ${portfolio.visit}
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </a>`;
  }).join('');

  section.innerHTML = `
    <div class="reveal mb-10">
      <div class="section-badge">${icons.layers} ${data.badge}</div>
      <h2 class="section-title">${data.title}</h2>
      <p class="section-subtitle">${data.subtitle}</p>
    </div>
    <div class="portfolio-filters reveal" role="group" aria-label="${data.title}">
      ${filterMarkup}
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" id="portfolio-grid">
      ${cardsMarkup}
    </div>
  `;

  section.onclick = (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button || !section.contains(button)) return;
    const selected = button.dataset.filter;
    section.querySelectorAll('.portfolio-filter').forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle('is-active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    section.querySelectorAll('.portfolio-card').forEach((card) => {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
    });
  };
}

export function renderContact(language) {
  const data = translations[language].contact;
  const section = document.getElementById('contact');
  const phone = profile.phone.replace(/\D/g, '');

  section.innerHTML = `
    <div class="glass-card p-10 sm:p-14 text-center reveal relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 pointer-events-none"></div>

      <div class="relative">
        <div class="section-badge mx-auto">${data.badge}</div>

        <h2 class="section-title mb-3">${data.title}</h2>

        <p class="section-subtitle !mb-8 mx-auto">${data.subtitle}</p>

        <div class="flex flex-wrap justify-center gap-3">

          <a href="mailto:${profile.email}" class="btn-primary">
            ${icons.mail} ${data.emailButton}
          </a>

          <a href="https://t.me/${profile.tel_id}" target="_blank" rel="noopener noreferrer" class="btn-outline">
            ${icons.telegram} ${data.telegramButton}
          </a>

          <a href="https://wa.me/${phone}" target="_blank" rel="noopener noreferrer" class="btn-outline">
            ${icons.whatsapp} ${data.whatsappButton}
          </a>

        </div>

        <a href="mailto:${profile.email}" class="inline-block mt-5 text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          ${profile.email}
        </a>
      </div>
    </div>
  `;
}

export function renderFooter(language) {
  const locale = translations[language];
  const footer = document.getElementById('footer');
  const year = new Date().getFullYear();
  const numberFormat = new Intl.NumberFormat(locale.htmlLang);

  footer.innerHTML = `
    <div class="border-t border-slate-200/60 dark:border-slate-800/60">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <p>© ${numberFormat.format(year)} ${locale.displayName}</p>
        <p class="flex items-center gap-1.5">${locale.footer.credit} ${icons.code}</p>
      </div>
    </div>
  `;
}

export function renderAll(language) {
  renderNavigation(language);
  renderHero(language);
  renderSkills(language);
  renderExperience(language);
  renderProjects(language);
  renderContact(language);
  renderFooter(language);
}

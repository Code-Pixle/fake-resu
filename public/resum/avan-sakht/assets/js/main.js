(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const filters = [...document.querySelectorAll('.filter-button')];
  const cards = [...document.querySelectorAll('.project-card')];
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    const filter = button.dataset.filter;
    cards.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  }));

  const projectData = [
    {title:'مجتمع مسکونی آتریوم',category:'مسکونی · سعادت‌آباد',image:'images/01-residential-building.jpg',description:'یک مجموعه مسکونی شهری با تأکید بر نورگیری مناسب، تراس‌های قابل استفاده و ارتباط متعادل فضاهای خصوصی و عمومی. این پروژه به‌عنوان نمونه‌ای از رویکرد آوان به طراحی مجتمع‌های مسکونی معرفی شده است.',facts:[['۱۸','واحد مسکونی'],['۴٬۲۰۰','مترمربع زیربنا'],['۱۴۰۴','سال اجرا']]},
    {title:'ویلای رُهام',category:'ویلایی · لواسان',image:'images/02-villa.jpg',description:'ویلایی معاصر با خطوط ساده، بازشوهای بزرگ و پیوند نزدیک میان فضاهای داخلی و محوطه. انتخاب مصالح طبیعی و نورپردازی گرم، هویت آرام پروژه را شکل می‌دهد.',facts:[['۶۲۰','مترمربع زیربنا'],['۲','طبقه'],['۱۴۰۴','سال اجرا']]},
    {title:'رزیدنس سپیدار',category:'مسکونی · شهرک غرب',image:'images/04-apartment-complex.jpg',description:'پروژه‌ای مسکونی با تأکید بر تناسبات خوانا، بالکن‌های عمیق و طراحی پوسته‌ای که ضمن حفظ حریم خصوصی، نور و چشم‌انداز را به فضای زندگی وارد می‌کند.',facts:[['۲۴','واحد مسکونی'],['۵٬۸۰۰','مترمربع زیربنا'],['۱۴۰۳','سال اجرا']]},
    {title:'ساختمان اداری مانا',category:'اداری · ونک',image:'images/05-commercial-building.jpg',description:'ساختمانی اداری با نمای شفاف و ورودی شاخص. سازمان‌دهی فضاها با هدف انعطاف‌پذیری بیشتر در چیدمان و پاسخ‌گویی به نیازهای متنوع کاربران انجام شده است.',facts:[['۷','طبقه'],['۳٬۱۰۰','مترمربع زیربنا'],['۱۴۰۳','سال اجرا']]},
    {title:'خانه آرا',category:'طراحی داخلی · فرمانیه',image:'images/06-kitchen-interior.jpg',description:'بازطراحی فضای داخلی یک خانه با استفاده از متریال طبیعی، رنگ‌های خنثی و نورپردازی لایه‌ای؛ تمرکز اصلی بر سادگی بصری و عملکرد روزمره بوده است.',facts:[['۲۸۰','مترمربع'],['داخلی','حوزه پروژه'],['۱۴۰۲','سال اجرا']]}
  ];
  const dialog = document.querySelector('.project-dialog');
  if (dialog) {
    const title = document.getElementById('dialog-title');
    const category = document.getElementById('dialog-category');
    const description = document.getElementById('dialog-description');
    const image = document.getElementById('dialog-image');
    const facts = document.getElementById('dialog-facts');
    document.querySelectorAll('.project-open').forEach(button => button.addEventListener('click', () => {
      const card = button.closest('.project-card');
      const item = projectData[Number(card.dataset.project)];
      if (!item) return;
      title.textContent = item.title;
      category.textContent = item.category;
      description.textContent = item.description;
      image.src = item.image;
      image.alt = item.title;
      facts.innerHTML = item.facts.map(([value,label]) => `<div><b>${value}</b><small>${label}</small></div>`).join('');
      dialog.showModal();
    }));
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('keydown', event => { if (event.key === 'Escape') dialog.close(); });
  }

  const revealTargets = document.querySelectorAll('.about-grid,.about-image-wrap,.project-card,.principle,.journey-steps article');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold:0.12});
    revealTargets.forEach(target => { target.classList.add('reveal'); observer.observe(target); });
  }
})();

/* Sepehr Estate demo website - vanilla JavaScript, no external dependencies. */
const PROPERTIES = [
  {
    id: 101, title: 'آپارتمان خوش‌نقشه در پونک', deal: 'sale', type: 'apartment', city: 'تهران', district: 'پونک', area: 92, rooms: 2, year: 1402, floor: '۶ از ۸', price: 12800000000, deposit: null, rent: null,
    image: 'images/01-apartment-building.jpg', badge: 'قیمت قطعی', code: 'SP-۱۰۱',
    description: 'واحدی خوش‌نور با پلان کاربردی، دسترسی مناسب به مراکز خرید و امکانات روزمره. ساختمان دارای لابی مرتب و پارکینگ اختصاصی است.',
    features: ['پارکینگ اختصاصی', 'آسانسور', 'انباری', 'بالکن', 'نورگیری دوطرفه', 'سند تک‌برگ']
  },
  {
    id: 102, title: 'ویلای مدرن با استخر اختصاصی', deal: 'sale', type: 'villa', city: 'تهران', district: 'لواسان', area: 330, rooms: 4, year: 1401, floor: 'دو طبقه', price: null, deposit: null, rent: null,
    image: 'images/04-private-villa.jpg', badge: 'ویژه', code: 'SP-۱۰۲',
    description: 'ویلایی با طراحی مدرن، محوطه سبز و فضای نشیمن رو به باغ. جزئیات و شرایط بازدید پس از هماهنگی ارائه می‌شود.',
    features: ['استخر', 'حیاط محوطه‌سازی‌شده', 'پارکینگ مسقف', 'تراس بزرگ', 'آشپزخانه مجهز', 'سند رسمی']
  },
  {
    id: 103, title: 'واحد سه‌خوابه در سعادت‌آباد', deal: 'sale', type: 'apartment', city: 'تهران', district: 'سعادت‌آباد', area: 145, rooms: 3, year: 1403, floor: '۵ از ۱۰', price: 24700000000, deposit: null, rent: null,
    image: 'images/02-modern-living-room.jpg', badge: 'قیمت قطعی', code: 'SP-۱۰۳',
    description: 'آپارتمان نوساز با فضای نشیمن بزرگ، آشپزخانه‌ی مدرن و دسترسی آسان به مسیرهای اصلی محله.',
    features: ['پارکینگ', 'آسانسور', 'انباری', 'لابی', 'سیستم سرمایش و گرمایش', 'سند تک‌برگ']
  },
  {
    id: 104, title: 'دفتر اداری در موقعیت ممتاز ونک', deal: 'sale', type: 'office', city: 'تهران', district: 'ونک', area: 120, rooms: 2, year: 1400, floor: '۴ از ۷', price: 18900000000, deposit: null, rent: null,
    image: 'images/08-glass-office.jpg', badge: 'قیمت قطعی', code: 'SP-۱۰۴',
    description: 'فضای اداری دو‌بَر با نور طبیعی و دسترسی مناسب به حمل‌ونقل شهری؛ مناسب شرکت‌ها و دفترهای حرفه‌ای.',
    features: ['آسانسور', 'لابی', 'اتاق مدیریت', 'آبدارخانه', 'سند اداری', 'دسترسی مناسب']
  },
  {
    id: 105, title: 'آپارتمان مینیمال در شهرک غرب', deal: 'sale', type: 'apartment', city: 'تهران', district: 'شهرک غرب', area: 110, rooms: 2, year: 1403, floor: '۷ از ۱۲', price: 17400000000, deposit: null, rent: null,
    image: 'images/03-designer-kitchen.jpg', badge: 'تازه‌رسیده', code: 'SP-۱۰۵',
    description: 'واحدی با طراحی مینیمال، متریال باکیفیت و آشپزخانه‌ی یکپارچه؛ دارای نورگیری مناسب و دسترسی محلی مطلوب.',
    features: ['پارکینگ', 'آسانسور', 'انباری', 'لابی', 'درب ضدسرقت', 'کابینت سفارشی']
  },
  {
    id: 106, title: 'ویلای دنج برای اجاره در فشم', deal: 'rent', type: 'villa', city: 'تهران', district: 'فشم', area: 280, rooms: 3, year: 1399, floor: 'دو طبقه', price: null, deposit: 2500000000, rent: 65000000,
    image: 'images/09-open-plan-interior.jpg', badge: 'اجاره', code: 'SP-۱۰۶',
    description: 'ویلای خوش‌ساخت با فضای باز و نشیمن دلباز؛ مناسب اقامت خانوادگی و استفاده در تمام فصل‌ها.',
    features: ['حیاط', 'تراس', 'پارکینگ', 'شومینه', 'آشپزخانه مجهز', 'چشم‌انداز']
  },
  {
    id: 107, title: 'واحد اداری جمع‌وجور در ونک', deal: 'sale', type: 'office', city: 'تهران', district: 'ونک', area: 87, rooms: 1, year: 1402, floor: '۳ از ۶', price: null, deposit: null, rent: null,
    image: 'images/07-residential-lobby.jpg', badge: 'قیمت توافقی', code: 'SP-۱۰۷',
    description: 'دفتر اداری مناسب کسب‌وکارهای کوچک با دسترسی مناسب و فضای داخلی قابل چیدمان.',
    features: ['آسانسور', 'لابی', 'آبدارخانه', 'نور طبیعی', 'سند اداری', 'نگهبانی']
  },
  {
    id: 108, title: 'آپارتمان دوخوابه در تهرانپارس', deal: 'sale', type: 'apartment', city: 'تهران', district: 'تهرانپارس', area: 78, rooms: 2, year: 1401, floor: '۲ از ۵', price: 8200000000, deposit: null, rent: null,
    image: 'images/06-city-apartment.jpg', badge: 'قیمت قطعی', code: 'SP-۱۰۸',
    description: 'واحدی جمع‌وجور و کاربردی با دسترسی محلی مناسب؛ گزینه‌ای برای سکونت یا سرمایه‌گذاری بلندمدت.',
    features: ['پارکینگ', 'آسانسور', 'انباری', 'بالکن', 'کف‌پوش سرامیک', 'سند تک‌برگ']
  },
  {
    id: 109, title: 'آپارتمان بزرگ و نورگیر در نیاوران', deal: 'sale', type: 'apartment', city: 'تهران', district: 'نیاوران', area: 175, rooms: 3, year: 1404, floor: '۸ از ۱۱', price: 34500000000, deposit: null, rent: null,
    image: 'images/05-master-bedroom.jpg', badge: 'نوساز', code: 'SP-۱۰۹',
    description: 'واحد نوساز با اتاق‌های بزرگ، طراحی داخلی آرام، چشم‌انداز باز و متریال باکیفیت.',
    features: ['پارکینگ', 'آسانسور', 'انباری', 'لابی', 'تراس', 'سند تک‌برگ']
  }
];

const money = (value) => new Intl.NumberFormat('fa-IR').format(value) + ' تومان';
const shortMoney = (value) => {
  if (!value) return 'تماس بگیرید';
  if (value >= 1000000000) return new Intl.NumberFormat('fa-IR', {maximumFractionDigits: 1}).format(value / 1000000000) + ' میلیارد تومان';
  if (value >= 1000000) return new Intl.NumberFormat('fa-IR').format(value / 1000000) + ' میلیون تومان';
  return money(value);
};
const dealLabel = (deal) => deal === 'rent' ? 'اجاره' : 'فروش';
const typeLabel = (type) => ({apartment:'آپارتمان', villa:'ویلا', office:'اداری', commercial:'تجاری', land:'زمین'})[type] || 'ملک';
const getSaved = () => {
  try { return JSON.parse(localStorage.getItem('sepehrSaved') || '[]'); } catch { return []; }
};
const setSaved = (ids) => localStorage.setItem('sepehrSaved', JSON.stringify(ids));
const isSaved = (id) => getSaved().includes(Number(id));

function propertyPrice(p) {
  if (p.deal === 'rent') return `<span class="price-main">${shortMoney(p.deposit)} ودیعه</span><span class="price-sub">${shortMoney(p.rent)} اجاره ماهانه</span>`;
  return `<span class="price-main">${p.price ? money(p.price) : 'تماس بگیرید'}</span>${p.price ? '<span class="price-sub">قیمت کل ملک</span>' : '<span class="price-sub">برای استعلام قیمت روز</span>'}`;
}
function propertyCard(p) {
  return `<article class="property-card">
    <a class="property-photo" href="property.html?id=${p.id}" aria-label="مشاهده ${p.title}">
      <img src="${p.image}" alt="${p.title}" loading="lazy"><span class="photo-badge">${p.badge}</span>
    </a>
    <div class="property-card-body">
      <div class="property-card-top"><span class="property-type">${typeLabel(p.type)} · ${dealLabel(p.deal)}</span>
        <button class="save-btn ${isSaved(p.id) ? 'is-saved' : ''}" data-save="${p.id}" aria-label="ذخیره ملک" title="ذخیره ملک">${isSaved(p.id) ? '♥' : '♡'}</button>
      </div>
      <h3><a href="property.html?id=${p.id}">${p.title}</a></h3>
      <p class="location-line"><span class="pin-icon">⌖</span>${p.city}، ${p.district}</p>
      <div class="property-facts"><span>▱ ${new Intl.NumberFormat('fa-IR').format(p.area)} متر</span><span>▣ ${new Intl.NumberFormat('fa-IR').format(p.rooms)} اتاق</span><span>◷ ${new Intl.NumberFormat('fa-IR').format(p.year)}</span></div>
      <div class="property-card-bottom"><div class="card-price">${propertyPrice(p)}</div><a class="card-arrow" href="property.html?id=${p.id}" aria-label="جزئیات ملک">←</a></div>
    </div>
  </article>`;
}
function renderCards(target, items) {
  if (!target) return;
  target.innerHTML = items.length ? items.map(propertyCard).join('') : `<div class="empty-state"><div class="empty-icon">⌕</div><h3>ملکی با این مشخصات پیدا نشد</h3><p>فیلترها رو تغییر بده یا جست‌وجوی ساده‌تری انجام بده.</p><a class="btn btn-primary" href="listings.html">نمایش همه ملک‌ها</a></div>`;
}
function refreshSaveButtons() {
  document.querySelectorAll('[data-save]').forEach(btn => {
    const saved = isSaved(btn.dataset.save);
    btn.classList.toggle('is-saved', saved);
    btn.textContent = saved ? '♥' : '♡';
  });
}
function setupGlobal() {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menu && nav) menu.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open'); menu.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (e) => {
    const save = e.target.closest('[data-save]');
    if (save) {
      const id = Number(save.dataset.save); const list = getSaved();
      setSaved(list.includes(id) ? list.filter(x => x !== id) : [...list, id]);
      refreshSaveButtons();
      const note = document.querySelector('[data-toast]');
      if (note) { note.textContent = list.includes(id) ? 'از علاقه‌مندی‌ها حذف شد' : 'به علاقه‌مندی‌ها اضافه شد'; note.classList.add('show'); setTimeout(() => note.classList.remove('show'), 1800); }
    }
  });
  document.querySelectorAll('form[data-demo-form]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const status = form.querySelector('.form-status');
    if (status) status.textContent = 'درخواست شما در این نسخه نمایشی ثبت شد. برای ارسال واقعی، فرم باید به بک‌اند متصل شود.';
    form.reset();
  }));
  const year = document.querySelector('[data-year]'); if (year) year.textContent = new Intl.NumberFormat('fa-IR').format(new Date().getFullYear());
  refreshSaveButtons();
}

function setupHome() {
  const target = document.querySelector('[data-featured-list]');
  if (target) renderCards(target, PROPERTIES.filter(p => [101,102,103,105].includes(p.id)));
  const form = document.querySelector('[data-home-search]');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault(); const data = new FormData(form); const params = new URLSearchParams();
    for (const [key,value] of data.entries()) if (String(value).trim()) params.set(key, value);
    location.href = 'listings.html?' + params.toString();
  });
}
function setupListings() {
  const target = document.querySelector('[data-results]'); if (!target) return;
  const form = document.querySelector('[data-filter-form]'); const count = document.querySelector('[data-result-count]');
  const params = new URLSearchParams(location.search);
  ['q','deal','type','district','minPrice','maxPrice'].forEach(key => { const el = form?.elements[key]; if (el && params.has(key)) el.value = params.get(key); });
  function apply() {
    const fd = new FormData(form); const f = Object.fromEntries(fd.entries());
    let results = PROPERTIES.filter(p => {
      const query = (f.q || '').trim().toLocaleLowerCase('fa');
      const text = `${p.title} ${p.district} ${p.city} ${p.code}`.toLocaleLowerCase('fa');
      if (query && !text.includes(query)) return false;
      if (f.deal && p.deal !== f.deal) return false;
      if (f.type && p.type !== f.type) return false;
      if (f.district && !p.district.includes(f.district.trim())) return false;
      const min = Number(f.minPrice || 0), max = Number(f.maxPrice || 0);
      if (min && (!p.price || p.price < min)) return false;
      if (max && (!p.price || p.price > max)) return false;
      if (f.minArea && p.area < Number(f.minArea)) return false;
      if (f.rooms && p.rooms < Number(f.rooms)) return false;
      return true;
    });
    if (f.sort === 'price-asc') results.sort((a,b) => (a.price || Number.MAX_SAFE_INTEGER) - (b.price || Number.MAX_SAFE_INTEGER));
    if (f.sort === 'price-desc') results.sort((a,b) => (b.price || -1) - (a.price || -1));
    if (f.sort === 'area-desc') results.sort((a,b) => b.area-a.area);
    if (count) count.textContent = `${new Intl.NumberFormat('fa-IR').format(results.length)} مورد`;
    renderCards(target, results);
  }
  form?.addEventListener('submit', e => { e.preventDefault(); apply(); });
  form?.querySelector('[data-reset]')?.addEventListener('click', () => { form.reset(); apply(); });
  form?.querySelectorAll('select').forEach(el => el.addEventListener('change', apply));
  apply();
}
function setupProperty() {
  const root = document.querySelector('[data-property-detail]'); if (!root) return;
  const id = Number(new URLSearchParams(location.search).get('id'));
  const p = PROPERTIES.find(item => item.id === id);
  if (!p) { root.innerHTML = `<div class="empty-state"><h2>ملک موردنظر پیدا نشد</h2><a class="btn btn-primary" href="listings.html">بازگشت به فهرست ملک‌ها</a></div>`; return; }
  document.title = `${p.title} | سپهر املاک`;
  const gallery = [p.image, ...PROPERTIES.filter(x => x.id !== p.id).slice(0,3).map(x => x.image)];
  root.innerHTML = `
    <div class="detail-breadcrumb"><a href="index.html">خانه</a><span>/</span><a href="listings.html">ملک‌ها</a><span>/</span><b>${p.title}</b></div>
    <div class="detail-heading"><div><span class="eyebrow">کد ملک ${p.code}</span><h1>${p.title}</h1><p>⌖ ${p.city}، ${p.district} <span class="detail-dot">•</span> ${dealLabel(p.deal)} ${typeLabel(p.type)}</p></div><button class="save-btn detail-save ${isSaved(p.id) ? 'is-saved' : ''}" data-save="${p.id}">${isSaved(p.id) ? '♥' : '♡'} ذخیره</button></div>
    <div class="detail-gallery"><div class="gallery-main"><img src="${gallery[0]}" alt="${p.title}"></div><div class="gallery-side"><img src="${gallery[1]}" alt="نمای داخلی ملک"><img src="${gallery[2]}" alt="فضای داخلی ملک"><img src="${gallery[3]}" alt="جزئیات ملک"></div></div>
    <div class="detail-layout"><section class="detail-content"><div class="detail-facts"><div><b>${new Intl.NumberFormat('fa-IR').format(p.area)}</b><span>متراژ (متر)</span></div><div><b>${new Intl.NumberFormat('fa-IR').format(p.rooms)}</b><span>تعداد اتاق</span></div><div><b>${new Intl.NumberFormat('fa-IR').format(p.year)}</b><span>سال ساخت</span></div><div><b>${p.floor}</b><span>طبقه</span></div></div>
      <div class="content-panel"><h2>درباره این ملک</h2><p>${p.description}</p></div>
      <div class="content-panel"><h2>امکانات و ویژگی‌ها</h2><div class="feature-grid">${p.features.map(f=>`<span>✓ ${f}</span>`).join('')}</div></div>
      <div class="content-panel"><h2>موقعیت ملک</h2><div class="map-placeholder"><span>⌖</span><b>${p.district}، ${p.city}</b><small>نمایش نقشه پس از اتصال سرویس نقشه فعال می‌شود.</small></div></div>
    </section><aside class="detail-aside"><div class="price-panel"><span class="panel-label">${dealLabel(p.deal)} ملک</span><div class="detail-price">${p.deal === 'rent' ? `<b>${money(p.deposit)}</b><span>ودیعه</span><b>${money(p.rent)}</b><span>اجاره ماهانه</span>` : `<b>${p.price ? money(p.price) : 'تماس بگیرید'}</b><span>${p.price ? 'قیمت کل' : 'برای استعلام قیمت روز'}</span>`}</div><a class="btn btn-primary btn-block" href="contact.html?property=${p.id}">درخواست بازدید</a><p class="safe-note">اطلاعات این آگهی نمونه است و پیش از انتشار باید به‌روزرسانی شود.</p></div>
    <form class="quick-form" data-demo-form><h3>درخواست اطلاعات بیشتر</h3><label>نام و نام خانوادگی<input name="name" required placeholder="نام شما"></label><label>شماره تماس<input name="phone" required inputmode="tel" pattern="[0-9۰-۹+\\- ]{8,}" placeholder="شماره تماس"></label><label>توضیحات<textarea name="message" rows="3" placeholder="زمان مناسب برای تماس"></textarea></label><button class="btn btn-outline btn-block" type="submit">ثبت درخواست</button><p class="form-status" aria-live="polite"></p></form></aside></div>`;
  setupGlobal();
}
function setupFavorites() {
  const target = document.querySelector('[data-favorites]'); if (!target) return;
  const ids = getSaved(); renderCards(target, PROPERTIES.filter(p => ids.includes(p.id)));
  const emptyCount = document.querySelector('[data-favorite-count]'); if (emptyCount) emptyCount.textContent = new Intl.NumberFormat('fa-IR').format(ids.length);
}

document.addEventListener('DOMContentLoaded', () => {
  setupGlobal(); setupHome(); setupListings(); setupProperty(); setupFavorites();
});

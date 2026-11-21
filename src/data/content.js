// اطلاعات ثابت صاحب رزومه؛ نام را فقط همین‌جا نگه دار و آن را در ترجمه‌های زبان‌ها تغییر نده.
export const profile = {
  name: 'طاها رودکرمی',
  email: 'roodkaramit@gmail.com',
  phone: '+98 936 646 1837',
  tel_id: 'OneDeveloper01'
};

/*
 * راهنمای ویرایش و اضافه‌کردن متن:
 * 1) تمام متن‌های نمایشی سایت داخل آبجکت‌های fa، en و ar قرار دارند.
 * 2) هر متن جدید را با یک کلید یکسان در هر سه زبان اضافه کن؛ مثلاً اگر
 *    کلید جدیدی به fa.hero اضافه کردی، همان کلید را به en.hero و ar.hero هم اضافه کن.
 * 3) مهارت جدید: آن را در skills.tags و در صورت داشتن درصد، در skills.bars
 *    هر سه زبان وارد کن. ترتیب موارد در هر سه زبان باید یکسان باشد.
 * 4) سابقه یا مرحله‌ی جدید: یک آبجکت با فیلدهای period، role، description و tags
 *    به experience.items هر سه زبان اضافه کن.
 * 5) عنوان و توضیح هر بخش، دکمه‌ها، متن‌های منو و پیام‌های دسترس‌پذیری هم
 *    در همین فایل و در بخش مربوط به همان زبان قرار دارند.
 * 6) زبان‌های فعلی: fa = فارسی، en = انگلیسی، ar = عربی.
 */

export const translations = {
  fa: {
    htmlLang: 'fa',
    direction: 'rtl',
    displayName: 'طاها رودکرمی',
    documentTitle: 'طاها رودکرمی | توسعه‌دهنده تخصصی بک‌اند',
    description: 'رزومه آنلاین طاها رودکرمی؛ توسعه‌دهنده بک‌اند با تمرکز بر Python، Django و Django REST Framework.',
    brand: 'طاها.dev',
    aria: {
      navigation: 'ناوبری اصلی',
      language: 'انتخاب زبان سایت',
      theme: 'تغییر حالت رنگی',
      menuOpen: 'باز کردن منو',
      menuClose: 'بستن منو',
    },
    nav: [
      { id: 'hero', label: 'خانه' },
      { id: 'skills', label: 'مهارت‌ها' },
      { id: 'experience', label: 'مسیر حرفه‌ای' },
      { id: 'projects', label: 'نمونه‌کارها' },
      { id: 'contact', label: 'تماس' },
    ],
    hero: {
      badge: 'توسعه‌دهنده تخصصی Back-End',
      greeting: 'سلام، من',
      title: 'توسعه‌دهنده بک‌اند',
      bio: 'با ۴ سال تجربه در توسعه وب، تمرکزم روی پیاده‌سازی منطق سمت سرور، طراحی و توسعه API و ساخت سرویس‌های قابل‌اعتماد با Python، Django و Django REST Framework است. در کنار بک‌اند، با HTML و CSS هم کار می‌کنم و توسعه ربات‌های تلگرامی را نیز انجام می‌دهم.',
      contactButton: 'ارتباط با من',
      projectsButton: 'دیدن نمونه‌کارها',
      experienceValue: '+۴',
      experienceLabel: 'سال تجربه',
      specialtyValue: 'Back-End',
      specialtyLabel: 'حوزه تخصصی',
      cardStatus: 'تمرکز تخصصی',
    },
    typewriterTexts: [
      'توسعه‌دهنده بک‌اند',
      'متخصص Python و Django',
      'توسعه‌دهنده API',
      'توسعه‌دهنده ربات تلگرام',
    ],
    skills: {
      badge: 'مهارت‌ها',
      title: 'فناوری‌ها و مهارت‌های من',
      subtitle: 'تمرکز اصلی من روی توسعه بک‌اند، طراحی API و ساخت سرویس‌های سمت سرور است.',
      coreTitle: 'فناوری‌های اصلی',
      proficiencyTitle: 'سطح تسلط',
      tags: ['Python', 'Django', 'Django REST Framework', 'WordPress'],
      bars: [
        { name: 'HTML و CSS', level: 50 },
        { name: 'Python', level: 90 },
        { name: 'Django', level: 90 },
        { name: 'Django REST Framework (DRF)', level: 80 },
        { name: 'توسعه ربات تلگرام', level: 100 },
        { name: 'WordPress', level: 85 },
      ],
    },
    experience: {
      badge: 'مسیر حرفه‌ای',
      title: 'مسیر حرفه‌ای من',
      subtitle: 'مسیر چهار ساله‌ام از مبانی توسعه وب شروع شد و به تمرکز تخصصی بر بک‌اند، API و ربات‌های تلگرامی رسید.',
      items: [
        {
          period: 'شروع مسیر',
          role: 'یادگیری مبانی توسعه وب',
          description: 'شروع با HTML و CSS و یادگیری ساختار صفحات وب؛ آشنایی با اجزای اصلی وب و نحوه‌ی ارتباط آن‌ها با یکدیگر.',
          tags: ['HTML', 'CSS'],
        },
        {
          period: 'گسترش مهارت‌ها',
          role: 'ورود به توسعه بک‌اند',
          description: 'تمرکز بر Python و Django برای پیاده‌سازی منطق سمت سرور، کار با داده‌ها و ساخت بخش‌های پویا و کاربردی وب‌سایت‌ها.',
          tags: ['Python', 'Django'],
        },
        {
          period: 'تمرکز فعلی',
          role: 'توسعه API و سرویس‌های بک‌اند',
          description: 'تمرکز تخصصی بر Django REST Framework، طراحی و پیاده‌سازی API و توسعه ربات‌های تلگرامی در کنار ساختارهای بک‌اند.',
          tags: ['Django REST Framework', 'REST API', 'Telegram Bot'],
        },
      ],
    },
    projects: {
      badge: 'نمونه‌کارها',
      title: 'نمونه‌کارهای من',
      subtitle: 'مجموعه‌ای از وب‌سایت‌های طراحی و پیاده‌سازی‌شده در حوزه‌های مختلف؛ برای مشاهده هر پروژه روی کارت آن کلیک کن.',
    },
    contact: {
      badge: 'تماس',
      title: 'برای همکاری آماده‌ام',
      subtitle: 'برای صحبت درباره‌ی پروژه‌های بک‌اند، توسعه API یا ربات‌های تلگرامی از طریق ایمیل با من در ارتباط باش.',
      emailButton: 'ارسال ایمیل',
      telegramButton: 'تلگرام',
      whatsappButton: 'واتساپ',
    },
    footer: {
      credit: 'طراحی و توسعه با',
    },
  },

  en: {
    htmlLang: 'en',
    direction: 'ltr',
    displayName: 'Taha Roodkarami',
    documentTitle: 'Taha Roodkarami | Back-End Developer',
    description: 'Online resume of Taha Roodkarami, a back-end developer focused on Python, Django, and Django REST Framework.',
    brand: 'طاها.dev',
    aria: {
      navigation: 'Main navigation',
      language: 'Select website language',
      theme: 'Toggle color theme',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    nav: [
      { id: 'hero', label: 'Home' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Career path' },
      { id: 'projects', label: 'Portfolio' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      badge: 'Specialized Back-End Developer',
      greeting: "Hi, I'm",
      title: 'Back-End Developer',
      bio: 'With 4 years of experience in web development, I focus on server-side logic, API design and development, and building reliable services with Python, Django, and Django REST Framework. I also work with HTML and CSS and develop Telegram bots.',
      contactButton: 'Contact me',
      projectsButton: 'View portfolio',
      experienceValue: '4+',
      experienceLabel: 'Years of experience',
      specialtyValue: 'Back-End',
      specialtyLabel: 'Main focus',
      cardStatus: 'Specialized focus',
    },
    typewriterTexts: [
      'Back-End Developer',
      'Python & Django Specialist',
      'API Developer',
      'Telegram Bot Developer',
    ],
    skills: {
      badge: 'Skills',
      title: 'Technologies & Skills',
      subtitle: 'My main focus is back-end development, API design, and server-side services.',
      coreTitle: 'Core Technologies',
      proficiencyTitle: 'Proficiency',
      tags: ['Python', 'Django', 'Django REST Framework', 'WordPress'],
      bars: [
        { name: 'HTML & CSS', level: 50 },
        { name: 'Python', level: 90 },
        { name: 'Django', level: 90 },
        { name: 'Django REST Framework (DRF)', level: 80 },
        { name: 'Telegram Bot Development', level: 100 },
        { name: 'WordPress', level: 85 },
      ],
    },
    experience: {
      badge: 'Career Path',
      title: 'My Professional Journey',
      subtitle: 'My four-year journey began with web development fundamentals and gradually moved toward back-end engineering, APIs, and Telegram bots.',
      items: [
        {
          period: 'Getting started',
          role: 'Learning Web Development Fundamentals',
          description: 'Started with HTML and CSS, learning how web pages are structured and how the main parts of a website work together.',
          tags: ['HTML', 'CSS'],
        },
        {
          period: 'Building skills',
          role: 'Moving into Back-End Development',
          description: 'Focused on Python and Django to build server-side logic, work with data, and develop dynamic web applications.',
          tags: ['Python', 'Django'],
        },
        {
          period: 'Current focus',
          role: 'Building APIs and Back-End Services',
          description: 'Specializing in Django REST Framework, API design and implementation, and Telegram bot development alongside back-end systems.',
          tags: ['Django REST Framework', 'REST API', 'Telegram Bot'],
        },
      ],
    },
    projects: {
      badge: 'Portfolio',
      title: 'My Projects',
      subtitle: 'A selection of websites across different industries. Open any project card to explore the website.',
    },
    contact: {
      badge: 'Contact',
      title: "Let's work together",
      subtitle: 'For back-end projects, API development, or Telegram bot work, feel free to reach out by email.',
      emailButton: 'Send an email',
      telegramButton: 'Telegram',
      whatsappButton: 'WhatsApp',
    },
    footer: {
      credit: 'Designed and developed with',
    },
  },

  ar: {
    htmlLang: 'ar',
    direction: 'rtl',
    displayName: 'طه رودكرمي',
    documentTitle: 'طه رودكرمي | مطوّر Back-End',
    description: 'السيرة الذاتية الإلكترونية لـ طه رودكرمي، مطوّر Back-End متخصص في Python وDjango وDjango REST Framework.',
    brand: 'طاها.dev',
    aria: {
      navigation: 'التنقل الرئيسي',
      language: 'اختيار لغة الموقع',
      theme: 'تغيير مظهر الألوان',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
    },
    nav: [
      { id: 'hero', label: 'الرئيسية' },
      { id: 'skills', label: 'المهارات' },
      { id: 'experience', label: 'المسار المهني' },
      { id: 'projects', label: 'الأعمال' },
      { id: 'contact', label: 'تواصل' },
    ],
    hero: {
      badge: 'مطوّر Back-End متخصص',
      greeting: 'مرحباً، أنا',
      title: 'مطوّر Back-End',
      bio: 'لديّ 4 سنوات من الخبرة في تطوير الويب، وأركّز على بناء منطق الخادم وتصميم واجهات API وتطوير خدمات موثوقة باستخدام Python وDjango وDjango REST Framework. أعمل أيضاً باستخدام HTML وCSS وأطوّر روبوتات Telegram.',
      contactButton: 'تواصل معي',
      projectsButton: 'عرض الأعمال',
      experienceValue: '+4',
      experienceLabel: 'سنوات خبرة',
      specialtyValue: 'Back-End',
      specialtyLabel: 'مجال التخصص',
      cardStatus: 'مجال التركيز',
    },
    typewriterTexts: [
      'مطوّر Back-End',
      'متخصص Python وDjango',
      'مطوّر API',
      'مطوّر روبوتات Telegram',
    ],
    skills: {
      badge: 'المهارات',
      title: 'التقنيات والمهارات',
      subtitle: 'ينصبّ تركيزي الأساسي على تطوير Back-End وتصميم API وبناء خدمات الخادم.',
      coreTitle: 'التقنيات الأساسية',
      proficiencyTitle: 'مستوى الإتقان',
      tags: ['Python', 'Django', 'Django REST Framework', 'WordPress'],
      bars: [
        { name: 'HTML وCSS', level: 50 },
        { name: 'Python', level: 90 },
        { name: 'Django', level: 90 },
        { name: 'Django REST Framework (DRF)', level: 80 },
        { name: 'تطوير روبوتات Telegram', level: 100 },
        { name: 'WordPress', level: 85 },
      ],
    },
    experience: {
      badge: 'المسار المهني',
      title: 'مسيرتي المهنية',
      subtitle: 'بدأت رحلتي الممتدة لأربع سنوات بأساسيات تطوير الويب، ثم اتجهت إلى تخصص Back-End وواجهات API وروبوتات Telegram.',
      items: [
        {
          period: 'البداية',
          role: 'تعلّم أساسيات تطوير الويب',
          description: 'بدأت باستخدام HTML وCSS وتعلّمت بنية صفحات الويب وكيفية عمل الأجزاء الرئيسية للموقع معاً.',
          tags: ['HTML', 'CSS'],
        },
        {
          period: 'تطوير المهارات',
          role: 'الانتقال إلى تطوير Back-End',
          description: 'ركّزت على Python وDjango لبناء منطق الخادم والتعامل مع البيانات وتطوير تطبيقات ويب ديناميكية.',
          tags: ['Python', 'Django'],
        },
        {
          period: 'التركيز الحالي',
          role: 'تطوير API وخدمات Back-End',
          description: 'أركّز على Django REST Framework وتصميم واجهات API وتنفيذها، إلى جانب تطوير روبوتات Telegram وأنظمة Back-End.',
          tags: ['Django REST Framework', 'REST API', 'Telegram Bot'],
        },
      ],
    },
    projects: {
      badge: 'الأعمال',
      title: 'أعمالي',
      subtitle: 'مجموعة من المواقع المصممة والمنفذة في مجالات مختلفة. اضغط على بطاقة المشروع لزيارة الموقع.',
    },
    contact: {
      badge: 'تواصل',
      title: 'لنعمل معاً',
      subtitle: 'للتعاون في مشاريع Back-End أو تطوير API أو روبوتات Telegram، يمكنك التواصل معي عبر البريد الإلكتروني.',
      emailButton: 'إرسال بريد إلكتروني',
      telegramButton: 'تلگرام',
      whatsappButton: 'واتساب',
    },
    footer: {
      credit: 'تم التصميم والتطوير باستخدام',
    },
  },
};

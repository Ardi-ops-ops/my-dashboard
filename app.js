// ── STATE ─────────────────────────────────────────────────────
let currentLang = 'en';
let currentUser = { name: '', email: '' };
let isDark = true;

// ── ELEMENTS ──────────────────────────────────────────────────
const html          = document.documentElement;
const loginPage     = document.getElementById('loginPage');
const signupPage    = document.getElementById('signupPage');
const dashboardPage = document.getElementById('dashboardPage');
const pageTitle     = document.getElementById('pageTitle');
const sidebar       = document.getElementById('sidebar');
const overlay       = document.getElementById('sidebarOverlay');
const hamburger     = document.getElementById('hamburger');
const greetingText  = document.getElementById('greetingText');

// ── LANGUAGE TRANSLATIONS ──────────────────────────────────────
const t = {
  en: {
    greeting: (name) => `Good morning, ${name} 👋`,
    dashboard: 'Dashboard', profile: 'My Profile',
    themeLight: 'Light', themeDark: 'Dark',
  },
  fa: {
    greeting: (name) => `صبح بخیر، ${name} 👋`,
    dashboard: 'داشبورد', profile: 'پروفایل من',
    themeLight: 'روشن', themeDark: 'تاریک',
  }
};

// ── APPLY LANGUAGE ─────────────────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  html.setAttribute('data-lang', lang);
  html.setAttribute('lang', lang === 'fa' ? 'fa' : 'en');

  // Update all data-en / data-fa text nodes
  document.querySelectorAll('[data-en]').forEach(el => {
    const txt = el.getAttribute(`data-${lang}`);
    if (txt) el.textContent = txt;
  });

  // Update placeholders
  document.querySelectorAll('[data-en-placeholder]').forEach(el => {
    const ph = el.getAttribute(`data-${lang}-placeholder`);
    if (ph) el.placeholder = ph;
  });

  // Update page title
  const activePage = document.querySelector('.nav-item.active');
  if (activePage) {
    const pageName = activePage.getAttribute(`data-${lang}`) || activePage.getAttribute('data-page');
    pageTitle.textContent = pageName;
  }

  // Update greeting
  if (currentUser.name) {
    greetingText.textContent = t[lang].greeting(currentUser.name);
  }

  // Update theme label
  document.getElementById('themeLabel').textContent = isDark ? t[lang].themeDark : t[lang].themeLight;

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll(`#langEn, #loginLangEn`).forEach(b => { if(lang === 'en') b.classList.add('active'); });
  document.querySelectorAll(`#langFa, #loginLangFa`).forEach(b => { if(lang === 'fa') b.classList.add('active'); });
}

// ── THEME TOGGLE ───────────────────────────────────────────────
document.getElementById('themeToggle').addEventListener('click', function () {
  isDark = !isDark;
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.getElementById('themeIcon').textContent  = isDark ? '🌙' : '☀️';
  document.getElementById('themeLabel').textContent = isDark ? t[currentLang].themeDark : t[currentLang].themeLight;
  this.classList.add('click-shake');
  setTimeout(() => this.classList.remove('click-shake'), 400);
});

// ── LANG BUTTONS (topbar) ──────────────────────────────────────
document.getElementById('langEn').addEventListener('click', () => applyLang('en'));
document.getElementById('langFa').addEventListener('click', () => applyLang('fa'));
// Login page lang buttons
document.getElementById('loginLangEn').addEventListener('click', () => applyLang('en'));
document.getElementById('loginLangFa').addEventListener('click', () => applyLang('fa'));

// ── SIDEBAR HAMBURGER (mobile) ─────────────────────────────────
function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('show');
  hamburger.classList.add('open');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  hamburger.classList.remove('open');
}
hamburger.addEventListener('click', () => sidebar.classList.contains('open') ? closeSidebar() : openSidebar());
overlay.addEventListener('click', closeSidebar);

// ── PAGE HELPERS ───────────────────────────────────────────────
function showPage(page) {
  [loginPage, signupPage, dashboardPage].forEach(p => p.classList.add('hidden'));
  page.classList.remove('hidden');
}

function showSection(key, titleKey) {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  const target = document.getElementById('section-' + key);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('click-shake');
    setTimeout(() => target.classList.remove('click-shake'), 400);
  }
  pageTitle.textContent = titleKey || key;
  closeSidebar();
}

function setActiveNav(page) {
  document.querySelectorAll('.nav-item[data-page]').forEach(n => n.classList.remove('active'));
  const match = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (match) match.classList.add('active');
}

// ── SET USER INFO ──────────────────────────────────────────────
function setUserInfo(name, email) {
  currentUser = { name, email };
  // Topbar
  document.querySelector('.user-name') && (document.querySelector('.user-name').textContent = name);
  document.querySelector('.user-role');
  // Greeting
  greetingText.textContent = t[currentLang].greeting(name);
  // Profile page
  const profileName = document.getElementById('profileName');
  const infoName    = document.getElementById('infoName');
  const infoEmail   = document.getElementById('infoEmail');
  if (profileName) profileName.textContent = name;
  if (infoName)    infoName.textContent    = name;
  if (infoEmail)   infoEmail.textContent   = email;
}

// Add user name/role span to topbar if not present
function initTopbarUser(name) {
  const userNameEl = document.querySelector('.user-name');
  if (userNameEl) userNameEl.textContent = name;
}

// ── AUTH ───────────────────────────────────────────────────────
document.getElementById('loginBtn').addEventListener('click', function () {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value.trim();
  const name  = document.getElementById('loginName').value.trim();
  if (!email || !pass || !name) {
    alert(currentLang === 'fa' ? 'لطفاً همه فیلدها را پر کنید.' : 'Please fill in all fields.');
    return;
  }
  setUserInfo(name, email);
  showPage(dashboardPage);
  showSection('Dashboard', t[currentLang].dashboard);
  setActiveNav('Dashboard');
});

document.getElementById('signupBtn').addEventListener('click', function () {
  const name  = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass  = document.getElementById('signupPass').value.trim();
  if (!name || !email || !pass) {
    alert(currentLang === 'fa' ? 'لطفاً همه فیلدها را پر کنید.' : 'Please fill in all fields.');
    return;
  }
  setUserInfo(name, email);
  showPage(dashboardPage);
  showSection('Dashboard', t[currentLang].dashboard);
  setActiveNav('Dashboard');
});

document.getElementById('goSignup').addEventListener('click', () => showPage(signupPage));
document.getElementById('goLogin').addEventListener('click',  () => showPage(loginPage));
document.getElementById('logoutBtn').addEventListener('click', () => {
  showPage(loginPage);
  closeSidebar();
});

// ── SIDEBAR NAV ────────────────────────────────────────────────
document.querySelectorAll('.nav-item[data-page]').forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    const key   = item.getAttribute('data-page');
    const label = item.getAttribute(`data-${currentLang}`) || key;
    showSection(key, label);
    pageTitle.textContent = label;
  });
});

// ── AVATAR → PROFILE ───────────────────────────────────────────
document.getElementById('topbarAvatar').addEventListener('click', function () {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  showSection('Profile', t[currentLang].profile);
});

// ── SIDEBAR LOGO → DASHBOARD ───────────────────────────────────
document.getElementById('sidebarLogo').addEventListener('click', function () {
  setActiveNav('Dashboard');
  showSection('Dashboard', t[currentLang].dashboard);
});

// ── PHOTO UPLOAD ───────────────────────────────────────────────
const photoInput        = document.getElementById('photoInput');
const uploadPhotoBtn    = document.getElementById('uploadPhotoBtn');
const removePhotoBtn    = document.getElementById('removePhotoBtn');
const profilePhoto      = document.getElementById('profilePhoto');
const profileDefaultSvg = document.getElementById('profileDefaultSvg');
const topbarPhoto       = document.getElementById('topbarPhoto');
const defaultAvatarSvg  = document.getElementById('defaultAvatarSvg');

uploadPhotoBtn.addEventListener('click', () => photoInput.click());

photoInput.addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    const src = e.target.result;
    profilePhoto.src = src; profilePhoto.style.display = 'block';
    profileDefaultSvg.style.display = 'none';
    topbarPhoto.src = src; topbarPhoto.style.display = 'block';
    defaultAvatarSvg.style.display = 'none';
    removePhotoBtn.classList.remove('hidden');
  };
  reader.readAsDataURL(file);
});

removePhotoBtn.addEventListener('click', function () {
  profilePhoto.src = ''; profilePhoto.style.display = 'none';
  profileDefaultSvg.style.display = 'block';
  topbarPhoto.src = ''; topbarPhoto.style.display = 'none';
  defaultAvatarSvg.style.display = 'block';
  removePhotoBtn.classList.add('hidden');
  photoInput.value = '';
});

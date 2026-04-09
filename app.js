const loginPage     = document.getElementById('loginPage');
const signupPage    = document.getElementById('signupPage');
const dashboardPage = document.getElementById('dashboardPage');
const pageTitle     = document.getElementById('pageTitle');
const html          = document.documentElement;

// ── THEME TOGGLE ──────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const themeLabel  = document.getElementById('themeLabel');
let isDark = true;

themeToggle.addEventListener('click', function () {
  isDark = !isDark;
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeIcon.textContent  = isDark ? '🌙' : '☀️';
  themeLabel.textContent = isDark ? 'Dark' : 'Light';
  themeToggle.classList.add('click-shake');
  setTimeout(() => themeToggle.classList.remove('click-shake'), 400);
});

// ── PHOTO UPLOAD ─────────────────────────────────────────────
const photoInput       = document.getElementById('photoInput');
const uploadPhotoBtn   = document.getElementById('uploadPhotoBtn');
const removePhotoBtn   = document.getElementById('removePhotoBtn');
const profilePhoto     = document.getElementById('profilePhoto');
const profileDefaultSvg = document.getElementById('profileDefaultSvg');
const topbarPhoto      = document.getElementById('topbarPhoto');
const defaultAvatarSvg = document.getElementById('defaultAvatarSvg');

uploadPhotoBtn.addEventListener('click', () => photoInput.click());

photoInput.addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    const src = e.target.result;
    // Update profile page avatar
    profilePhoto.src = src;
    profilePhoto.style.display = 'block';
    profileDefaultSvg.style.display = 'none';
    // Update topbar avatar
    topbarPhoto.src = src;
    topbarPhoto.style.display = 'block';
    defaultAvatarSvg.style.display = 'none';
    // Show remove button
    removePhotoBtn.classList.remove('hidden');
  };
  reader.readAsDataURL(file);
});

removePhotoBtn.addEventListener('click', function () {
  profilePhoto.src = '';
  profilePhoto.style.display = 'none';
  profileDefaultSvg.style.display = 'block';
  topbarPhoto.src = '';
  topbarPhoto.style.display = 'none';
  defaultAvatarSvg.style.display = 'block';
  removePhotoBtn.classList.add('hidden');
  photoInput.value = '';
});

// ── PAGE / SECTION HELPERS ───────────────────────────────────
function showPage(page) {
  [loginPage, signupPage, dashboardPage].forEach(p => p.classList.add('hidden'));
  page.classList.remove('hidden');
}

function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  const target = document.getElementById('section-' + name);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('click-shake');
    setTimeout(() => target.classList.remove('click-shake'), 400);
  }
  pageTitle.textContent = name;
}

function setActiveNav(name) {
  document.querySelectorAll('.nav-item[data-page]').forEach(n => n.classList.remove('active'));
  const match = document.querySelector(`.nav-item[data-page="${name}"]`);
  if (match) match.classList.add('active');
}

// ── AUTH ─────────────────────────────────────────────────────
document.getElementById('loginBtn').addEventListener('click', function () {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value.trim();
  if (!email || !pass) { alert('Please enter your email and password.'); return; }
  showPage(dashboardPage);
  showSection('Dashboard');
  setActiveNav('Dashboard');
});

document.getElementById('signupBtn').addEventListener('click', function () {
  const name  = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass  = document.getElementById('signupPass').value.trim();
  if (!name || !email || !pass) { alert('Please fill in all fields.'); return; }
  showPage(dashboardPage);
  showSection('Dashboard');
  setActiveNav('Dashboard');
});

document.getElementById('goSignup').addEventListener('click', () => showPage(signupPage));
document.getElementById('goLogin').addEventListener('click',  () => showPage(loginPage));
document.getElementById('logoutBtn').addEventListener('click', () => showPage(loginPage));

// ── SIDEBAR NAV ──────────────────────────────────────────────
document.querySelectorAll('.nav-item[data-page]').forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    showSection(item.getAttribute('data-page'));
  });
});

// ── AVATAR → PROFILE ─────────────────────────────────────────
document.getElementById('topbarAvatar').addEventListener('click', function () {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  showSection('Profile');
  pageTitle.textContent = 'My Profile';
});

// ── LOGO → DASHBOARD ─────────────────────────────────────────
document.getElementById('sidebarLogo').addEventListener('click', function () {
  showSection('Dashboard');
  setActiveNav('Dashboard');
});

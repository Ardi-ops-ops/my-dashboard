const loginPage     = document.getElementById('loginPage');
const signupPage    = document.getElementById('signupPage');
const dashboardPage = document.getElementById('dashboardPage');
const pageTitle     = document.getElementById('pageTitle');

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

// Login
document.getElementById('loginBtn').addEventListener('click', function () {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value.trim();
  if (!email || !pass) { alert('Please enter your email and password.'); return; }
  showPage(dashboardPage);
  showSection('Dashboard');
  setActiveNav('Dashboard');
});

// Sign Up
document.getElementById('signupBtn').addEventListener('click', function () {
  const name  = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass  = document.getElementById('signupPass').value.trim();
  if (!name || !email || !pass) { alert('Please fill in all fields.'); return; }
  showPage(dashboardPage);
  showSection('Dashboard');
  setActiveNav('Dashboard');
});

// Switch between login and signup
document.getElementById('goSignup').addEventListener('click', () => showPage(signupPage));
document.getElementById('goLogin').addEventListener('click', ()   => showPage(loginPage));

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => showPage(loginPage));

// Sidebar navigation
document.querySelectorAll('.nav-item[data-page]').forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    showSection(item.getAttribute('data-page'));
  });
});

// Avatar → Profile page
document.getElementById('topbarAvatar').addEventListener('click', function () {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  showSection('Profile');
  pageTitle.textContent = 'My Profile';
});

// Sidebar logo → Dashboard home
document.getElementById('sidebarLogo').addEventListener('click', function () {
  showSection('Dashboard');
  setActiveNav('Dashboard');
});

// Login page logo → no action needed (already on login)
const loginLogo = document.getElementById('loginLogo');
if (loginLogo) {
  loginLogo.addEventListener('click', function () {
    this.classList.add('click-shake');
    setTimeout(() => this.classList.remove('click-shake'), 400);
  });
}

// ─── PAGE REFERENCES ─────────────────────────────────────────────
const loginPage    = document.getElementById('loginPage');
const signupPage   = document.getElementById('signupPage');
const dashboardPage = document.getElementById('dashboardPage');
const pageTitle    = document.getElementById('pageTitle');

// ─── HELPERS ─────────────────────────────────────────────────────
function showPage(page) {
  [loginPage, signupPage, dashboardPage].forEach(p => p.classList.add('hidden'));
  page.classList.remove('hidden');
}

// ─── LOGIN ───────────────────────────────────────────────────────
document.getElementById('loginBtn').addEventListener('click', function () {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value.trim();
  if (!email || !pass) {
    alert('Please enter your email and password.');
    return;
  }
  showPage(dashboardPage);
});

// ─── SIGN UP ─────────────────────────────────────────────────────
document.getElementById('signupBtn').addEventListener('click', function () {
  const name  = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass  = document.getElementById('signupPass').value.trim();
  if (!name || !email || !pass) {
    alert('Please fill in all fields.');
    return;
  }
  showPage(dashboardPage);
});

// ─── NAVIGATION BETWEEN AUTH PAGES ───────────────────────────────
document.getElementById('goSignup').addEventListener('click', function () {
  showPage(signupPage);
});

document.getElementById('goLogin').addEventListener('click', function () {
  showPage(loginPage);
});

// ─── LOGOUT ──────────────────────────────────────────────────────
document.getElementById('logoutBtn').addEventListener('click', function () {
  showPage(loginPage);
});

// ─── SIDEBAR NAVIGATION ───────────────────────────────────────────
document.querySelectorAll('.nav-item[data-page]').forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    pageTitle.textContent = item.getAttribute('data-page');
  });
});

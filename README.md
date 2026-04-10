# 💹 Opofinance – Support Agent Dashboard

> A modern, fully responsive bilingual frontend dashboard for **Chat Support Agents** at **Opofinance**.  
> Built with pure HTML, CSS, and JavaScript — no backend, no database, no frameworks.

---

## 👤 Project Owner

| Field | Details |
|---|---|
| **Name** | Ardalan Varshowsaz |
| **Role** | Chat Support Agent |
| **Company** | Opofinance |
| **Agent ID** | #AGT-2847 |
| **Department** | Chat Support |

---

## 🌐 Live Demo

🔗 **[https://ardi-ops-ops.github.io/my-dashboard/](https://ardi-ops-ops.github.io/my-dashboard/)**

---

## 🖼️ Screenshots

| Login Page | Dashboard | Mobile View |
|---|---|---|
| Glass morphism login with floating orbs | Full stats + ticket management | Fully responsive hamburger menu |

---

## ✨ Key Features

### 🔐 Authentication — Dynamic User
- **Login** requires full name, email, and password
- The logged-in user's **name appears dynamically** across the dashboard — not hardcoded
- Name shows in the topbar, greeting message, and profile page
- **Sign Up** page also sets the user session dynamically
- Logout clears the session and returns to login

### 🌍 Bilingual — English & Persian (فارسی)
- Toggle between **English** and **Persian** from both the login page and topbar
- All UI text, labels, table headers, status pills, and navigation switch instantly
- **Full RTL layout** for Persian — sidebar flips, text aligns right, layout mirrors
- Persian font support with proper Farsi numerals in labels

### 🌙☀️ Dark / Light Mode
- Toggle button in the topbar with moon/sun icon
- **Dark mode** (default) — deep navy/black with glowing accents
- **Light mode** — clean white and blue professional theme
- All colors, backgrounds, and borders transition smoothly

### 📱 Fully Responsive — All Screen Sizes
- **Desktop (1200px+)** — full sidebar + two-column layout
- **Tablet (768–1024px)** — 2-column stat cards, stacked widgets
- **Mobile (≤768px)** — hamburger menu, sliding sidebar with overlay
- **Small phones (≤480px)** — single column cards, compact topbar
- **Very small (≤360px)** — single column everything
- Smooth touch scrolling on mobile (`-webkit-overflow-scrolling: touch`)
- Tables horizontally scrollable on small screens

### 🏠 Dashboard
- Dynamic greeting: *"Good morning, [Your Name] 👋"*
- 4 stat cards — Open Tickets, Resolved Today, Avg Response Time, CSAT Score
- Recent tickets table with priority dots and status pills
- Today's performance with animated gradient progress bars

### 💬 Live Chats
- Active client conversation list
- Stats: Active Chats, Avg Wait Time, Chats Today, Resolved Chats
- Color-coded status indicators (Active, Waiting)

### 🎫 Tickets
- Full ticket management table with priority (🔴 High, 🟡 Medium, 🟢 Low)
- Status: Open, In Progress, Resolved
- Created timestamps

### 👥 Clients
- VIP and Standard client list
- Follow-up tracking and last contact dates

### 🚨 Escalations
- Escalation table showing which team handles each issue
- Escalation rate stats and resolution tracking

### 📈 Performance
- Monthly breakdown with animated gradient progress bars
- FCR rate, CSAT, response time, escalation rate

### 🔍 Knowledge Base
- Support article library with view counts and helpfulness scores
- Most popular, recently added, and most searched articles

### 👤 Profile Page
- Linked to the **avatar in the topbar** — click avatar to open
- Shows dynamic agent info (name from login, email from login)
- Career stats with animated progress bars
- Spinning animated rings around avatar for premium effect
- **📷 Upload Photo** button — opens file picker
- Photo appears on both profile page and topbar avatar instantly
- **Remove Photo** button to revert to default avatar

---

## 🎨 Design System

### Color Theme
| Color | Hex | Usage |
|---|---|---|
| Blue | `#4361ee` | Primary actions, active nav, open status |
| Purple | `#8b5cf6` | Gradients, response time, accents |
| Green | `#10b981` | Success, resolved, CSAT |
| Teal | `#0ea5e9` | Info states, CSAT card |
| Red | `#ef4444` | High priority, urgent indicators |
| Amber | `#f59e0b` | Medium priority, in-progress |

### UI Techniques
- **Glass Morphism** — `backdrop-filter: blur()` on all panels
- **CSS Custom Properties** — full dark/light theming with variables
- **RTL Support** — CSS `direction: rtl` with mirrored layout
- **Gradient Progress Bars** — multi-color animated bars
- **Hover Vibration** — subtle shake on interactive elements
- **Click Shake** — section transition feedback animation
- **Floating Orbs** — animated background blobs on login page
- **Spinning Rings** — profile avatar decoration

---

## 🗂️ Project Structure

```
my-dashboard/
│
├── index.html    — Full page structure: login, signup, all 8 dashboard sections
├── style.css     — All styles: themes, RTL, animations, responsive breakpoints
├── app.js        — All logic: auth, language switching, navigation, photo upload
└── README.md     — This documentation file
```

---

## 🔧 How It Works

### Dynamic Login Flow
```
User enters: Name + Email + Password
          ↓
Name & Email stored in currentUser object
          ↓
Greeting, topbar, and profile page all read from currentUser
          ↓
No hardcoded names — works for any agent who logs in
```

### Language Switch Flow
```
Click EN or FA button (login page or topbar)
          ↓
html[data-lang] attribute changes → CSS RTL rules activate
          ↓
All [data-en] / [data-fa] attributes update in the DOM
          ↓
Placeholders, nav labels, page titles, greetings all switch instantly
```

### Responsive Sidebar Flow (Mobile)
```
User taps ☰ hamburger → sidebar slides in from left (or right in RTL)
Dark overlay appears behind sidebar
User taps overlay or navigates → sidebar closes automatically
```

### Photo Upload Flow
```
Click "📷 Upload Photo" → file picker opens
Select image → FileReader reads as base64
          ↓
Profile avatar + topbar avatar both update simultaneously
"Remove Photo" button appears
Click Remove → reverts both avatars to default SVG
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure, semantic markup, data attributes for i18n |
| **CSS3** | Theming (CSS vars), RTL, animations, full responsive layout |
| **JavaScript (Vanilla)** | Auth, language switch, navigation, photo upload |
| **CSS Backdrop Filter** | Glass morphism panels |
| **CSS Grid + Flexbox** | Responsive layout at all breakpoints |
| **CSS Media Queries** | 4 responsive breakpoints (1024, 768, 480, 360px) |
| **FileReader API** | Client-side photo reading, no server needed |
| **CSS Animations** | Vibrate, shake, float, spin, fade-in |
| **GitHub Pages** | Free static hosting |

---

## 📐 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 1024px` | Full sidebar, 4-column stats, 2-column widgets |
| `≤ 1024px` | 2-column stats, single-column widgets |
| `≤ 768px` | Hidden sidebar (hamburger), mobile topbar |
| `≤ 480px` | 2-column stat cards, compact components |
| `≤ 360px` | Single column everything |

---

## 🚀 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/Ardi-ops-ops/my-dashboard.git
cd my-dashboard

# Open directly in browser (no server needed)
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## 📤 Deploy on GitHub Pages

1. Push files to GitHub
2. Go to **Settings → Pages**
3. Set Branch: `main`, Folder: `/ (root)` → **Save**
4. Live in ~2 minutes at:
```
https://ardi-ops-ops.github.io/my-dashboard/
```

---

## 📋 All Sections Summary

| Section | Icon | Content |
|---|---|---|
| Dashboard | 🏠 | Stats overview, recent tickets, performance bars |
| Live Chats | 💬 | Active conversations, chat stats |
| Tickets | 🎫 | Full ticket list with priority and status |
| Clients | 👥 | Client roster, VIP tier, follow-ups |
| Escalations | 🚨 | Escalated issues, assigned teams |
| Performance | 📈 | Monthly metrics and breakdowns |
| Knowledge Base | 🔍 | Support articles, view counts |
| Profile | 👤 | Agent info, career stats, photo upload |

---

## ✅ Full Feature Checklist

### Core (Homework)
- [x] Login page with email + password
- [x] Sign Up page
- [x] Dashboard with sidebar navigation
- [x] Role-specific widgets (Chat Support Agent)
- [x] Pushed to GitHub + deployed via GitHub Pages

### Bonus Features Added
- [x] **Dynamic login** — name from form, not hardcoded
- [x] **English / Persian bilingual** with full RTL support
- [x] **Dark / Light mode** toggle with smooth transitions
- [x] **Fully responsive** — desktop, tablet, mobile, small phones
- [x] **Hamburger menu** with animated sidebar for mobile
- [x] **Profile page** linked to topbar avatar
- [x] **Photo upload** — updates avatar everywhere
- [x] **Remove photo** option
- [x] **Hover vibration** on all interactive elements
- [x] **Click shake** animation on section change
- [x] **Glass morphism** design with floating orbs on login
- [x] **Scrollable tables** on mobile
- [x] **Touch-friendly** scrolling

---

## 💬 Reflection

> *"What surprised me most about working with the AI tool was how quickly it could understand my role and turn a description into real, working code — things that would have taken me days to build were ready in minutes, and it kept improving with every request."*

— Ardalan Varshowsaz, Chat Support Agent, Opofinance

---

## 📞 Contact

- **GitHub:** [github.com/Ardi-ops-ops](https://github.com/Ardi-ops-ops)
- **Email:** ardalan@opofinance.com
- **Company:** [Opofinance](https://opofinance.com)

---

<div align="center">

**Built with ❤️ using AI tools as part of the Opofinance Internal AI Training Program**

*Assigned by: Arash | Session 1*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)

</div>

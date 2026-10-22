# Trava Super Admin Console

Internal Operations & Governance Console for **Trava** (Smart Public Transit & Merchant Partner Ecosystem in Coimbatore).

---

## 🌟 Features Included

- **Dedicated Super Admin Access**: Secure administrative gateway restricted to core Trava operations team.
- **Commuter Management & Full CRUD**: Register new passengers, edit profiles, grant bonus reward points, and delete accounts.
- **Interactive Transit Ride History**: View verified commuter bus journeys across Coimbatore routes (Route 95, S2, 111, 20C) with bus numbers, stops, fares, distance, duration, and verification badges (AI Vision Ticket Check & Live GPS Contribution).
- **Merchant Partner Ecosystem & CRUD**: Onboard local merchants (Bakery, Restaurant, Supermarket, Fitness, Retail), update campaigns, and audit performance.
- **Live Transit Bus Telemetry**: Real-time fleet tracking across TNSTC Government and Private buses with crowd density override controls.
- **Promotional Vouchers**: Issue cashback vouchers to commuters and view immutable cashier counter redemption logs.

---

## 🚀 Deployment Options

### 1. Render (Web Service or Static Site)
- **Root Directory**: `.`
- **Build Command**: `npm install` (or leave blank if static)
- **Start Command**: `npm start` (or `node server.js`)

### 2. Static Hosting (GitHub Pages / Vercel / Netlify)
The console is fully self-contained in `index.html`. You can directly deploy it as a static site.

### 3. Running Locally
```bash
npm install
npm start
```
Then open: **`http://localhost:3000`** (or **`http://localhost:3000/admin`**).

---

## ⚙️ Connecting to Backend API

By default, the admin console connects to the backend on the same origin (or `http://localhost:5000/api/v1/admin` when running on a different local port).

If your backend is hosted separately on Render or another domain, you can specify your backend URL in either of two ways:
1. Append `?api=https://your-backend-domain.onrender.com/api/v1/admin` to the URL.
2. It will save automatically to local storage for future visits.

---

## 🔑 Default Credentials

- **Email**: `trava.admin@trava.org`
- **Password**: `TravaAdmin@2026`
- **1-Click Access**: Dedicated *Quick Team Access* button available on the sign-in screen.

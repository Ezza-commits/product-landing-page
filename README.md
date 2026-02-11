# Product Landing Page – Angular 18 (Standalone)

A modern, responsive product landing page built with **Angular 18 Standalone Components**.  
The application fetches **real-time data** from a public REST API and focuses on clean UI, UX, and modern Angular best practices.

---

## 🚀 Live Demo
👉 Add your deployed link here  
(example: https://product-landing.web.app)

---

## 📦 Features

- Angular 18 Standalone Components
- Real REST API integration (Fake Store API)
- Product listing with live data
- Category-based filtering
- Real-time product search
- Product detail modal
- Dark mode toggle
- Responsive & modern UI
- Loading & empty states handling

---

## 🛠 Tech Stack

- **Angular 18**
- Standalone Architecture (No NgModules)
- TypeScript
- REST API (HttpClient via `provideHttpClient`)
- CSS / SCSS
- Firebase / Netlify (for deployment)

---

## 🌐 API Used

- Fake Store API  
  https://fakestoreapi.com

Endpoints:
- `/products`
- `/products/categories`
- `/products/category/:category`

---

## 📂 Project Structure (Simplified)

src/app/
├── components/
│ ├── navbar/
│ ├── hero/
│ ├── product-list/
│ ├── product-modal/
│ └── footer/
├── services/
│ └── product.service.ts
├── app.component.ts
└── app.config.ts

---

## ⚙️ Setup Instructions

```bash
git clone <your-repo-link>
cd product-landing-page
npm install
ng serve

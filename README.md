# Bhairab Pathagar (Knowledge Sphere Library)
A modern, visual-first library cataloging and booking system designed with clean aesthetics and user interaction.

---

## 🌟 Key Features

* **Interactive Book Gallery:** Users can explore a rich collection of books across categories like Islamic, Academic, History, Programming, and more.
* **Smart Local Filtering:** Badges in the header display real-time counts for the user's Wishlist and Borrowed list. Clicking them dynamically filters the catalog grid.
* **Persistent Cart & Wishlist:** Fully integrated with local storage persistence and dynamic window event dispatching to sync counts instantly across components.
* **Detailed Book Overview:** View metadata, descriptions, real-time remaining copies, publisher specs, and trigger borrow/wishlist actions.
* **Offline API Fallback:** Utilizes an offline-first books loader that falls back gracefully to local JSON mock data if the Render backend API is offline or times out.
* **Under Construction Stubs:** Clean placeholder screens for under-development routes (like notifications, admin, login) instead of generic 404 pages.
* **Donor Leaderboard:** View top library patrons sorted by ranks, donation tier badges (Platinum, Gold, Silver, Bronze), and contributions.

---

## 🛠️ Tech Stack

* **Core:** React 19, Vite, Tailwind CSS (v4)
* **Components & Styling:** DaisyUI (v5), React Icons, Framer Motion
* **Routing:** React Router (v7)
* **Slider/Carousel:** Swiper

---

## 🚀 Local Setup Instructions

1. Go to the project directory:
   ```bash
   cd projects/knowledge-sphere-library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the Vite development server:
   ```bash
   npm run dev
   ```

4. Open the application:
   [http://localhost:5173](http://localhost:5173)

---

## 📂 Verification Commands

* **Run ESLint Checks:**
  ```bash
  npm run lint
  ```
* **Build Production Bundle:**
  ```bash
  npm run build
  ```

---

## 🌐 Live URL (Vercel)

The application is deployed and live at:
[https://knowledge-sphere-library.vercel.app](https://knowledge-sphere-library.vercel.app)

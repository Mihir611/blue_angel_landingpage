# Motonomaad — Vite + React + Tailwind CSS

A motorcycle community platform. Ride Free. Ride Far.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠 Build for Production

```bash
npm run build
npm run preview
```

## 📦 Tech Stack

- **Vite** — blazing fast dev server & bundler
- **React 18** — UI framework
- **Tailwind CSS v3** — utility-first styling
- **Lucide React** — icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── AppShell.jsx     # Header, footer, mobile nav
│   └── ui.jsx           # Shared UI components (Btn, Card, Badge, etc.)
├── pages/
│   ├── LandingPage.jsx  # Home / marketing page
│   ├── TripPlannerPage.jsx
│   ├── MechanicsPage.jsx
│   ├── CommunityPages.jsx  # Events, Groups, Social Feed
│   └── StaticPages.jsx     # About, Contact, Privacy
├── data.js              # Mock data
├── App.jsx              # Router + toast state
├── main.jsx             # Entry point
└── index.css            # Tailwind directives + custom CSS
```

## 🎨 Design

- **Dark theme** with deep blacks (#0d0d0d) and vibrant orange (#e8611a)
- **Black Ops One** font for headings
- **Bebas Neue** for display/stat numbers  
- **Space Grotesk** for body text
- Custom Tailwind theme extending colors, fonts, and keyframe animations

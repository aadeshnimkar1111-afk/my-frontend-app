# MDN Salesforce - Frontend

A real estate landing page built with React, following a component-based structure so each section (navbar, hero, footer, etc.) can be worked on independently.

## What's built so far

- **Navbar** - city selector, search bar, and a "Live Map" button that opens a map for the searched location (using OpenStreetMap)
- **Login / Register modal** - opens when clicking "Sign in"
- **Slide-in menu** - hamburger icon opens a side menu with Home/About/Contact links
- **Responsive layout** - works on mobile, tablet and desktop (tested from 320px up to full desktop width)

## Running it locally

```
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Building for production

```
npm run build
```

This creates a `dist` folder with the final HTML/CSS/JS files, ready to upload to any hosting.

## Folder structure

Each component lives in its own folder with its `.jsx` and `.css` file together:

```
src/components/
  Navbar/
  Hero/
  Footer/
  AuthModal/
  MapModal/
  LocationMap/
```

## Tech used

- React + Vite
- lucide-react (icons)
- OpenStreetMap / Nominatim for the map search (free, no API key needed)

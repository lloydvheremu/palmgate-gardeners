# Palmgate Gardeners - Page Structure & Architecture

Welcome to the **Palmgate Gardeners** application repository. This is a high-performance, responsive single-page web app (SPA) crafted with **React (TypeScript)**, **Vite**, and **Tailwind CSS**. It is fully customized for premium landscaping and garden maintenance services in Zimbabwe (centric to Mabvazuva Estate, Harare, and Mutare regions).

---

## 🗺️ Page Structure & Core Views

The application utilizes a persistent layout with a top navigation header (`Navbar`) and bottom details section (`Footer`), dynamically rendering core views based on the active tab state (`activeTab`).

The central architecture is modularly broken down into the following key components:

```
src/
├── App.tsx                    # Main Page Controller & Consultation Modal
├── types.ts                   # Core State & Plant Type Declarations
├── index.css                  # Tailwinds Styling Configuration
├── main.tsx                   # SPA Render Mount Point
└── components/                # Modular Page Views & Visual Modules
    ├── Navbar.tsx             # Responsive Top Header with Active States
    ├── Footer.tsx             # Bottom Details Section & Quick Links
    ├── Logo.tsx               # Reusable Branding Identity
    ├── HomeView.tsx           # Home Landing Page with Core CTA Actions
    ├── ServicesView.tsx       # Services Suite & Garden Cost Estimator
    ├── GalleryView.tsx        # Project Portfolio & Interactive Visualizer
    └── AboutView.tsx          # Team Story & Interactive Plant Finder / Recommendation Engine
```

---

## 📂 Detailed Component Directory

### 1. Main Page Controller (`src/App.tsx`)
*   **Routing Logic**: Controls the application state by routing visitors across views via a state-driven tab system (`activeTab === 'home' | 'services' | 'gallery' | 'about'`).
*   **Global Modal Window**: Handles the overlay trigger for the *Free Measurement & Intake* site booking. When submitted, is styled with responsive verification animations.
*   **Scroll Reset**: Features automatic visual scroll-to-top anchors upon user page navigation.

### 2. Header & Branding (`src/components/Navbar.tsx` & `src/components/Logo.tsx`)
*   **Navbar**: Persistent responsive navigation matching brand guidelines. Anchors deep navigation paths and includes a high-contrast action button to trigger free on-site inspections.
*   **Logo**: Minimalist, clean visual brand mark rendering the elegant botanical identity.

### 3. Home View (`src/components/HomeView.tsx`)
*   **Hero Section**: Visually striking display typography introducing Palmgate Gardeners' Zimbabwe lawn and layout services.
*   **Core Value Pillars**: Elegant grid displaying company values such as drought mitigation, pet-safe organic soil feeds, and custom winter layouts.
*   **Services Packages CTA**: Highlights high-end residential, periodic lawn maintenance, and irrigation layout options.
*   **Direct Whatsapp Integration**: Features a high-visibility, optimized CTA button: `"Contact us on WhatsApp for an inspection"` routing to a predefined service inquiry.

### 4. Services View & Cost Calculator (`src/components/ServicesView.tsx`)
*   **Custom Cost Estimator**: An interactive widget letting clients evaluate custom gardening packages.
    *   **Parameters**: Garden Size (*Small*, *Medium*, *Large*, or *Estate*), Service Add-ons (*Lawn Mowing*, *Weed Control*, *Pruning*, *Fertilizing*, *Irrigation*), and maintenance Frequency.
    *   **Dynamic Math**: Updates pricing live via efficient React hook recalculations.

### 5. Gallery & Portfolio (`src/components/GalleryView.tsx`)
*   **Project Filters**: Allows interactive filtering of project cards by type: *All Spaces*, *Home Gardens*, *Offices & Compounds*, or *Specialty Features*.
*   **Landscaping Showcase**: Elegant cards visualizing residential estate pathways, corporate hedges, and smart drip networks across Zimbabwe.

### 6. About View & Zimbabwean Plant Finder (`src/components/AboutView.tsx`)
*   **Company Narrative**: Underlines organic soil practices, water security, and localized climate wisdom.
*   **Interactive Plant Finder**: A climate-wise discovery database helping visitors select native African flora.
    *   **Controls**: Select Sun exposure (*Full Sun*, *Partial Shade*, *Deep Shade*), Soil consistency (*Sandy*, *Loamy*, *Clay*, *Rocky*), and garden Purpose (*Flowering*, *Privacy Hedge*, *Ground Cover*, etc.).
    *   **Live Suggestions**: Recommends adapted species like *Strelitzia Reginae* (Bird of Paradise), *Agapanthus Praecox* (African Lily), and *Bougainvillea Spectabilis* with precise care briefs.

---

## 🛠️ Performance & Build Infrastructure

*   **Type Safety**: Built with robust TypeScript interfaces (defined inside `src/types.ts`).
*   **Modern Icons**: Utilizes modern **Google Material Symbols** icons for all vector glyphs.
*   **Responsive Flow**: Mobile-responsive styling built with Tailwind utility grids.
*   **Clean Styling**: Single global CSS layout ensuring rapid browser asset execution.

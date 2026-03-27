# ✈️ Personal Portfolio – Javier Aguilera
### Senior Data Scientist | Specialized in Machine Learning, MLOps, and Airline Solutions

This is a premium, cinematic personal portfolio designed to showcase a career at the intersection of **Data Science** and the **Aviation Industry**. Built using **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, it leverages cutting-edge web design techniques to create a high-performance, narrative-driven experience.

---

## ✨ Cinematic Features & Design Philosophy

### 1. Apple-Style Hero (Video Scrubbing)
The landing page features a high-fidelity video loop controlled entirely by the user's scroll. 
- **The Tech**: Using a `useScroll` hook from Framer Motion, the scroll progress (`0` to `1`) is mapped to the `currentTime` of a native HTML5 video element.
- **Precision Loop**: The video is restricted to a specific high-impact window (**2.0s to 6.0s**) to ensure the most professional frame sequences are showcased.
- **Visual Stagger**: Headlines enter the frame with a staggered opacity and vertical translation, creating a "layers of glass" effect.

### 2. Horizontal Flight Log (Aviation Journey)
Rather than a traditional vertical list, the "Experience" section uses **Scroll Hijacking** to create a horizontal flight path.
- **The Journey**: As you scroll down, the viewport "locks" and the content slides horizontally, mimicking the movement of an aircraft across a timeline.
- **Visual Cues**: A dynamic radar-pattern background and a persistent plane icon (`FaPlane`) lead the viewer through career milestones at **Air Europa**, **Strategy Big Data**, and **Iberia (IAG Group)**.
- **Flight Metrics**: Integration of `AnimatedCounter` components that trigger on-view, showing "Flight Hours" (Years of Experience) and "Routes Launched" (Major Projects).

### 3. Revenue Management & MLOps Narrative
The content is tailored to reflect a deep expertise in **Revenue Management**, **Dynamic Pricing**, and **Machine Learning**. The design uses a technical, dark-mode aesthetic with emerald and blue accents, reminiscent of cockpit instruments and data consoles.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/) (Functional Components, Hooks)
- **Build Tool**: [Vite](https://vitejs.dev/) (Ultra-fast HMR and optimized builds)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first, responsive grids)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (Declarative `useScroll`, `useTransform`, and Layout animations)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome & Lucide integration)

---

## 📁 Project Structure

```bash
personal-web/
├── src/
│   ├── assets/          # Compressed cinematic MP4s and SVG aviation motifs
│   ├── components/      # Modular UI components:
│   │   ├── HeroScroll.jsx      # Video scrubbing & entry orchestration
│   │   ├── AviationJourney.jsx # Horizontal timeline engine
│   │   ├── NavbarFloating.jsx  # Glassmorphism navigation
│   │   └── Projects.jsx        # Responsive project grid
│   ├── data/            # Centralized JSON for clean content management
│   ├── hooks/           # Custom scroll-tracking and viewport listeners
│   └── App.jsx          # Main orchestrator using high-performance sticky layouts
```

---

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dirac89/personal-web.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Launch the development server**:
   ```bash
   npm run dev
   ```

4. **Production Build**:
   ```bash
   npm run build # Generates a highly optimized 'dist' folder
   ```

---

## ✉️ Contact & Collaboration

I am always open to discussing **Machine Learning** challenges, **Aviation Tech**, or **Data Architecture**.

- **LinkedIn**: [Javier Aguilera](https://www.linkedin.com/in/dirac89)
- **Portfolio**: [Let’s connect](#contact)

---

## 🪪 License

MIT — Copyright (c) 2026 Javier Aguilera.
Feel free to use this as a template for your own high-end portfolio.
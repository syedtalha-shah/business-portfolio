# Business Portfolio - Professional Interactive Portfolio

A modern, interactive business portfolio built with Vite and React, showcasing projects, services, team, and company information with cutting-edge interactive features.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Project Overview

### Description
A frontend-only business portfolio application designed to showcase your business, projects, services, and team in a professional and engaging manner. Built with modern web technologies and featuring numerous interactive elements to create a unique user experience.

### Objectives
- Showcase projects with interactive displays
- Present services and offerings professionally
- Highlight team members and founders
- Provide contact and engagement options
- Maintain professional design and user experience
- Ensure full responsive design
- Optimize for performance

### Key Highlights
- ✨ Fully interactive and animated
- 🎨 Modern, professional design
- 📱 Fully responsive
- ⚡ Optimized for performance
- ♿ Accessibility compliant
- 🌓 Dark/Light mode support

## ✨ Features

### Core Features
- **Interactive Hero Section** - Animated particle background, typewriter effects
- **Project Showcase** - Filterable portfolio with lightbox gallery
- **Services Section** - Interactive service cards with expandable details
- **Team Section** - Team member cards with hover effects
- **Founders Section** - Dedicated section for Founder and Co-Founder
- **Statistics** - Animated counters and interactive charts
- **Testimonials** - Auto-rotating carousel
- **Contact Forms** - Validated contact and newsletter forms
- **Company Timeline** - Interactive milestone visualization
- **Legal Pages** - Terms & Conditions, Privacy Policy, Cookie Policy

### Interactive Features
- Smooth scroll navigation
- Sticky/transparent navbar
- Dark/Light mode toggle
- Scroll-triggered animations
- Interactive cursor effects
- 3D transforms and effects
- Particle backgrounds
- Before/after sliders
- Interactive maps
- Form validation
- Lazy loading
- And much more!

### Excluded Features
- ❌ Awards showcase (3D trophy/certificate display)
- ❌ AR/VR previews
- ❌ Voice navigation
- ❌ Multi-language support

## 🛠 Technology Stack

### Core Framework
- **Vite** 5.x - Build tool and development server
- **React** 18.x - UI library
- **React Router** 6.x - Client-side routing

### Styling & UI
- **Tailwind CSS** 3.x - Utility-first CSS framework
- **Framer Motion** 11.x - Animation library
- **Lucide React** - Icon library

### Animations
- **GSAP** 3.x - Advanced animation library
- **AOS (Animate On Scroll)** 2.x - Scroll animations
- **React Spring** 9.x - Physics-based animations

### 3D & Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js

### Charts & Visualizations
- **Recharts** 2.x - Composable charting library
- **Chart.js** 4.x - Canvas-based charts
- **React-ChartJS-2** 5.x - React wrapper for Chart.js

### Forms & Validation
- **React Hook Form** 7.x - Form management
- **Zod** 3.x - Schema validation
- **EmailJS** - Email delivery service (contact form)

### Utilities
- **React Intersection Observer** 9.x - Viewport detection
- **React Lazy Load Image Component** 1.x - Image lazy loading
- **Swiper** 11.x - Touch slider/carousel

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Google Maps API key (for map functionality - see [Google Maps Setup Guide](./GOOGLE_MAPS_SETUP.md))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd business-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in the project root
   - Add your API keys (see `.env.example` or [Google Maps Setup Guide](./GOOGLE_MAPS_SETUP.md)):
     ```env
     VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
business-portfolio/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   ├── videos/            # Video assets
│   └── favicon.ico
├── src/
│   ├── components/        # React components
│   ├── pages/             # Page components
│   ├── data/              # Data files
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # Global styles
│   ├── context/           # React Context providers
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── docs/                  # Documentation files
├── package.json
├── vite.config.js
└── tailwind.config.js
```

For detailed structure, see [TECHNICAL_ARCHITECTURE.md](./docs/TECHNICAL_ARCHITECTURE.md)

## 📚 Documentation

Comprehensive documentation is available in the `docs/` directory. Start with the [Documentation Index](./docs/README.md) for an overview.

### Quick Links

- **[Documentation Index](./docs/README.md)** - Complete documentation overview and navigation
- **[Implementation Strategy](./docs/IMPLEMENTATION_STRATEGY.md)** - Development phases and approach (12-week plan)
- **[Technical Architecture](./docs/TECHNICAL_ARCHITECTURE.md)** - System architecture, structure, and technical decisions
- **[Component Documentation](./docs/COMPONENT_DOCUMENTATION.md)** - Complete component specifications and APIs
- **[Data Structure](./docs/DATA_STRUCTURE.md)** - All data models and structures with examples
- **[Feature Specifications](./docs/FEATURE_SPECIFICATIONS.md)** - Detailed specifications for all interactive features
- **[Development Workflow](./docs/DEVELOPMENT_WORKFLOW.md)** - Development guidelines, code style, and best practices
- **[Testing Strategy](./docs/TESTING_STRATEGY.md)** - Comprehensive testing approach and checklists
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - Complete deployment instructions for all hosting platforms
- **[Maintenance Guide](./docs/MAINTENANCE.md)** - Ongoing maintenance procedures and content updates
- **[Form Submission & EmailJS](./docs/FORM_SUBMISSION.md)** - EmailJS integration and form submission guide

## 💻 Development

### Development Guidelines

- Follow React best practices
- Use functional components with hooks
- Maintain component reusability
- Write clean, readable code
- Add comments for complex logic
- Follow the established folder structure

### Code Style

- **Components:** PascalCase (e.g., `ProjectCard.jsx`)
- **Functions:** camelCase (e.g., `handleClick`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)
- **Files:** Match component/function name

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter (if configured)

For detailed development guidelines, see [DEVELOPMENT_WORKFLOW.md](./docs/DEVELOPMENT_WORKFLOW.md)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

[Specify your license here]

## 📞 Contact

For questions or support, please contact:
- Email: [your-email@example.com]
- Website: [your-website.com]

---

**Built with ❤️ using Vite and React**


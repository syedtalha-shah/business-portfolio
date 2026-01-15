# Technical Architecture

This document describes the technical architecture, project structure, component hierarchy, and system design of the Business Portfolio application.

## Table of Contents

- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [Routing Structure](#routing-structure)
- [Styling Architecture](#styling-architecture)
- [Build Configuration](#build-configuration)

## Project Structure

### Complete Folder Structure

```
business-portfolio/
├── public/
│   ├── images/
│   │   ├── projects/          # Project images
│   │   ├── team/              # Team member photos
│   │   ├── founders/          # Founder photos
│   │   ├── company/           # Company logos, office photos
│   │   ├── clients/           # Client logos
│   │   ├── testimonials/      # Testimonial photos
│   │   └── common/            # Common images, icons
│   ├── videos/                # Project videos, demos
│   ├── fonts/                 # Custom fonts (if any)
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   │
│   │   ├── Hero/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ParticleBackground.jsx
│   │   │   ├── TypewriterEffect.jsx
│   │   │   └── InteractiveCursor.jsx
│   │   │
│   │   ├── Projects/
│   │   │   ├── ProjectShowcase.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── ProjectFilter.jsx
│   │   │   ├── LightboxGallery.jsx
│   │   │   ├── BeforeAfterSlider.jsx
│   │   │   └── TechStackBadges.jsx
│   │   │
│   │   ├── Services/
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── ProcessFlow.jsx
│   │   │   └── ServiceComparison.jsx
│   │   │
│   │   ├── Team/
│   │   │   ├── TeamSection.jsx
│   │   │   ├── TeamCard.jsx
│   │   │   └── SkillsVisualization.jsx
│   │   │
│   │   ├── Founders/
│   │   │   ├── FoundersSection.jsx
│   │   │   ├── FounderCard.jsx
│   │   │   └── FounderModal.jsx
│   │   │
│   │   ├── Statistics/
│   │   │   ├── StatsSection.jsx
│   │   │   ├── AnimatedCounter.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   └── InteractiveCharts.jsx
│   │   │
│   │   ├── Testimonials/
│   │   │   ├── TestimonialCarousel.jsx
│   │   │   └── TestimonialCard.jsx
│   │   │
│   │   ├── Contact/
│   │   │   ├── ContactSection.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── InteractiveMap.jsx
│   │   │   └── NewsletterForm.jsx
│   │   │
│   │   ├── Timeline/
│   │   │   └── CompanyTimeline.jsx
│   │   │
│   │   ├── Background/
│   │   │   ├── CanvasBackground.jsx
│   │   │   └── WebGLBackground.jsx
│   │   │
│   │   └── common/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Modal.jsx
│   │       ├── Loading.jsx
│   │       ├── Skeleton.jsx
│   │       ├── DarkModeToggle.jsx
│   │       └── ScrollProgress.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── TermsAndConditions.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── CookiePolicy.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   ├── services.js
│   │   ├── team.js
│   │   ├── founders.js
│   │   ├── testimonials.js
│   │   ├── statistics.js
│   │   ├── timeline.js
│   │   └── companyInfo.js
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   ├── useIntersectionObserver.js
│   │   ├── useDarkMode.js
│   │   ├── useSmoothScroll.js
│   │   ├── useWindowSize.js
│   │   └── useMediaQuery.js
│   │
│   ├── utils/
│   │   ├── animations.js
│   │   ├── helpers.js
│   │   ├── constants.js
│   │   └── validators.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── animations.css
│   │   └── themes.css
│   │
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── AnimationContext.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
│
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── LICENSE
```

## Component Architecture

### Component Hierarchy

```
App
├── ThemeProvider
│   └── ThemeContext
├── Router
│   ├── Layout
│   │   ├── Navbar
│   │   │   ├── Logo
│   │   │   ├── Navigation Links
│   │   │   ├── DarkModeToggle
│   │   │   └── MobileMenu
│   │   │
│   │   ├── Routes
│   │   │   ├── Home Page
│   │   │   │   ├── HeroSection
│   │   │   │   │   ├── ParticleBackground
│   │   │   │   │   ├── TypewriterEffect
│   │   │   │   │   └── InteractiveCursor
│   │   │   │   │
│   │   │   │   ├── ProjectShowcase
│   │   │   │   │   ├── ProjectFilter
│   │   │   │   │   ├── ProjectCard (multiple)
│   │   │   │   │   └── ProjectModal
│   │   │   │   │       ├── LightboxGallery
│   │   │   │   │       ├── BeforeAfterSlider
│   │   │   │   │       └── TechStackBadges
│   │   │   │   │
│   │   │   │   ├── ServicesSection
│   │   │   │   │   ├── ServiceCard (multiple)
│   │   │   │   │   └── ProcessFlow
│   │   │   │   │
│   │   │   │   ├── TeamSection
│   │   │   │   │   ├── TeamCard (multiple)
│   │   │   │   │   └── SkillsVisualization
│   │   │   │   │
│   │   │   │   ├── FoundersSection
│   │   │   │   │   ├── FounderCard (Founder)
│   │   │   │   │   ├── FounderCard (Co-Founder)
│   │   │   │   │   └── FounderModal
│   │   │   │   │
│   │   │   │   ├── StatsSection
│   │   │   │   │   ├── AnimatedCounter (multiple)
│   │   │   │   │   ├── ProgressBar (multiple)
│   │   │   │   │   └── InteractiveCharts
│   │   │   │   │
│   │   │   │   ├── TestimonialCarousel
│   │   │   │   │   └── TestimonialCard (multiple)
│   │   │   │   │
│   │   │   │   ├── CompanyTimeline
│   │   │   │   │   └── TimelineItem (multiple)
│   │   │   │   │
│   │   │   │   └── ContactSection
│   │   │   │       ├── ContactForm
│   │   │   │       ├── InteractiveMap
│   │   │   │       └── NewsletterForm
│   │   │   │
│   │   │   ├── TermsAndConditions
│   │   │   ├── PrivacyPolicy
│   │   │   └── CookiePolicy
│   │   │
│   │   └── Footer
│   │       ├── Company Info
│   │       ├── Quick Links
│   │       ├── Social Media
│   │       └── Legal Links
│   │
│   └── ScrollToTop
```

### Component Categories

#### 1. Layout Components
- **Purpose:** Structure and navigation
- **Location:** `src/components/Layout/`
- **Components:** Navbar, Footer, ScrollToTop

#### 2. Feature Components
- **Purpose:** Main content sections
- **Location:** `src/components/[FeatureName]/`
- **Components:** Hero, Projects, Services, Team, etc.

#### 3. Common Components
- **Purpose:** Reusable UI elements
- **Location:** `src/components/common/`
- **Components:** Button, Card, Modal, Loading, etc.

#### 4. Page Components
- **Purpose:** Full page views
- **Location:** `src/pages/`
- **Components:** Home, TermsAndConditions, PrivacyPolicy, CookiePolicy

## State Management

### State Management Strategy

The application uses a combination of state management approaches:

#### 1. Local State (useState)
**Use Cases:**
- Component-specific state
- Form inputs
- Modal open/close states
- UI interactions (hover, active states)
- Temporary calculations

**Example:**
```javascript
const [isModalOpen, setIsModalOpen] = useState(false);
const [activeFilter, setActiveFilter] = useState('all');
```

#### 2. Context API
**Use Cases:**
- Theme (dark/light mode)
- Animation preferences
- Global UI state
- User preferences

**Contexts:**
- `ThemeContext` - Theme management
- `AnimationContext` - Animation settings

**Example:**
```javascript
const { isDarkMode, toggleTheme } = useTheme();
```

#### 3. URL State (React Router)
**Use Cases:**
- Current page/route
- Query parameters for filtering
- Deep linking to sections
- Browser history

**Example:**
```javascript
const [searchParams, setSearchParams] = useSearchParams();
const filter = searchParams.get('filter') || 'all';
```

#### 4. Form State (React Hook Form)
**Use Cases:**
- Contact form
- Newsletter subscription
- Any form inputs

**Example:**
```javascript
const { register, handleSubmit, formState: { errors } } = useForm();
```

## Data Flow

### Data Flow Architecture

```
Data Files (src/data/)
    ↓
    Export static data
    ↓
Components (src/components/)
    ↓
    Import and use data
    ↓
Hooks (src/hooks/) - Process data if needed
    ↓
    Transform/format data
    ↓
UI Rendering
    ↓
    Display data
    ↓
User Interactions
    ↓
    User clicks, scrolls, types
    ↓
State Updates
    ↓
    useState, Context, Router
    ↓
Re-render
    ↓
    React updates UI
```

### Data Sources

1. **Static Data Files** (`src/data/`)
   - Projects data
   - Services data
   - Team data
   - Founders data
   - Testimonials
   - Statistics
   - Timeline
   - Company info

2. **User Input**
   - Form submissions
   - Filter selections
   - Search queries

3. **Browser State**
   - Scroll position
   - Window size
   - Theme preference (localStorage)

## Routing Structure

### Route Configuration

```javascript
Routes:
  / (Home)
    - Hero Section
    - Projects
    - Services
    - Team
    - Founders
    - Statistics
    - Testimonials
    - Timeline
    - Contact
  
  /terms (Terms and Conditions)
  
  /privacy (Privacy Policy)
  
  /cookies (Cookie Policy)
```

### Navigation Structure

**Main Navigation:**
- Home
- Projects
- Services
- Team
- About
- Contact

**Footer Navigation:**
- Quick Links (same as main nav)
- Legal Pages
- Social Media

**Deep Linking:**
- `/#projects` - Scroll to projects section
- `/#services` - Scroll to services section
- `/#contact` - Scroll to contact section

## Styling Architecture

### Styling Approach

#### 1. Tailwind CSS (Primary)
- Utility-first CSS framework
- Component-level styling
- Responsive design utilities
- Custom configuration

#### 2. CSS Modules (Optional)
- Component-specific styles
- Scoped styles
- Complex animations

#### 3. Global Styles
- CSS variables for theming
- Base styles
- Animation keyframes
- Utility classes

### Theme System

**CSS Variables:**
```css
:root {
  --color-primary: #...
  --color-secondary: #...
  --color-background: #...
  --color-text: #...
}

[data-theme="dark"] {
  --color-background: #...
  --color-text: #...
}
```

**Tailwind Config:**
- Custom colors
- Custom spacing
- Custom fonts
- Custom breakpoints

## Build Configuration

### Vite Configuration

**Key Settings:**
- React plugin
- Development server port: 3000
- Build output: `dist/`
- Source maps: enabled
- Optimizations: enabled

**Environment Variables:**
- `VITE_GOOGLE_MAPS_API_KEY` - Google Maps API key
- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID for contact form
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS email template ID
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key
- `VITE_ANALYTICS_ID` - Analytics tracking ID (optional)

### Build Process

1. **Development:**
   - Fast HMR (Hot Module Replacement)
   - Source maps
   - Unminified code

2. **Production:**
   - Minified code
   - Optimized assets
   - Tree shaking
   - Code splitting

### Optimization Strategies

1. **Code Splitting:**
   - Route-based splitting
   - Component lazy loading
   - Dynamic imports

2. **Asset Optimization:**
   - Image optimization
   - Font optimization
   - CSS minification
   - JavaScript minification

3. **Performance:**
   - Lazy loading
   - Prefetching
   - Compression
   - CDN (if applicable)

---

## Technology Decisions

### Why Vite?
- Fast development server
- Instant HMR
- Optimized production builds
- Modern tooling

### Why React?
- Component-based architecture
- Large ecosystem
- Performance
- Developer experience

### Why Tailwind CSS?
- Rapid development
- Consistent design
- Responsive utilities
- Customizable

### Why Context API?
- Simple state management
- No external dependencies
- Built into React
- Sufficient for this project

---

## Security Considerations

1. **Input Validation:**
   - All form inputs validated
   - XSS prevention
   - Sanitization

2. **API Keys:**
   - Environment variables
   - Never commit keys
   - Client-side keys are public (use restrictions)

3. **Dependencies:**
   - Regular updates
   - Security audits
   - Trusted packages

---

## Performance Considerations

1. **Lazy Loading:**
   - Images
   - Components
   - Routes

2. **Code Splitting:**
   - Route-based
   - Component-based

3. **Optimization:**
   - Bundle size
   - Asset size
   - Runtime performance

---

For component-specific details, see [COMPONENT_DOCUMENTATION.md](./COMPONENT_DOCUMENTATION.md)


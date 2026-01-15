# Business Portfolio - Comprehensive Implementation Prompt

## Context & Documentation Base

You are implementing a **Business Portfolio** application - a frontend-only, professional, interactive portfolio built with **Vite + React**. This prompt references comprehensive documentation that should be used as the base context for all implementation decisions.

### Documentation Files (Base Context)

All implementation must follow these documentation files located in the `docs/` directory:

1. **IMPLEMENTATION_STRATEGY.md** - 11-phase development plan (12 weeks total)
2. **TECHNICAL_ARCHITECTURE.md** - Complete project structure, component hierarchy, state management
3. **COMPONENT_DOCUMENTATION.md** - Detailed specs for 40+ components with props, features, usage
4. **DATA_STRUCTURE.md** - All data models with complete examples and field descriptions
5. **FEATURE_SPECIFICATIONS.md** - Detailed feature specs with implementation details
6. **DEVELOPMENT_WORKFLOW.md** - Code style, naming conventions, Git workflow, best practices
7. **TESTING_STRATEGY.md** - Testing checklists and procedures
8. **DEPLOYMENT.md** - Deployment instructions for Vercel, Netlify, GitHub Pages, AWS
9. **MAINTENANCE.md** - Content update procedures and maintenance tasks

---

## Project Overview

### Technology Stack

**Core:**
- Vite 5.x (build tool)
- React 18.x (UI library)
- React Router 6.x (routing)

**Styling:**
- Tailwind CSS 3.x (utility-first CSS)
- Framer Motion 11.x (animations)
- Lucide React (icons)

**Animations:**
- GSAP 3.x (advanced animations)
- AOS 2.x (scroll animations)
- React Spring 9.x (physics-based)

**3D & Graphics:**
- Three.js
- @react-three/fiber
- @react-three/drei

**Charts:**
- Recharts 2.x
- Chart.js 4.x
- React-ChartJS-2 5.x

**Forms:**
- React Hook Form 7.x
- Zod 3.x (validation)

**Utilities:**
- React Intersection Observer 9.x
- React Lazy Load Image Component 1.x
- Swiper 11.x (carousels)

### Project Requirements

**Included Features:**
- ✅ All interactive features (except excluded ones)
- ✅ Terms and Conditions page
- ✅ Privacy Policy page
- ✅ Cookie Policy page
- ✅ Founder and Co-Founder section
- ✅ Frontend-only (dummy data that's realistic)
- ✅ All animations and interactions

**Excluded Features:**
- ❌ Awards showcase (3D trophy/certificate)
- ❌ AR/VR previews
- ❌ Voice navigation
- ❌ Multi-language support

---

## Implementation Guidelines

### 1. Follow the Implementation Strategy

**Phase-Based Development:**
- Implement in the exact order specified in `IMPLEMENTATION_STRATEGY.md`
- Complete all tasks for each phase before moving to the next
- Follow the 12-week timeline (11 phases)
- Ensure all deliverables are met for each phase

**Current Phase Tracking:**
- Always confirm which phase you're working on
- Complete all phase tasks before proceeding
- Mark deliverables as complete

### 2. Adhere to Technical Architecture

**Project Structure:**
- Follow the exact folder structure from `TECHNICAL_ARCHITECTURE.md`
- Place components in correct directories
- Maintain the component hierarchy
- Use the specified naming conventions

**State Management:**
- Use `useState` for local component state
- Use Context API for theme and global UI state
- Use React Router for URL state
- Use React Hook Form for form state

**Data Flow:**
- Data files in `src/data/` export static data
- Components import and use data
- Hooks process data if needed
- Follow the data flow architecture

### 3. Implement Components According to Documentation

**Component Specifications:**
- Follow exact props structure from `COMPONENT_DOCUMENTATION.md`
- Implement all features listed for each component
- Use the provided usage examples
- Follow component best practices

**Component Checklist (for each component):**
- [ ] Props match documentation
- [ ] All features implemented
- [ ] Styling with Tailwind CSS
- [ ] Animations added (if specified)
- [ ] Responsive design
- [ ] Accessibility features (ARIA, keyboard nav)
- [ ] Error handling
- [ ] Loading states

### 4. Use Correct Data Structures

**Data Models:**
- Follow exact structure from `DATA_STRUCTURE.md`
- Use provided examples as templates
- Include all required fields
- Maintain data consistency

**Data Files:**
- `src/data/projects.js` - Projects array
- `src/data/services.js` - Services array
- `src/data/team.js` - Team members array
- `src/data/founders.js` - Founders array (Founder + Co-Founder)
- `src/data/testimonials.js` - Testimonials array
- `src/data/statistics.js` - Statistics and charts
- `src/data/timeline.js` - Company timeline
- `src/data/companyInfo.js` - Company information

### 5. Implement Features Per Specifications

**Feature Implementation:**
- Follow `FEATURE_SPECIFICATIONS.md` for all features
- Implement exact behavior described
- Use specified libraries and approaches
- Meet performance requirements
- Ensure accessibility compliance

**Key Features to Implement:**
- Sticky navbar with scroll detection
- Smooth scroll navigation
- Dark/light mode toggle
- Particle background (Three.js)
- Typewriter effect
- Interactive cursor
- Project filtering system
- Lightbox gallery
- Before/after slider
- Animated counters
- Testimonial carousel
- Contact form with validation
- Interactive maps
- Company timeline
- And all other features from documentation

### 6. Follow Development Workflow

**Code Style:**
- Follow naming conventions from `DEVELOPMENT_WORKFLOW.md`
- Components: PascalCase (e.g., `ProjectCard.jsx`)
- Functions: camelCase (e.g., `handleClick`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)
- Use Prettier for formatting

**File Organization:**
- Follow the import order specified
- Group related code together
- One component per file
- Clear file structure

**Git Workflow:**
- Use feature branches (`feature/`, `fix/`, etc.)
- Follow commit message format: `type: description`
- Create PRs for review
- Follow the branch strategy

### 7. Testing Requirements

**Testing Approach:**
- Follow `TESTING_STRATEGY.md` for all testing
- Test each component as you build it
- Test all interactive features
- Test responsive design
- Test accessibility
- Test cross-browser compatibility

**Testing Checklist (for each feature):**
- [ ] Functionality works
- [ ] Responsive on all devices
- [ ] Works in major browsers
- [ ] Accessibility compliant
- [ ] Performance acceptable
- [ ] No console errors

### 8. Performance Optimization

**Performance Requirements:**
- Lighthouse score > 90
- First Contentful Paint < 1.8s
- Largest Contentful Paint < 2.5s
- Time to Interactive < 3.8s
- Cumulative Layout Shift < 0.1

**Optimization Strategies:**
- Lazy load images (Intersection Observer)
- Code split routes and heavy components
- Optimize images (WebP format)
- Minimize bundle size
- Use GPU-accelerated animations
- Implement lazy loading throughout

---

## Implementation Process

### Step-by-Step Implementation

#### Phase 1: Project Setup & Foundation

**Tasks:**
1. Initialize Vite project: `npm create vite@latest business-portfolio -- --template react`
2. Install all dependencies (see Technology Stack above)
3. Set up Tailwind CSS with custom config
4. Create complete folder structure from `TECHNICAL_ARCHITECTURE.md`
5. Set up React Router with routes:
   - `/` - Home page
   - `/terms` - Terms and Conditions
   - `/privacy` - Privacy Policy
   - `/cookies` - Cookie Policy
6. Create base Layout components:
   - `Navbar.jsx` (sticky, transparent on scroll)
   - `Footer.jsx` (with links)
   - `ScrollToTop.jsx` (smooth scroll button)
7. Set up environment variables structure
8. Create base styles (`globals.css`, `themes.css`)
9. Configure Vite build settings
10. Initialize Git repository

**Success Criteria:**
- Development server runs at `http://localhost:3000`
- All dependencies installed
- Folder structure matches documentation
- Base components render
- Routing works

#### Phase 2: Core Components & Layout

**Tasks:**
1. Create common components:
   - `Button.jsx` (primary, secondary, outline variants)
   - `Card.jsx` (with hover effects)
   - `Modal.jsx` (reusable modal system)
   - `Loading.jsx` (spinner)
   - `Skeleton.jsx` (loading placeholder)
   - `DarkModeToggle.jsx` (theme toggle)
   - `ScrollProgress.jsx` (scroll indicator)
2. Enhance Navbar:
   - Scroll detection
   - Mobile hamburger menu
   - Active link highlighting
   - Smooth scroll to sections
3. Enhance Footer:
   - Company info
   - Quick links
   - Social media links
   - Legal page links
4. Create custom hooks:
   - `useScrollAnimation.js`
   - `useIntersectionObserver.js`
   - `useDarkMode.js`
   - `useSmoothScroll.js`
   - `useWindowSize.js`
5. Create theme context (`ThemeContext.jsx`)
6. Set up animation utilities
7. Test all components

**Success Criteria:**
- All common components functional
- Layout responsive
- Animations smooth
- Hooks work correctly
- Theme switching works

#### Phase 3: Hero & Landing Sections

**Tasks:**
1. Create `HeroSection.jsx`:
   - Main hero content
   - CTA buttons
   - Scroll indicator
2. Create `ParticleBackground.jsx`:
   - Three.js particle system
   - 200 particles (configurable)
   - Mouse interaction
   - Performance optimized
3. Create `TypewriterEffect.jsx`:
   - Animated typing effect
   - Multiple texts loop
   - Customizable speed
4. Create `InteractiveCursor.jsx`:
   - Custom cursor follows mouse
   - Hover state changes
   - Disabled on mobile
5. Integrate all hero components
6. Add smooth scroll functionality
7. Test and optimize

**Success Criteria:**
- Hero section displays correctly
- Particle background animates smoothly (60fps)
- Typewriter effect works
- Interactive cursor works (desktop)
- All animations performant

#### Phase 4: Projects Showcase

**Tasks:**
1. Create project data structure in `src/data/projects.js`
2. Create `ProjectShowcase.jsx`:
   - Grid layout
   - Filter functionality
   - Search functionality
   - Lazy loading
3. Create `ProjectCard.jsx`:
   - Hover effects (3D transform)
   - Image lazy loading
   - Technology badges
   - Click handler
4. Create `ProjectFilter.jsx`:
   - Category buttons
   - Active state
   - Smooth transitions
5. Create `ProjectModal.jsx`:
   - Full project details
   - Image gallery
   - Video previews
   - Technology stack
   - Links
6. Create `LightboxGallery.jsx`:
   - Full-screen viewer
   - Navigation arrows
   - Keyboard navigation
   - Touch/swipe support
7. Create `BeforeAfterSlider.jsx`:
   - Interactive slider
   - Drag to reveal
   - Mobile touch support
8. Create `TechStackBadges.jsx`:
   - Technology icons
   - Hover effects
9. Test all project features

**Success Criteria:**
- All projects display
- Filtering works smoothly
- Modals open/close properly
- Lightbox gallery works
- Before/after slider works
- Images lazy load correctly

#### Phase 5: Services & Team Sections

**Tasks:**
1. Create services data in `src/data/services.js`
2. Create `ServicesSection.jsx`
3. Create `ServiceCard.jsx`:
   - Expandable details
   - Icon animations
   - Feature list
4. Create `ProcessFlow.jsx`:
   - Step-by-step visualization
   - Animated progress
5. Create team data in `src/data/team.js`
6. Create `TeamSection.jsx`
7. Create `TeamCard.jsx`:
   - Hover effects
   - Social links
   - Skills preview
8. Create `SkillsVisualization.jsx`:
   - Progress bars
   - Radar chart option
9. Create founders data in `src/data/founders.js`
10. Create `FoundersSection.jsx`
11. Create `FounderCard.jsx`:
    - Large photo
    - Bio section
    - Achievements
    - Social links
12. Create `FounderModal.jsx`:
    - Detailed biography
    - Career timeline
    - Education
13. Test all sections

**Success Criteria:**
- Services display correctly
- Team section works
- Founders section works
- All interactive elements work
- Responsive on all devices

#### Phase 6: Statistics & Testimonials

**Tasks:**
1. Create statistics data in `src/data/statistics.js`
2. Create `StatsSection.jsx`
3. Create `AnimatedCounter.jsx`:
   - Count up animation
   - Scroll-triggered
   - Customizable format
4. Create `ProgressBar.jsx`:
   - Animated fill
   - Percentage display
5. Create `InteractiveCharts.jsx`:
   - Multiple chart types
   - Interactive tooltips
   - Responsive
6. Create testimonials data in `src/data/testimonials.js`
7. Create `TestimonialCarousel.jsx`:
   - Auto-rotating
   - Manual navigation
   - Smooth transitions
8. Create `TestimonialCard.jsx`:
   - Quote display
   - Client info
   - Rating stars
9. Test all components

**Success Criteria:**
- Counters animate correctly
- Charts render properly
- Carousel rotates smoothly
- All animations trigger on scroll

#### Phase 7: Contact & Forms

**Tasks:**
1. Create `ContactSection.jsx`
2. Create `ContactForm.jsx`:
   - React Hook Form integration
   - Zod validation
   - Real-time validation
   - Animated inputs
   - Success/error messages
   - Fields: name, email, phone, subject, message
3. Create `InteractiveMap.jsx`:
   - Google Maps integration
   - Custom marker
   - Info window
4. Create `NewsletterForm.jsx`:
   - Email input
   - Validation
   - Success message
5. Add company contact info
6. Test all forms

**Success Criteria:**
- Forms validate correctly
- Maps load and display
- All form fields work
- Validation messages clear
- Forms accessible

#### Phase 8: Company Timeline & Advanced Features

**Tasks:**
1. Create timeline data in `src/data/timeline.js`
2. Create `CompanyTimeline.jsx`:
   - Vertical timeline
   - Interactive milestones
   - Expandable details
   - Scroll animations
3. Enhance dark/light mode:
   - Smooth transitions
   - Persist preference
   - Theme-aware components
4. Create interactive backgrounds:
   - Canvas animations
   - WebGL effects (optional)
5. Add micro-interactions:
   - Button hover effects
   - Card hover effects
   - Link hover effects
6. Add scroll-triggered animations (AOS)
7. Test all features

**Success Criteria:**
- Timeline displays correctly
- Theme switching smooth
- All interactions work
- Performance maintained
- Theme preference persists

#### Phase 9: Legal Pages

**Tasks:**
1. Create `TermsAndConditions.jsx` page
2. Create `PrivacyPolicy.jsx` page
3. Create `CookiePolicy.jsx` page
4. Add navigation to legal pages in footer
5. Style legal pages:
   - Readable typography
   - Clear sections
   - Table of contents (if needed)
6. Ensure mobile responsive
7. Test all pages

**Success Criteria:**
- All legal pages complete
- Content accurate
- Pages accessible
- Mobile responsive
- Links work correctly

#### Phase 10: Performance & Optimization

**Tasks:**
1. Optimize all images:
   - Convert to WebP
   - Compress images
   - Multiple sizes (srcset)
2. Implement lazy loading:
   - Images (Intersection Observer)
   - Components (React.lazy)
3. Code splitting:
   - Route-based
   - Component-based
   - Library-based
4. Optimize bundle:
   - Analyze with bundle visualizer
   - Remove unused code
   - Tree shaking
5. Add loading states:
   - Skeleton screens
   - Loading spinners
6. Performance testing:
   - Lighthouse audit
   - WebPageTest
   - Chrome DevTools
7. Optimize animations:
   - GPU acceleration
   - Throttle scroll events
   - Use will-change

**Success Criteria:**
- Lighthouse score > 90
- Images optimized
- Bundle size acceptable
- Lazy loading works
- Performance metrics met

#### Phase 11: Testing & Refinement

**Tasks:**
1. Functional testing:
   - All features work
   - Forms validate
   - Navigation works
   - Modals work
2. Responsive testing:
   - Mobile (320px-768px)
   - Tablet (768px-1024px)
   - Desktop (1024px+)
3. Cross-browser testing:
   - Chrome, Firefox, Safari, Edge
4. Accessibility testing:
   - Keyboard navigation
   - Screen reader
   - Color contrast
   - ARIA labels
5. Performance testing:
   - Load times
   - Animation performance
   - Bundle size
6. Bug fixing:
   - Fix all identified issues
   - Test fixes
7. Final polish:
   - Refine animations
   - Improve UX
   - Final code review

**Success Criteria:**
- All features work correctly
- No critical bugs
- Responsive on all devices
- Works in all browsers
- Meets accessibility standards
- Performance metrics met

---

## Code Implementation Standards

### Component Implementation Template

```javascript
// 1. Imports (grouped)
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

// 2. Constants
const ANIMATION_DURATION = 300;

// 3. Component
const ComponentName = ({ prop1, prop2 }) => {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Functions
  const handleClick = () => {
    // Logic
  };
  
  // 6. Effects
  useEffect(() => {
    // Effect logic
  }, []);
  
  // 7. Render
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ANIMATION_DURATION }}
      className="component-class"
    >
      {/* JSX */}
    </motion.div>
  );
};

// 8. Export
export default ComponentName;
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Use CSS variables for theming
- Use Framer Motion for animations
- Ensure responsive design (mobile-first)
- Maintain consistent spacing
- Use theme colors

### Data Usage Pattern

```javascript
// Import data
import { projects } from '../data/projects';
import { services } from '../data/services';

// Use in component
const Component = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Component logic
};
```

---

## Quality Assurance Checklist

### For Each Component
- [ ] Props match documentation
- [ ] All features implemented
- [ ] Styling with Tailwind
- [ ] Animations added (if specified)
- [ ] Responsive design
- [ ] Accessibility (ARIA, keyboard)
- [ ] Error handling
- [ ] Loading states
- [ ] Tested in isolation

### For Each Phase
- [ ] All tasks completed
- [ ] All deliverables met
- [ ] Code follows style guide
- [ ] Components tested
- [ ] Documentation updated
- [ ] No console errors
- [ ] Performance acceptable

### Before Moving to Next Phase
- [ ] All phase tasks complete
- [ ] All deliverables met
- [ ] Code reviewed
- [ ] Tests passing
- [ ] Documentation updated

---

## Important Reminders

1. **Always Reference Documentation:**
   - Check component specs before implementing
   - Verify data structure matches documentation
   - Follow feature specifications exactly
   - Use provided examples

2. **Follow the Phase Order:**
   - Don't skip phases
   - Complete all tasks in phase
   - Verify deliverables before proceeding

3. **Maintain Code Quality:**
   - Follow naming conventions
   - Write clean, readable code
   - Add comments for complex logic
   - Test thoroughly

4. **Performance First:**
   - Optimize from the start
   - Lazy load heavy components
   - Optimize images
   - Monitor bundle size

5. **Accessibility Always:**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation
   - Color contrast
   - Screen reader support

6. **Test Continuously:**
   - Test as you build
   - Test on multiple devices
   - Test in multiple browsers
   - Test accessibility

---

## Implementation Command Examples

**For Phase 1:**
```
Start implementing Phase 1: Project Setup & Foundation from IMPLEMENTATION_STRATEGY.md. 
Follow all tasks in order. Reference TECHNICAL_ARCHITECTURE.md for folder structure. 
Ensure all dependencies are installed and development server runs successfully.
```

**For Subsequent Phases:**
```
Continue with Phase [X]: [Phase Name] from IMPLEMENTATION_STRATEGY.md. 
Reference COMPONENT_DOCUMENTATION.md for component specs. 
Use DATA_STRUCTURE.md for data models. 
Follow FEATURE_SPECIFICATIONS.md for feature implementation.
Ensure all phase deliverables are met before proceeding.
```

**For Specific Components:**
```
Implement [ComponentName] component following COMPONENT_DOCUMENTATION.md specifications.
Use the exact props structure, implement all listed features, and ensure responsive design
and accessibility compliance. Reference DATA_STRUCTURE.md for any data requirements.
```

**For Feature Implementation:**
```
Implement [FeatureName] feature following FEATURE_SPECIFICATIONS.md. 
Use the specified libraries and approaches. Ensure performance requirements are met
and accessibility compliance. Test thoroughly before proceeding.
```

---

## Success Metrics

### Technical Metrics
- ✅ All features implemented per documentation
- ✅ Lighthouse score > 90
- ✅ No critical bugs
- ✅ Cross-browser compatible
- ✅ Mobile responsive
- ✅ Accessibility compliant

### Code Quality Metrics
- ✅ Follows code style guide
- ✅ Components match documentation
- ✅ Data structures match documentation
- ✅ Features match specifications
- ✅ Performance optimized

---

## Final Notes

- **Documentation is the source of truth** - Always refer to it
- **Implement phase by phase** - Don't skip ahead
- **Test as you go** - Don't wait until the end
- **Maintain quality** - Clean, performant, accessible code
- **Ask for clarification** - If documentation is unclear

**Ready to begin implementation! Start with Phase 1 and follow the documentation precisely.**


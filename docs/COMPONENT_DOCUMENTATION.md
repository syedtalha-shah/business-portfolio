# Component Documentation

Complete documentation for all components in the Business Portfolio application.

## Table of Contents

- [Layout Components](#layout-components)
- [Hero Components](#hero-components)
- [Project Components](#project-components)
- [Services Components](#services-components)
- [Team Components](#team-components)
- [Founders Components](#founders-components)
- [Statistics Components](#statistics-components)
- [Testimonial Components](#testimonial-components)
- [Contact Components](#contact-components)
- [Timeline Components](#timeline-components)
- [Common Components](#common-components)

## Layout Components

### Navbar Component

**Location:** `src/components/Layout/Navbar.jsx`

**Description:**
Main navigation bar with sticky behavior, mobile menu, and smooth scroll navigation.

**Props:**
```javascript
{
  isScrolled?: boolean;      // Whether page is scrolled
  isDarkMode?: boolean;      // Current theme mode
}
```

**Features:**
- ✅ Sticky navigation (transparent → solid on scroll)
- ✅ Mobile hamburger menu with animations
- ✅ Smooth scroll to sections
- ✅ Active link highlighting
- ✅ Logo with animation
- ✅ Dark mode toggle integration
- ✅ Responsive design

**State:**
```javascript
{
  isMenuOpen: boolean;       // Mobile menu state
  activeSection: string;     // Current active section
}
```

**Dependencies:**
- React Router (for navigation)
- Framer Motion (for animations)
- useScrollAnimation hook

**Usage:**
```javascript
<Navbar isScrolled={isScrolled} isDarkMode={isDarkMode} />
```

---

### Footer Component

**Location:** `src/components/Layout/Footer.jsx`

**Description:**
Footer with company information, links, and social media.

**Props:**
```javascript
// No props - uses data from companyInfo.js
```

**Features:**
- ✅ Company information display
- ✅ Social media links
- ✅ Quick links to sections
- ✅ Legal page links
- ✅ Copyright information
- ✅ Newsletter subscription (optional)
- ✅ Responsive grid layout

**Sections:**
1. Company Info
2. Quick Links
3. Social Media
4. Legal Links
5. Copyright

**Usage:**
```javascript
<Footer />
```

---

### ScrollToTop Component

**Location:** `src/components/Layout/ScrollToTop.jsx`

**Description:**
Button that appears on scroll and smoothly scrolls to top.

**Props:**
```javascript
{
  threshold?: number;        // Scroll threshold to show button (default: 400)
}
```

**Features:**
- ✅ Appears on scroll down
- ✅ Smooth scroll to top
- ✅ Fade in/out animation
- ✅ Fixed position button
- ✅ Icon animation

**Usage:**
```javascript
<ScrollToTop threshold={400} />
```

---

## Hero Components

### HeroSection Component

**Location:** `src/components/Hero/HeroSection.jsx`

**Description:**
Main hero section with animated content and background.

**Props:**
```javascript
{
  data: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
}
```

**Features:**
- ✅ Main hero content display
- ✅ Call-to-action buttons
- ✅ Scroll indicator
- ✅ Background integration
- ✅ Animated entrance
- ✅ Responsive layout

**Sub-components:**
- ParticleBackground
- TypewriterEffect
- InteractiveCursor

**Usage:**
```javascript
<HeroSection data={heroData} />
```

---

### ParticleBackground Component

**Location:** `src/components/Hero/ParticleBackground.jsx`

**Description:**
Three.js particle system for animated background.

**Props:**
```javascript
{
  particleCount?: number;    // Number of particles (default: 200)
  speed?: number;            // Particle speed (default: 0.5)
  color?: string;            // Particle color
}
```

**Features:**
- ✅ Three.js particle system
- ✅ Interactive particles (mouse interaction)
- ✅ Performance optimized
- ✅ Configurable particle count
- ✅ Smooth animations

**Configuration:**
- Particle count: 100-500 (recommended: 200)
- Particle speed: 0.1-1.0
- Color scheme: Theme-aware
- Interaction radius: 100px

**Usage:**
```javascript
<ParticleBackground 
  particleCount={200} 
  speed={0.5} 
  color="#ffffff" 
/>
```

---

### TypewriterEffect Component

**Location:** `src/components/Hero/TypewriterEffect.jsx`

**Description:**
Animated typewriter effect for text display.

**Props:**
```javascript
{
  texts: string[];           // Array of strings to type
  speed?: number;           // Typing speed in ms (default: 100)
  delay?: number;           // Delay between texts in ms (default: 2000)
  loop?: boolean;           // Loop through texts (default: true)
}
```

**Features:**
- ✅ Typewriter animation
- ✅ Cursor blinking
- ✅ Loop through multiple texts
- ✅ Customizable speed
- ✅ Smooth transitions

**Usage:**
```javascript
<TypewriterEffect 
  texts={["Welcome", "Innovation", "Excellence"]}
  speed={100}
  delay={2000}
  loop={true}
/>
```

---

### InteractiveCursor Component

**Location:** `src/components/Hero/InteractiveCursor.jsx`

**Description:**
Custom interactive cursor with hover effects.

**Props:**
```javascript
{
  enabled?: boolean;        // Enable/disable cursor (default: true)
  color?: string;           // Cursor color
  size?: number;            // Cursor size in px (default: 20)
}
```

**Features:**
- ✅ Custom cursor follows mouse
- ✅ Hover state changes
- ✅ Click animations
- ✅ Performance optimized (throttled)
- ✅ Disable on mobile

**Usage:**
```javascript
<InteractiveCursor 
  enabled={true}
  color="#ffffff"
  size={20}
/>
```

---

## Project Components

### ProjectShowcase Component

**Location:** `src/components/Projects/ProjectShowcase.jsx`

**Description:**
Main container for displaying projects with filtering.

**Props:**
```javascript
{
  projects: Project[];       // Array of project objects
}
```

**Features:**
- ✅ Grid layout of projects
- ✅ Filter functionality
- ✅ Search functionality
- ✅ Sort options
- ✅ Lazy loading
- ✅ Responsive grid

**State:**
```javascript
{
  filteredProjects: Project[];
  activeFilter: string;
  selectedProject: Project | null;
  searchQuery: string;
}
```

**Usage:**
```javascript
<ProjectShowcase projects={projectsData} />
```

---

### ProjectCard Component

**Location:** `src/components/Projects/ProjectCard.jsx`

**Description:**
Individual project card with hover effects.

**Props:**
```javascript
{
  project: Project;
  onClick: (project: Project) => void;
}
```

**Features:**
- ✅ Hover effects (3D transform)
- ✅ Image lazy loading
- ✅ Technology badges
- ✅ Project preview
- ✅ Smooth animations
- ✅ Click handler

**Animations:**
- Scale on hover (1.05x)
- Shadow elevation
- Image zoom effect
- Card tilt (3D)

**Usage:**
```javascript
<ProjectCard 
  project={projectData} 
  onClick={handleProjectClick} 
/>
```

---

### ProjectModal Component

**Location:** `src/components/Projects/ProjectModal.jsx`

**Description:**
Full-screen modal with complete project details.

**Props:**
```javascript
{
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}
```

**Features:**
- ✅ Full project details
- ✅ Image gallery integration
- ✅ Video previews
- ✅ Technology stack display
- ✅ Project links
- ✅ Before/after slider
- ✅ Case study content
- ✅ Keyboard navigation (ESC to close)

**Sections:**
1. Project Overview
2. Technologies Used
3. Key Features
4. Results/Achievements
5. Media Gallery
6. Links and Resources

**Usage:**
```javascript
<ProjectModal 
  project={selectedProject}
  isOpen={isModalOpen}
  onClose={handleCloseModal}
/>
```

---

### ProjectFilter Component

**Location:** `src/components/Projects/ProjectFilter.jsx`

**Description:**
Filter buttons for project categories.

**Props:**
```javascript
{
  categories: string[];      // Available categories
  onFilterChange: (category: string) => void;
  activeFilter: string;      // Current filter
}
```

**Features:**
- ✅ Category buttons
- ✅ Active state indication
- ✅ Smooth transitions
- ✅ Count badges
- ✅ "All" option

**Usage:**
```javascript
<ProjectFilter 
  categories={['Web', 'Mobile', 'E-commerce']}
  onFilterChange={handleFilterChange}
  activeFilter={currentFilter}
/>
```

---

### LightboxGallery Component

**Location:** `src/components/Projects/LightboxGallery.jsx`

**Description:**
Full-screen image gallery with navigation.

**Props:**
```javascript
{
  images: string[];          // Array of image URLs
  isOpen: boolean;
  initialIndex?: number;     // Starting image index
  onClose: () => void;
}
```

**Features:**
- ✅ Full-screen image viewer
- ✅ Navigation arrows (prev/next)
- ✅ Keyboard navigation (arrow keys, ESC)
- ✅ Image zoom
- ✅ Thumbnail navigation
- ✅ Image counter
- ✅ Touch/swipe support

**Usage:**
```javascript
<LightboxGallery 
  images={projectImages}
  isOpen={isGalleryOpen}
  initialIndex={0}
  onClose={handleCloseGallery}
/>
```

---

### BeforeAfterSlider Component

**Location:** `src/components/Projects/BeforeAfterSlider.jsx`

**Description:**
Interactive slider to compare before/after images.

**Props:**
```javascript
{
  beforeImage: string;       // Before image URL
  afterImage: string;        // After image URL
  orientation?: 'horizontal' | 'vertical';
}
```

**Features:**
- ✅ Interactive slider
- ✅ Drag to reveal
- ✅ Smooth transitions
- ✅ Labels for before/after
- ✅ Mobile touch support
- ✅ Click to set position

**Usage:**
```javascript
<BeforeAfterSlider 
  beforeImage="/images/before.jpg"
  afterImage="/images/after.jpg"
  orientation="horizontal"
/>
```

---

## Services Components

### ServicesSection Component

**Location:** `src/components/Services/ServicesSection.jsx`

**Description:**
Container for displaying all services.

**Props:**
```javascript
{
  services: Service[];       // Array of service objects
}
```

**Features:**
- ✅ Grid layout
- ✅ Service cards
- ✅ Hover effects
- ✅ Expandable details
- ✅ Responsive design

**Usage:**
```javascript
<ServicesSection services={servicesData} />
```

---

### ServiceCard Component

**Location:** `src/components/Services/ServiceCard.jsx`

**Description:**
Individual service card with expandable details.

**Props:**
```javascript
{
  service: Service;
  isExpanded?: boolean;
  onExpand: () => void;
}
```

**Features:**
- ✅ Icon animation
- ✅ Expandable content
- ✅ Service description
- ✅ Feature list
- ✅ Call-to-action
- ✅ Smooth expand/collapse

**Usage:**
```javascript
<ServiceCard 
  service={serviceData}
  isExpanded={expandedServices.includes(service.id)}
  onExpand={() => handleExpand(service.id)}
/>
```

---

### ProcessFlow Component

**Location:** `src/components/Services/ProcessFlow.jsx`

**Description:**
Step-by-step process visualization.

**Props:**
```javascript
{
  steps: ProcessStep[];      // Array of process steps
}
```

**Features:**
- ✅ Step-by-step visualization
- ✅ Animated progress
- ✅ Interactive steps
- ✅ Mobile responsive
- ✅ Timeline layout

**Usage:**
```javascript
<ProcessFlow steps={processSteps} />
```

---

## Team Components

### TeamSection Component

**Location:** `src/components/Team/TeamSection.jsx`

**Description:**
Container for displaying team members.

**Props:**
```javascript
{
  teamMembers: TeamMember[]; // Array of team member objects
}
```

**Features:**
- ✅ Grid layout
- ✅ Team member cards
- ✅ Filter by department (optional)
- ✅ Search functionality
- ✅ Responsive design

**Usage:**
```javascript
<TeamSection teamMembers={teamData} />
```

---

### TeamCard Component

**Location:** `src/components/Team/TeamCard.jsx`

**Description:**
Individual team member card.

**Props:**
```javascript
{
  member: TeamMember;
}
```

**Features:**
- ✅ Photo with hover effect
- ✅ Name and role
- ✅ Bio on hover
- ✅ Social media links
- ✅ Skills preview
- ✅ Card flip animation

**Animations:**
- Card flip on hover
- Image zoom
- Info reveal

**Usage:**
```javascript
<TeamCard member={teamMemberData} />
```

---

### SkillsVisualization Component

**Location:** `src/components/Team/SkillsVisualization.jsx`

**Description:**
Visual representation of skills (progress bars or radar chart).

**Props:**
```javascript
{
  skills: Skill[];           // Array of skill objects
  type?: 'progress' | 'radar';
}
```

**Features:**
- ✅ Progress bars
- ✅ Radar chart option
- ✅ Animated values
- ✅ Skill categories
- ✅ Customizable colors

**Usage:**
```javascript
<SkillsVisualization 
  skills={memberSkills}
  type="progress"
/>
```

---

## Founders Components

### FoundersSection Component

**Location:** `src/components/Founders/FoundersSection.jsx`

**Description:**
Container for displaying Founder and Co-Founder.

**Props:**
```javascript
{
  founders: Founder[];       // Array of founder objects
}
```

**Features:**
- ✅ Founder and Co-Founder display
- ✅ Prominent layout
- ✅ Detailed information
- ✅ Achievement highlights
- ✅ Responsive design

**Usage:**
```javascript
<FoundersSection founders={foundersData} />
```

---

### FounderCard Component

**Location:** `src/components/Founders/FounderCard.jsx`

**Description:**
Individual founder card with detailed information.

**Props:**
```javascript
{
  founder: Founder;
  isFounder: boolean;       // true for Founder, false for Co-Founder
}
```

**Features:**
- ✅ Large photo
- ✅ Name and role
- ✅ Bio section
- ✅ Achievements list
- ✅ Social media links
- ✅ Expertise areas
- ✅ Interactive modal for details

**Usage:**
```javascript
<FounderCard 
  founder={founderData}
  isFounder={true}
/>
```

---

### FounderModal Component

**Location:** `src/components/Founders/FounderModal.jsx`

**Description:**
Modal with complete founder biography and details.

**Props:**
```javascript
{
  founder: Founder;
  isOpen: boolean;
  onClose: () => void;
}
```

**Features:**
- ✅ Detailed biography
- ✅ Career timeline
- ✅ Achievements
- ✅ Education
- ✅ Social links
- ✅ Contact information

**Usage:**
```javascript
<FounderModal 
  founder={founderData}
  isOpen={isModalOpen}
  onClose={handleClose}
/>
```

---

## Statistics Components

### StatsSection Component

**Location:** `src/components/Statistics/StatsSection.jsx`

**Description:**
Container for displaying statistics.

**Props:**
```javascript
{
  statistics: Statistic[];   // Array of statistic objects
}
```

**Features:**
- ✅ Grid layout
- ✅ Animated counters
- ✅ Progress bars
- ✅ Charts integration
- ✅ Responsive design

**Usage:**
```javascript
<StatsSection statistics={statsData} />
```

---

### AnimatedCounter Component

**Location:** `src/components/Statistics/AnimatedCounter.jsx`

**Description:**
Counter that animates from 0 to target value.

**Props:**
```javascript
{
  endValue: number;         // Target number
  duration?: number;        // Animation duration in ms (default: 2000)
  prefix?: string;          // Prefix text (e.g., "$")
  suffix?: string;          // Suffix text (e.g., "+")
  decimals?: number;        // Decimal places (default: 0)
}
```

**Features:**
- ✅ Count up animation
- ✅ Trigger on scroll into view
- ✅ Smooth animation
- ✅ Customizable format
- ✅ Performance optimized

**Usage:**
```javascript
<AnimatedCounter 
  endValue={150}
  prefix=""
  suffix="+"
  duration={2000}
/>
```

---

### ProgressBar Component

**Location:** `src/components/Statistics/ProgressBar.jsx`

**Description:**
Animated progress bar.

**Props:**
```javascript
{
  percentage: number;       // Progress percentage (0-100)
  label: string;           // Progress label
  color?: string;          // Bar color
  animated?: boolean;      // Enable animation (default: true)
}
```

**Features:**
- ✅ Animated fill
- ✅ Percentage display
- ✅ Custom colors
- ✅ Smooth transitions
- ✅ Scroll-triggered

**Usage:**
```javascript
<ProgressBar 
  percentage={85}
  label="Customer Satisfaction"
  color="#3b82f6"
  animated={true}
/>
```

---

### InteractiveCharts Component

**Location:** `src/components/Statistics/InteractiveCharts.jsx`

**Description:**
Interactive charts using Chart.js or Recharts.

**Props:**
```javascript
{
  data: ChartData;          // Chart data object
  type: 'line' | 'bar' | 'pie' | 'radar';
  config?: ChartConfig;     // Chart configuration
}
```

**Features:**
- ✅ Multiple chart types
- ✅ Interactive tooltips
- ✅ Responsive design
- ✅ Customizable styling
- ✅ Animation on load

**Usage:**
```javascript
<InteractiveCharts 
  data={chartData}
  type="line"
  config={chartConfig}
/>
```

---

## Testimonial Components

### TestimonialCarousel Component

**Location:** `src/components/Testimonials/TestimonialCarousel.jsx`

**Description:**
Auto-rotating carousel for testimonials.

**Props:**
```javascript
{
  testimonials: Testimonial[];
  autoPlay?: boolean;       // Auto-rotate (default: true)
  interval?: number;        // Rotation interval in ms (default: 5000)
}
```

**Features:**
- ✅ Auto-rotating carousel
- ✅ Manual navigation
- ✅ Smooth transitions
- ✅ Client logos
- ✅ Rating display
- ✅ Touch/swipe support

**Usage:**
```javascript
<TestimonialCarousel 
  testimonials={testimonialsData}
  autoPlay={true}
  interval={5000}
/>
```

---

### TestimonialCard Component

**Location:** `src/components/Testimonials/TestimonialCard.jsx`

**Description:**
Individual testimonial card.

**Props:**
```javascript
{
  testimonial: Testimonial;
}
```

**Features:**
- ✅ Quote display
- ✅ Client information
- ✅ Photo/logo
- ✅ Rating stars
- ✅ Company name
- ✅ Role/position

**Usage:**
```javascript
<TestimonialCard testimonial={testimonialData} />
```

---

## Contact Components

### ContactSection Component

**Location:** `src/components/Contact/ContactSection.jsx`

**Description:**
Main contact section with form and information.

**Props:**
```javascript
{
  contactInfo: ContactInfo; // Contact information object
}
```

**Features:**
- ✅ Contact form
- ✅ Company information
- ✅ Interactive map
- ✅ Social media links
- ✅ Office address
- ✅ Contact methods

**Usage:**
```javascript
<ContactSection contactInfo={contactData} />
```

---

### ContactForm Component

**Location:** `src/components/Contact/ContactForm.jsx`

**Description:**
Validated contact form with EmailJS integration for email delivery.

**Props:**
```javascript
{
  onSubmit?: (data: FormData) => void; // Optional callback after successful submission
}
```

**Features:**
- ✅ Form validation (Zod)
- ✅ Real-time validation
- ✅ Animated inputs
- ✅ Success/error messages
- ✅ Loading state
- ✅ EmailJS integration for email delivery
- ✅ No backend required

**Fields:**
- Name (required, 2-50 characters)
- Email (required, validated format)
- Phone (optional, validated format)
- Subject (required, 5-100 characters)
- Message (required, 10-1000 characters)

**EmailJS Integration:**
- Uses EmailJS to send emails directly from frontend
- Environment variables required:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
- Template variables sent: `from_name`, `from_email`, `subject`, `message`, `phone`
- See [FORM_SUBMISSION.md](./FORM_SUBMISSION.md) for setup details

**Usage:**
```javascript
<ContactForm onSubmit={handleFormSubmit} />
```

---

### InteractiveMap Component

**Location:** `src/components/Contact/InteractiveMap.jsx`

**Description:**
Google Maps integration with custom marker.

**Props:**
```javascript
{
  location: {
    lat: number;
    lng: number;
  };
  marker?: {
    title: string;
    description: string;
  };
}
```

**Features:**
- ✅ Google Maps integration
- ✅ Custom marker
- ✅ Info window
- ✅ Zoom controls
- ✅ Street view link

**Usage:**
```javascript
<InteractiveMap 
  location={{ lat: 40.7128, lng: -74.0060 }}
  marker={{
    title: "Our Office",
    description: "Visit us here!"
  }}
/>
```

---

### NewsletterForm Component

**Location:** `src/components/Contact/NewsletterForm.jsx`

**Description:**
Newsletter subscription form.

**Props:**
```javascript
{
  onSubscribe: (email: string) => void;
}
```

**Features:**
- ✅ Email input
- ✅ Validation
- ✅ Success message
- ✅ Loading state
- ✅ Privacy notice

**Usage:**
```javascript
<NewsletterForm onSubscribe={handleSubscribe} />
```

---

## Timeline Components

### CompanyTimeline Component

**Location:** `src/components/Timeline/CompanyTimeline.jsx`

**Description:**
Interactive timeline of company milestones.

**Props:**
```javascript
{
  milestones: Milestone[];   // Array of milestone objects
}
```

**Features:**
- ✅ Vertical timeline
- ✅ Interactive milestones
- ✅ Expandable details
- ✅ Scroll animations
- ✅ Year markers
- ✅ Event icons

**Layout:**
- Alternating left/right layout
- Vertical line connector
- Milestone markers
- Date labels

**Usage:**
```javascript
<CompanyTimeline milestones={timelineData} />
```

---

## Common Components

### Button Component

**Location:** `src/components/common/Button.jsx`

**Description:**
Reusable button component with multiple variants.

**Props:**
```javascript
{
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
```

**Features:**
- ✅ Multiple variants
- ✅ Size options
- ✅ Hover effects
- ✅ Loading state
- ✅ Disabled state
- ✅ Icon support

**Usage:**
```javascript
<Button 
  variant="primary"
  size="md"
  onClick={handleClick}
  loading={isLoading}
>
  Click Me
</Button>
```

---

### Card Component

**Location:** `src/components/common/Card.jsx`

**Description:**
Reusable card container.

**Props:**
```javascript
{
  children: ReactNode;
  hover?: boolean;          // Enable hover effects
  elevated?: boolean;       // Add shadow
  className?: string;      // Additional classes
}
```

**Features:**
- ✅ Flexible content
- ✅ Hover effects
- ✅ Shadow options
- ✅ Responsive padding

**Usage:**
```javascript
<Card hover elevated>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

---

### Modal Component

**Location:** `src/components/common/Modal.jsx`

**Description:**
Reusable modal component.

**Props:**
```javascript
{
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
```

**Features:**
- ✅ Backdrop overlay
- ✅ Close button
- ✅ Escape key to close
- ✅ Click outside to close
- ✅ Smooth animations
- ✅ Scrollable content

**Usage:**
```javascript
<Modal 
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
  size="lg"
>
  <p>Modal content</p>
</Modal>
```

---

### Loading Component

**Location:** `src/components/common/Loading.jsx`

**Description:**
Loading spinner component.

**Props:**
```javascript
{
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;    // Full screen overlay
}
```

**Features:**
- ✅ Spinner animation
- ✅ Multiple sizes
- ✅ Full screen option
- ✅ Customizable colors

**Usage:**
```javascript
<Loading size="md" fullScreen={false} />
```

---

### Skeleton Component

**Location:** `src/components/common/Skeleton.jsx`

**Description:**
Loading placeholder skeleton.

**Props:**
```javascript
{
  width?: string;          // Width (e.g., "100%", "200px")
  height?: string;         // Height
  rounded?: boolean;       // Rounded corners
  count?: number;          // Number of skeletons
}
```

**Features:**
- ✅ Loading placeholder
- ✅ Shimmer animation
- ✅ Customizable dimensions
- ✅ Multiple instances

**Usage:**
```javascript
<Skeleton 
  width="100%"
  height="200px"
  rounded={true}
/>
```

---

### DarkModeToggle Component

**Location:** `src/components/common/DarkModeToggle.jsx`

**Description:**
Toggle button for dark/light mode.

**Props:**
```javascript
{
  isDarkMode: boolean;
  onToggle: () => void;
}
```

**Features:**
- ✅ Toggle button
- ✅ Icon animation
- ✅ Smooth transition
- ✅ Persist preference

**Usage:**
```javascript
<DarkModeToggle 
  isDarkMode={isDarkMode}
  onToggle={toggleTheme}
/>
```

---

### ScrollProgress Component

**Location:** `src/components/common/ScrollProgress.jsx`

**Description:**
Scroll progress indicator at top of page.

**Props:**
```javascript
{
  color?: string;          // Progress bar color
  height?: string;         // Bar height (default: "4px")
}
```

**Features:**
- ✅ Scroll progress indicator
- ✅ Top of page
- ✅ Animated fill
- ✅ Customizable styling

**Usage:**
```javascript
<ScrollProgress color="#3b82f6" height="4px" />
```

---

## Component Best Practices

### 1. Props Validation
- Use TypeScript or PropTypes
- Document all props
- Provide default values where appropriate

### 2. Performance
- Use React.memo for expensive components
- Lazy load heavy components
- Optimize re-renders

### 3. Accessibility
- Use semantic HTML
- Add ARIA labels
- Ensure keyboard navigation
- Maintain color contrast

### 4. Styling
- Use Tailwind CSS classes
- Keep styles scoped to component
- Use CSS variables for theming

### 5. Testing
- Test component in isolation
- Test all props variations
- Test user interactions
- Test responsive behavior

---

For data structure details, see [DATA_STRUCTURE.md](./DATA_STRUCTURE.md)


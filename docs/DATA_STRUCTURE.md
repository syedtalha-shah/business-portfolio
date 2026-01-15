# Data Structure Documentation

Complete documentation for all data structures used in the Business Portfolio application.

## Table of Contents

- [Projects Data](#projects-data)
- [Services Data](#services-data)
- [Team Data](#team-data)
- [Founders Data](#founders-data)
- [Testimonials Data](#testimonials-data)
- [Statistics Data](#statistics-data)
- [Timeline Data](#timeline-data)
- [Company Info Data](#company-info-data)

## Projects Data

**File:** `src/data/projects.js`

### Structure

```javascript
export const projects = [
  {
    // Unique identifier
    id: 1,
    
    // URL-friendly identifier
    slug: "project-name",
    
    // Project title
    title: "Project Name",
    
    // Categories for filtering
    category: ["Web Development", "E-commerce"],
    
    // Brief description (for cards)
    description: "Brief project description that appears on cards",
    
    // Full detailed description
    fullDescription: "Detailed project description with all information about the project, challenges, solutions, and outcomes...",
    
    // Technologies used
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    
    // Project images
    images: [
      "/images/projects/project1-1.jpg",
      "/images/projects/project1-2.jpg",
      "/images/projects/project1-3.jpg"
    ],
    
    // Project videos (optional)
    videos: [
      {
        url: "/videos/project1-demo.mp4",
        thumbnail: "/images/projects/project1-video-thumb.jpg",
        type: "demo" // "demo", "walkthrough", "testimonial"
      }
    ],
    
    // Before/after comparison (optional)
    beforeAfter: {
      before: "/images/projects/project1-before.jpg",
      after: "/images/projects/project1-after.jpg",
      enabled: true
    },
    
    // Client information
    client: {
      name: "Client Name",
      logo: "/images/clients/client1-logo.png",
      industry: "Technology",
      website: "https://client-website.com"
    },
    
    // Project metadata
    year: "2024",
    duration: "6 months",
    status: "completed", // "completed", "ongoing", "planned"
    
    // Project links
    links: {
      live: "https://project-url.com",
      github: "https://github.com/username/project",
      caseStudy: "/projects/project-name",
      demo: "https://demo.project-url.com"
    },
    
    // Featured project flag
    featured: true,
    
    // Results and achievements
    results: {
      metrics: [
        {
          label: "Traffic Increase",
          value: "300%",
          icon: "trending-up"
        },
        {
          label: "Conversion Rate",
          value: "25%",
          icon: "target"
        },
        {
          label: "User Satisfaction",
          value: "4.8/5",
          icon: "star"
        }
      ],
      achievements: [
        "Achievement 1 description",
        "Achievement 2 description",
        "Achievement 3 description"
      ]
    },
    
    // Case study details
    caseStudy: {
      challenge: "Detailed description of the challenge or problem that needed to be solved...",
      solution: "Detailed description of the solution approach and implementation...",
      process: [
        "Step 1: Discovery and research",
        "Step 2: Design and prototyping",
        "Step 3: Development and testing",
        "Step 4: Launch and optimization"
      ],
      impact: "Description of the impact and results achieved..."
    },
    
    // Team members involved (optional)
    team: [
      {
        name: "Team Member Name",
        role: "Lead Developer"
      }
    ]
  }
]
```

### Example

```javascript
export const projects = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    category: ["Web Development", "E-commerce"],
    description: "A full-featured e-commerce platform with advanced filtering and payment integration",
    fullDescription: "Developed a comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, and an intuitive user interface...",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg"
    ],
    videos: [
      {
        url: "/videos/ecommerce-demo.mp4",
        thumbnail: "/images/projects/ecommerce-video-thumb.jpg",
        type: "demo"
      }
    ],
    beforeAfter: {
      before: "/images/projects/ecommerce-before.jpg",
      after: "/images/projects/ecommerce-after.jpg",
      enabled: true
    },
    client: {
      name: "Retail Corp",
      logo: "/images/clients/retail-corp-logo.png",
      industry: "Retail",
      website: "https://retailcorp.com"
    },
    year: "2024",
    duration: "6 months",
    status: "completed",
    links: {
      live: "https://ecommerce-platform.com",
      github: "https://github.com/company/ecommerce-platform",
      caseStudy: "/projects/ecommerce-platform"
    },
    featured: true,
    results: {
      metrics: [
        { label: "Sales Increase", value: "250%", icon: "trending-up" },
        { label: "Conversion Rate", value: "18%", icon: "target" }
      ],
      achievements: [
        "Increased online sales by 250%",
        "Improved user experience score by 40%"
      ]
    },
    caseStudy: {
      challenge: "Client needed a modern e-commerce solution to replace their outdated system...",
      solution: "Built a scalable platform using React and Node.js...",
      process: [
        "Requirements gathering and analysis",
        "UI/UX design and prototyping",
        "Backend API development",
        "Frontend implementation",
        "Testing and optimization",
        "Launch and monitoring"
      ],
      impact: "Resulted in significant increase in sales and customer satisfaction..."
    }
  }
]
```

---

## Services Data

**File:** `src/data/services.js`

### Structure

```javascript
export const services = [
  {
    // Unique identifier
    id: 1,
    
    // Service title
    title: "Service Name",
    
    // Service icon (from icon library)
    icon: "code", // lucide-react icon name
    
    // Short description (for cards)
    shortDescription: "Brief service description",
    
    // Full detailed description
    fullDescription: "Detailed service description explaining what the service includes, benefits, and approach...",
    
    // Key features of the service
    features: [
      "Feature 1 description",
      "Feature 2 description",
      "Feature 3 description",
      "Feature 4 description"
    ],
    
    // Process steps
    process: [
      {
        step: 1,
        title: "Step Title",
        description: "Step description explaining what happens in this phase",
        icon: "step-icon" // icon name
      },
      {
        step: 2,
        title: "Step Title",
        description: "Step description",
        icon: "step-icon"
      }
    ],
    
    // Deliverables
    deliverables: [
      "Deliverable 1",
      "Deliverable 2",
      "Deliverable 3"
    ],
    
    // Pricing information (optional)
    pricing: {
      startingFrom: "$5,000",
      model: "project-based" // "project-based", "hourly", "retainer"
    },
    
    // Technologies typically used
    technologies: ["React", "Node.js", "MongoDB"],
    
    // Featured service flag
    featured: true,
    
    // Service category
    category: "Development", // "Development", "Design", "Consulting", etc.
    
    // Estimated timeline
    timeline: "4-8 weeks",
    
    // Service image (optional)
    image: "/images/services/service1.jpg"
  }
]
```

### Example

```javascript
export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: "code",
    shortDescription: "Custom web applications built with modern technologies",
    fullDescription: "We create responsive, scalable web applications using the latest technologies and best practices...",
    features: [
      "Responsive design for all devices",
      "SEO optimization",
      "Performance optimization",
      "Security best practices",
      "Ongoing support and maintenance"
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Understanding your requirements and goals",
        icon: "search"
      },
      {
        step: 2,
        title: "Design",
        description: "Creating wireframes and visual designs",
        icon: "palette"
      },
      {
        step: 3,
        title: "Development",
        description: "Building the application with clean, maintainable code",
        icon: "code"
      },
      {
        step: 4,
        title: "Testing & Launch",
        description: "Thorough testing and deployment",
        icon: "rocket"
      }
    ],
    deliverables: [
      "Fully functional web application",
      "Source code and documentation",
      "Deployment and hosting setup",
      "Training and support"
    ],
    pricing: {
      startingFrom: "$5,000",
      model: "project-based"
    },
    technologies: ["React", "Vue", "Node.js", "Python"],
    featured: true,
    category: "Development",
    timeline: "4-8 weeks"
  }
]
```

---

## Team Data

**File:** `src/data/team.js`

### Structure

```javascript
export const teamMembers = [
  {
    // Unique identifier
    id: 1,
    
    // Team member name
    name: "Team Member Name",
    
    // Job title/role
    role: "Job Title",
    
    // Department
    department: "Engineering", // "Engineering", "Design", "Marketing", "Sales", etc.
    
    // Bio/description
    bio: "Team member bio describing their background, expertise, and contributions...",
    
    // Profile photo
    image: "/images/team/member1.jpg",
    
    // Social media links
    socialLinks: {
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
      github: "https://github.com/username",
      email: "member@company.com",
      portfolio: "https://portfolio.com"
    },
    
    // Skills with proficiency levels (0-100)
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "MongoDB", level: 75 }
    ],
    
    // Areas of expertise
    expertise: ["Frontend Development", "UI/UX", "Performance Optimization"],
    
    // Join date
    joinDate: "2020-01-15",
    
    // Location
    location: "City, Country",
    
    // Education (optional)
    education: [
      {
        degree: "Bachelor of Science",
        field: "Computer Science",
        institution: "University Name",
        year: "2018"
      }
    ],
    
    // Fun facts (optional)
    funFacts: [
      "Loves open source contributions",
      "Coffee enthusiast"
    ]
  }
]
```

### Example

```javascript
export const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Frontend Developer",
    department: "Engineering",
    bio: "John is a passionate frontend developer with 5+ years of experience building modern web applications...",
    image: "/images/team/john-doe.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
      email: "john@company.com"
    },
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 }
    ],
    expertise: ["Frontend Development", "React", "Performance"],
    joinDate: "2020-01-15",
    location: "San Francisco, USA",
    education: [
      {
        degree: "BS",
        field: "Computer Science",
        institution: "MIT",
        year: "2018"
      }
    ]
  }
]
```

---

## Founders Data

**File:** `src/data/founders.js`

### Structure

```javascript
export const founders = [
  {
    // Unique identifier
    id: 1,
    
    // Founder name
    name: "Founder Name",
    
    // Role/title
    role: "Founder & CEO",
    
    // Is this the Founder (true) or Co-Founder (false)
    isFounder: true, // true for Founder, false for Co-Founder
    
    // Detailed biography
    bio: "Detailed founder biography describing their background, experience, vision, and journey...",
    
    // Profile photo
    image: "/images/founders/founder1.jpg",
    
    // Social media links
    socialLinks: {
      linkedin: "https://linkedin.com/in/founder",
      twitter: "https://twitter.com/founder",
      email: "founder@company.com",
      website: "https://founder-website.com"
    },
    
    // Achievements and milestones
    achievements: [
      {
        title: "Achievement Title",
        description: "Achievement description",
        year: "2023",
        icon: "award"
      },
      {
        title: "Another Achievement",
        description: "Description",
        year: "2022",
        icon: "trophy"
      }
    ],
    
    // Areas of expertise
    expertise: ["Business Strategy", "Technology", "Leadership"],
    
    // Education background
    education: [
      {
        degree: "Master of Business Administration",
        institution: "Harvard Business School",
        year: "2010",
        field: "Business Administration"
      },
      {
        degree: "Bachelor of Science",
        institution: "Stanford University",
        year: "2008",
        field: "Computer Science"
      }
    ],
    
    // Career history
    career: [
      {
        position: "CEO",
        company: "Current Company",
        period: "2020 - Present",
        description: "Leading the company vision and strategy..."
      },
      {
        position: "Senior Engineer",
        company: "Previous Company",
        period: "2015 - 2020",
        description: "Led development teams and technical initiatives..."
      }
    ],
    
    // Inspirational quote
    quote: "Innovation is the key to success in the digital age.",
    
    // Location
    location: "City, Country",
    
    // Fun facts (optional)
    funFacts: [
      "Started coding at age 12",
      "Passionate about mentoring"
    ]
  },
  {
    // Co-Founder structure (similar to Founder)
    id: 2,
    name: "Co-Founder Name",
    role: "Co-Founder & CTO",
    isFounder: false,
    // ... similar structure
  }
]
```

### Example

```javascript
export const founders = [
  {
    id: 1,
    name: "Jane Smith",
    role: "Founder & CEO",
    isFounder: true,
    bio: "Jane is a visionary leader with 15+ years of experience in technology and business...",
    image: "/images/founders/jane-smith.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      email: "jane@company.com"
    },
    achievements: [
      {
        title: "Forbes 30 Under 30",
        description: "Recognized for innovation in technology",
        year: "2023",
        icon: "award"
      }
    ],
    expertise: ["Business Strategy", "Technology", "Leadership"],
    education: [
      {
        degree: "MBA",
        institution: "Harvard Business School",
        year: "2010"
      }
    ],
    career: [
      {
        position: "CEO",
        company: "Current Company",
        period: "2020 - Present",
        description: "Founded and leading the company..."
      }
    ],
    quote: "Building the future, one innovation at a time.",
    location: "New York, USA"
  },
  {
    id: 2,
    name: "Bob Johnson",
    role: "Co-Founder & CTO",
    isFounder: false,
    bio: "Bob is a technical expert with deep expertise in software architecture...",
    image: "/images/founders/bob-johnson.jpg",
    // ... similar structure
  }
]
```

---

## Testimonials Data

**File:** `src/data/testimonials.js`

### Structure

```javascript
export const testimonials = [
  {
    // Unique identifier
    id: 1,
    
    // Testimonial quote
    quote: "Testimonial quote text from the client describing their experience, satisfaction, and results...",
    
    // Author information
    author: {
      name: "Client Name",
      role: "CEO",
      company: "Company Name",
      image: "/images/testimonials/client1.jpg",
      logo: "/images/clients/client1-logo.png"
    },
    
    // Rating (1-5 stars)
    rating: 5,
    
    // Related project (optional)
    project: "Project Name",
    
    // Testimonial date
    date: "2024-01-15",
    
    // Featured testimonial flag
    featured: true,
    
    // Video testimonial (optional)
    video: {
      url: "/videos/testimonial1.mp4",
      thumbnail: "/images/testimonials/testimonial1-thumb.jpg"
    }
  }
]
```

### Example

```javascript
export const testimonials = [
  {
    id: 1,
    quote: "Working with this team was an absolute pleasure. They delivered beyond our expectations and the results speak for themselves. Our online sales increased by 300%!",
    author: {
      name: "Sarah Williams",
      role: "CEO",
      company: "Retail Corp",
      image: "/images/testimonials/sarah-williams.jpg",
      logo: "/images/clients/retail-corp-logo.png"
    },
    rating: 5,
    project: "E-commerce Platform",
    date: "2024-01-15",
    featured: true
  }
]
```

---

## Statistics Data

**File:** `src/data/statistics.js`

### Structure

```javascript
export const statistics = [
  {
    // Unique identifier
    id: 1,
    
    // Statistic label
    label: "Projects Completed",
    
    // Numeric value
    value: 150,
    
    // Prefix (optional)
    prefix: "",
    
    // Suffix (optional)
    suffix: "+",
    
    // Icon name
    icon: "briefcase",
    
    // Description
    description: "Total projects delivered successfully"
  },
  {
    id: 2,
    label: "Happy Clients",
    value: 120,
    prefix: "",
    suffix: "+",
    icon: "users",
    description: "Satisfied clients worldwide"
  },
  {
    id: 3,
    label: "Years of Experience",
    value: 10,
    prefix: "",
    suffix: "+",
    icon: "calendar",
    description: "Years in business"
  },
  {
    id: 4,
    label: "Team Members",
    value: 25,
    prefix: "",
    suffix: "+",
    icon: "user-group",
    description: "Talented professionals"
  }
]

// Skill statistics
export const skillStats = [
  {
    category: "Frontend",
    percentage: 95,
    technologies: ["React", "Vue", "Angular", "Next.js"]
  },
  {
    category: "Backend",
    percentage: 90,
    technologies: ["Node.js", "Python", "Java", "Go"]
  },
  {
    category: "Mobile",
    percentage: 85,
    technologies: ["React Native", "Flutter", "Swift"]
  }
]

// Chart data
export const chartData = {
  revenue: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    data: [100000, 150000, 200000, 280000, 350000],
    type: "line",
    label: "Annual Revenue",
    color: "#3b82f6"
  },
  projects: {
    labels: ["Web", "Mobile", "E-commerce", "Enterprise"],
    data: [45, 30, 20, 15],
    type: "pie",
    label: "Projects by Type",
    colors: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]
  },
  growth: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    data: [120, 150, 180, 200],
    type: "bar",
    label: "Quarterly Growth",
    color: "#10b981"
  }
}
```

---

## Timeline Data

**File:** `src/data/timeline.js`

### Structure

```javascript
export const timeline = [
  {
    // Unique identifier
    id: 1,
    
    // Year
    year: "2020",
    
    // Month (optional)
    month: "January",
    
    // Event title
    title: "Company Founded",
    
    // Event description
    description: "Company was founded with a vision to revolutionize the industry...",
    
    // Event type
    type: "milestone", // "milestone", "achievement", "event", "award"
    
    // Icon name
    icon: "rocket",
    
    // Event image (optional)
    image: "/images/timeline/founding.jpg",
    
    // Featured milestone flag
    featured: true,
    
    // Additional details (optional)
    details: {
      location: "San Francisco, USA",
      attendees: 5,
      impact: "Launched the company journey"
    }
  },
  {
    id: 2,
    year: "2020",
    month: "June",
    title: "First Major Client",
    description: "Secured first major enterprise client, marking a significant milestone...",
    type: "achievement",
    icon: "trophy",
    featured: false
  },
  {
    id: 3,
    year: "2021",
    month: "March",
    title: "Team Expansion",
    description: "Grew team from 5 to 15 members...",
    type: "event",
    icon: "users",
    featured: false
  }
]
```

---

## Company Info Data

**File:** `src/data/companyInfo.js`

### Structure

```javascript
export const companyInfo = {
  // Company name
  name: "Company Name",
  
  // Tagline
  tagline: "Company tagline that describes the mission",
  
  // Company description
  description: "Detailed company description explaining what the company does, its mission, and values...",
  
  // Logo files
  logo: "/images/company/logo.png",
  logoDark: "/images/company/logo-dark.png",
  
  // Founded year
  founded: "2020",
  
  // Location information
  location: {
    address: "123 Business Street",
    city: "City",
    state: "State",
    country: "Country",
    zipCode: "12345",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  
  // Contact information
  contact: {
    email: "info@company.com",
    phone: "+1 (555) 123-4567",
    fax: "+1 (555) 123-4568"
  },
  
  // Social media links
  socialMedia: {
    linkedin: "https://linkedin.com/company/companyname",
    twitter: "https://twitter.com/companyname",
    facebook: "https://facebook.com/companyname",
    instagram: "https://instagram.com/companyname",
    github: "https://github.com/companyname",
    youtube: "https://youtube.com/companyname"
  },
  
  // Hero section data
  hero: {
    title: "Hero Title",
    subtitle: "Hero Subtitle",
    description: "Hero description text",
    cta: {
      primary: "Get Started",
      secondary: "Learn More"
    },
    background: "/images/hero/background.jpg"
  },
  
  // Mission statement
  mission: "Company mission statement describing the purpose and goals...",
  
  // Vision statement
  vision: "Company vision statement describing the future aspirations...",
  
  // Core values
  values: [
    "Value 1: Innovation",
    "Value 2: Excellence",
    "Value 3: Integrity",
    "Value 4: Collaboration"
  ],
  
  // Company size
  size: "25-50 employees",
  
  // Industries served
  industries: ["Technology", "Healthcare", "Finance", "E-commerce"],
  
  // Services overview
  servicesOverview: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Consulting"
  ]
}
```

---

## Data Best Practices

### 1. Consistency
- Use consistent naming conventions
- Maintain consistent data structure
- Use consistent date formats (YYYY-MM-DD)

### 2. Validation
- Validate data structure
- Ensure required fields are present
- Validate URLs and email addresses

### 3. Organization
- Group related data together
- Use descriptive field names
- Add comments for complex structures

### 4. Performance
- Keep data files manageable
- Use lazy loading for large datasets
- Optimize image paths

### 5. Maintenance
- Keep data up to date
- Version control data files
- Document data changes

---

For component usage with this data, see [COMPONENT_DOCUMENTATION.md](./COMPONENT_DOCUMENTATION.md)


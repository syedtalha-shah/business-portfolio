# Development Workflow

Complete guide for development practices, workflows, and best practices for the Business Portfolio project.

## Table of Contents

- [Setup Process](#setup-process)
- [Development Guidelines](#development-guidelines)
- [Code Style](#code-style)
- [Git Workflow](#git-workflow)
- [Component Development](#component-development)
- [Testing Practices](#testing-practices)
- [Code Review](#code-review)
- [Troubleshooting](#troubleshooting)

## Setup Process

### Initial Setup

#### 1. Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Git
- Code editor (VS Code recommended)

#### 2. Project Initialization

```bash
# Create Vite project
npm create vite@latest business-portfolio -- --template react

# Navigate to project
cd business-portfolio

# Install dependencies
npm install

# Install additional dependencies
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion gsap aos
npm install three @react-three/fiber @react-three/drei
npm install recharts chart.js react-chartjs-2
npm install react-hook-form zod
npm install react-intersection-observer
npm install swiper
npm install lucide-react
```

#### 3. Tailwind CSS Setup

```bash
# Initialize Tailwind
npx tailwindcss init -p
```

Update `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 4. Folder Structure

Create the complete folder structure as outlined in [TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md).

#### 5. Environment Variables

Create `.env` file:
```env
# Google Maps API
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here

# EmailJS Configuration (for Contact Form)
VITE_EMAILJS_SERVICE_ID=service_nhj5f1h
VITE_EMAILJS_TEMPLATE_ID=template_8y3amtv
VITE_EMAILJS_PUBLIC_KEY=ezVc8qd5coFj9XH1t

# Analytics (optional)
VITE_ANALYTICS_ID=your_analytics_id
```

**Note:** In Vite projects, environment variables must be prefixed with `VITE_` to be accessible in the client-side code. Access them using `import.meta.env.VITE_VARIABLE_NAME`.

#### 6. Start Development Server

```bash
npm run dev
```

Server will start at `http://localhost:3000`

---

## Development Guidelines

### General Principles

1. **Component-First Approach**
   - Build reusable components
   - Keep components small and focused
   - Single responsibility principle

2. **Mobile-First Design**
   - Design for mobile first
   - Progressive enhancement
   - Test on multiple devices

3. **Performance Awareness**
   - Optimize from the start
   - Lazy load when possible
   - Monitor bundle size

4. **Accessibility First**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation
   - Color contrast

5. **Code Quality**
   - Clean, readable code
   - Consistent naming
   - Comments for complex logic
   - DRY principle

### Development Environment

#### Recommended VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- React snippets
- GitLens
- Error Lens

#### VS Code Settings

Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## Code Style

### Naming Conventions

#### Components
- **Files:** PascalCase (e.g., `ProjectCard.jsx`)
- **Components:** PascalCase (e.g., `const ProjectCard = () => {}`)

#### Functions
- **Functions:** camelCase (e.g., `handleClick`, `formatDate`)
- **Event Handlers:** `handle` prefix (e.g., `handleSubmit`)
- **Boolean:** `is` or `has` prefix (e.g., `isOpen`, `hasError`)

#### Variables
- **Variables:** camelCase (e.g., `userName`, `projectList`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`, `API_URL`)
- **Arrays:** Plural nouns (e.g., `projects`, `users`)

#### CSS Classes
- **Tailwind:** Use Tailwind utility classes
- **Custom:** kebab-case (e.g., `custom-button`, `hero-section`)

### File Organization

#### Component File Structure
```javascript
// 1. Imports (grouped)
import React from 'react';
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
    <div>
      {/* JSX */}
    </div>
  );
};

// 8. Export
export default ComponentName;
```

#### Import Order
1. React and React-related
2. Third-party libraries
3. Internal components
4. Hooks
5. Utils/helpers
6. Styles
7. Types (if TypeScript)

### Code Formatting

#### Prettier Configuration

Create `.prettierrc`:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

#### ESLint Configuration

Create `.eslintrc.json`:
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "warn"
  }
}
```

---

## Git Workflow

### Branch Strategy

#### Main Branches
- **main:** Production-ready code
- **develop:** Development branch (integration branch)

#### Feature Branches
- **feature/:** New features (e.g., `feature/project-filtering`)
- **fix/:** Bug fixes (e.g., `fix/navbar-scroll`)
- **refactor/:** Code refactoring (e.g., `refactor/component-structure`)
- **docs/:** Documentation updates (e.g., `docs/api-documentation`)

### Commit Messages

#### Format
```
type: description

Optional longer description
```

#### Types
- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Code style changes (formatting)
- **refactor:** Code refactoring
- **test:** Adding tests
- **chore:** Maintenance tasks

#### Examples
```
feat: add project filtering functionality
fix: resolve navbar scroll detection issue
docs: update component documentation
style: format code with prettier
refactor: optimize image loading
test: add unit tests for utils
chore: update dependencies
```

### Workflow Steps

1. **Create Branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make Changes**
   - Write code
   - Test functionality
   - Update documentation if needed

3. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

4. **Push Branch**
   ```bash
   git push origin feature/new-feature
   ```

5. **Create Pull Request**
   - Create PR on GitHub/GitLab
   - Add description
   - Request review

6. **Review & Merge**
   - Address review comments
   - Merge to develop/main

---

## Component Development

### Component Creation Process

#### 1. Plan Component
- Define purpose
- List props needed
- Identify state requirements
- Plan interactions

#### 2. Create Component File
- Create file in appropriate folder
- Set up basic structure
- Add imports

#### 3. Implement Component
- Write component logic
- Add styling
- Implement interactions
- Add animations

#### 4. Test Component
- Test in isolation
- Test with props
- Test interactions
- Test responsive behavior

#### 5. Integrate
- Import in parent component
- Pass props
- Test integration
- Verify styling

#### 6. Document
- Add JSDoc comments
- Document props
- Add usage examples

### Component Checklist

- [ ] Component file created
- [ ] Props defined and typed
- [ ] State management implemented
- [ ] Styling added (Tailwind)
- [ ] Animations added (if needed)
- [ ] Responsive design tested
- [ ] Accessibility features added
- [ ] Error handling implemented
- [ ] Loading states handled
- [ ] Component tested
- [ ] Documentation added

---

## Testing Practices

### Manual Testing Checklist

#### Functionality
- [ ] All features work as expected
- [ ] Forms validate correctly
- [ ] Navigation works
- [ ] Links work
- [ ] Modals open/close
- [ ] Filters work
- [ ] Animations trigger

#### Responsive Design
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Large screens (1920px+)

#### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Performance
- [ ] Page loads quickly
- [ ] Images load efficiently
- [ ] Animations are smooth
- [ ] No console errors

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient
- [ ] Focus indicators visible

### Testing Tools

#### Browser DevTools
- Chrome DevTools
- Firefox DevTools
- Safari Web Inspector

#### Performance
- Lighthouse
- WebPageTest
- Chrome Performance tab

#### Accessibility
- Lighthouse accessibility audit
- WAVE browser extension
- axe DevTools

---

## Code Review

### Review Checklist

#### Code Quality
- [ ] Code is clean and readable
- [ ] Naming conventions followed
- [ ] No code duplication
- [ ] Comments added where needed
- [ ] Error handling implemented

#### Functionality
- [ ] Feature works as expected
- [ ] Edge cases handled
- [ ] No breaking changes
- [ ] Backward compatible

#### Performance
- [ ] No performance regressions
- [ ] Optimizations applied
- [ ] Bundle size acceptable
- [ ] Images optimized

#### Accessibility
- [ ] Accessibility standards met
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] ARIA labels added

#### Documentation
- [ ] Code is documented
- [ ] Props are documented
- [ ] README updated if needed
- [ ] Comments are clear

### Review Process

1. **Create PR**
   - Clear title and description
   - Link related issues
   - Add screenshots if UI changes

2. **Request Review**
   - Assign reviewers
   - Add labels
   - Set milestone

3. **Address Comments**
   - Respond to comments
   - Make requested changes
   - Update PR

4. **Approve & Merge**
   - Get approval
   - Merge to target branch
   - Delete feature branch

---

## Troubleshooting

### Common Issues

#### Build Errors

**Issue:** Module not found
**Solution:**
- Check import paths
- Verify package installation
- Clear node_modules and reinstall

**Issue:** Type errors
**Solution:**
- Check TypeScript configuration
- Verify type definitions
- Add type annotations

#### Runtime Errors

**Issue:** Component not rendering
**Solution:**
- Check console for errors
- Verify props are passed correctly
- Check component logic

**Issue:** Styling not applying
**Solution:**
- Check Tailwind configuration
- Verify class names
- Check CSS import order

#### Performance Issues

**Issue:** Slow page load
**Solution:**
- Check bundle size
- Optimize images
- Implement lazy loading
- Code split routes

**Issue:** Slow animations
**Solution:**
- Use GPU-accelerated properties
- Reduce animation complexity
- Throttle scroll events
- Use will-change property

### Debugging Tips

1. **Use Browser DevTools**
   - Console for errors
   - Network tab for requests
   - Performance tab for profiling

2. **React DevTools**
   - Inspect component tree
   - Check props and state
   - Profile component renders

3. **Console Logging**
   - Strategic console.logs
   - Use debugger statement
   - Remove before committing

4. **Error Boundaries**
   - Implement error boundaries
   - Catch and display errors
   - Log errors for debugging

---

## Best Practices Summary

### Do's ✅
- Write clean, readable code
- Follow naming conventions
- Add comments for complex logic
- Test thoroughly
- Optimize for performance
- Consider accessibility
- Document components
- Use version control properly

### Don'ts ❌
- Don't commit console.logs
- Don't ignore linting errors
- Don't skip testing
- Don't hardcode values
- Don't ignore accessibility
- Don't commit large files
- Don't break existing functionality
- Don't skip code review

---

For implementation details, see [IMPLEMENTATION_STRATEGY.md](./IMPLEMENTATION_STRATEGY.md)


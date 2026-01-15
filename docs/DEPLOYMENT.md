# Deployment Guide

Complete guide for deploying the Business Portfolio application to production.

## Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Build Process](#build-process)
- [Hosting Options](#hosting-options)
- [Deployment Steps](#deployment-steps)
- [Environment Configuration](#environment-configuration)
- [Post-Deployment](#post-deployment)
- [Troubleshooting](#troubleshooting)

## Pre-Deployment Checklist

### Code Quality
- [ ] All code reviewed and approved
- [ ] No console.logs or debug code
- [ ] No commented-out code
- [ ] Code follows style guidelines
- [ ] All TODOs addressed or documented

### Functionality
- [ ] All features tested and working
- [ ] Forms validate correctly
- [ ] Navigation works correctly
- [ ] All links work
- [ ] Modals open/close properly
- [ ] Filters work correctly
- [ ] Animations are smooth

### Performance
- [ ] Images optimized (WebP format)
- [ ] Bundle size optimized
- [ ] Code splitting implemented
- [ ] Lazy loading implemented
- [ ] Lighthouse score > 90
- [ ] No performance warnings

### Content
- [ ] All content proofread
- [ ] All images loaded
- [ ] All videos working
- [ ] Contact information correct
- [ ] Legal pages complete
- [ ] No placeholder content

### Testing
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Accessibility tested
- [ ] Performance tested
- [ ] Cross-browser tested
- [ ] Responsive design tested

### Configuration
- [ ] Environment variables set
- [ ] API keys configured
- [ ] Analytics configured (if applicable)
- [ ] Error tracking set up
- [ ] Domain configured (if applicable)

---

## Build Process

### Production Build

#### 1. Build Command
```bash
npm run build
```

This command:
- Compiles React code
- Optimizes assets
- Minifies JavaScript and CSS
- Generates production bundle in `dist/` folder

#### 2. Build Output
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── images/
└── ...
```

#### 3. Preview Build Locally
```bash
npm run preview
```

This serves the production build locally for testing.

### Build Optimization

#### Vite Configuration
Ensure `vite.config.js` is optimized:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable in production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'gsap', 'aos'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'chart-vendor': ['recharts', 'chart.js', 'react-chartjs-2']
        }
      }
    }
  }
})
```

### Build Verification

#### Check Bundle Size
```bash
# Analyze bundle
npm run build
# Check dist folder size
```

#### Verify Build
- [ ] Build completes without errors
- [ ] All assets generated
- [ ] Bundle size acceptable
- [ ] No missing files
- [ ] Preview works locally

---

## Hosting Options

### 1. Vercel (Recommended)

**Pros:**
- Automatic deployments from Git
- CDN included
- Easy setup
- Free tier available
- Excellent performance

**Cons:**
- Limited customization on free tier

#### Setup Steps

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**
   ```bash
   vercel
   ```

3. **Deploy via Dashboard**
   - Connect GitHub repository
   - Configure build settings
   - Deploy automatically

#### Configuration

Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

#### Environment Variables
- Set in Vercel dashboard
- Under Project Settings > Environment Variables

---

### 2. Netlify

**Pros:**
- Similar to Vercel
- Form handling built-in
- Free tier available
- Easy setup

**Cons:**
- Slightly slower than Vercel

#### Setup Steps

1. **Install Netlify CLI** (optional)
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy via CLI**
   ```bash
   netlify deploy --prod
   ```

3. **Deploy via Dashboard**
   - Connect Git repository
   - Configure build settings
   - Deploy

#### Configuration

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

**Pros:**
- Free hosting
- Simple setup
- Integrated with GitHub

**Cons:**
- No server-side features
- Requires GitHub Actions for auto-deploy

#### Setup Steps

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings
   - Enable GitHub Pages
   - Select gh-pages branch

---

### 4. AWS S3 + CloudFront

**Pros:**
- Highly scalable
- Global CDN
- Full control

**Cons:**
- More complex setup
- Requires AWS account

#### Setup Steps

1. **Create S3 Bucket**
   - Enable static website hosting
   - Set bucket policy

2. **Upload Build**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name
   ```

3. **Configure CloudFront**
   - Create distribution
   - Point to S3 bucket
   - Configure caching

---

## Deployment Steps

### General Deployment Process

#### 1. Prepare for Deployment
```bash
# Ensure you're on main branch
git checkout main

# Pull latest changes
git pull origin main

# Install dependencies
npm install
```

#### 2. Build for Production
```bash
# Run build
npm run build

# Verify build
npm run preview
```

#### 3. Test Production Build
- [ ] All pages load
- [ ] All features work
- [ ] Images load
- [ ] Forms work
- [ ] No console errors

#### 4. Deploy
Choose your hosting platform and follow their deployment steps.

#### 5. Verify Deployment
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Forms work (if backend integrated)
- [ ] Analytics tracking
- [ ] Performance acceptable

---

## Environment Configuration

### Environment Variables

Create `.env.production`:
```env
# Google Maps API
VITE_GOOGLE_MAPS_API_KEY=your_production_api_key

# EmailJS Configuration (for Contact Form)
VITE_EMAILJS_SERVICE_ID=service_nhj5f1h
VITE_EMAILJS_TEMPLATE_ID=template_8y3amtv
VITE_EMAILJS_PUBLIC_KEY=ezVc8qd5coFj9XH1t

# Analytics (optional)
VITE_ANALYTICS_ID=your_analytics_id
```

### API Keys

#### Google Maps API
1. Get API key from Google Cloud Console
2. Restrict to your domain
3. Enable required APIs
4. Set in environment variables

#### EmailJS (Contact Form)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Set in environment variables:
   - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `VITE_EMAILJS_TEMPLATE_ID`: Your email template ID
   - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

**EmailJS Setup:**
- Free tier: 200 emails/month
- No backend required
- Direct email delivery
- Template-based emails
- Spam protection included

#### Analytics (Optional)
1. Set up Google Analytics
2. Get tracking ID
3. Set in environment variables

### Security Considerations

- **Never commit API keys** to repository
- Use environment variables
- Restrict API keys to specific domains
- Use different keys for dev/prod
- Rotate keys regularly

---

## Post-Deployment

### Verification Checklist

#### Functionality
- [ ] Home page loads
- [ ] All sections display
- [ ] Navigation works
- [ ] Forms work
- [ ] Links work
- [ ] Modals work
- [ ] Filters work

#### Performance
- [ ] Page loads quickly
- [ ] Images load efficiently
- [ ] Animations smooth
- [ ] Lighthouse score > 90

#### SEO
- [ ] Meta tags present
- [ ] Open Graph tags
- [ ] Sitemap (if applicable)
- [ ] robots.txt (if applicable)

#### Analytics
- [ ] Analytics tracking works
- [ ] Events fire correctly
- [ ] Goals configured

### Monitoring Setup

#### Error Tracking
- Set up error tracking (Sentry, etc.)
- Monitor for errors
- Set up alerts

#### Performance Monitoring
- Set up performance monitoring
- Track Core Web Vitals
- Monitor bundle size

#### Uptime Monitoring
- Set up uptime monitoring
- Monitor site availability
- Set up alerts

### Post-Deployment Tasks

1. **Test on Production**
   - Test all features
   - Test on multiple devices
   - Test on multiple browsers

2. **Monitor Performance**
   - Check Lighthouse scores
   - Monitor load times
   - Check error rates

3. **Update Documentation**
   - Update README if needed
   - Document deployment process
   - Update changelog

4. **Announce Launch**
   - Update social media
   - Notify stakeholders
   - Share with team

---

## Troubleshooting

### Common Issues

#### Build Fails

**Issue:** Build errors
**Solutions:**
- Check for syntax errors
- Verify all dependencies installed
- Check Node.js version
- Clear node_modules and reinstall

#### Deployment Fails

**Issue:** Deployment fails
**Solutions:**
- Check build logs
- Verify build command
- Check environment variables
- Verify file permissions

#### Site Not Loading

**Issue:** Site shows blank page
**Solutions:**
- Check browser console for errors
- Verify build output
- Check file paths
- Verify index.html exists

#### Images Not Loading

**Issue:** Images don't display
**Solutions:**
- Check image paths
- Verify images in dist folder
- Check file permissions
- Verify image formats

#### Forms Not Working

**Issue:** Forms don't submit
**Solutions:**
- Check form action URLs
- Verify API endpoints
- Check CORS settings
- Verify form validation

#### Performance Issues

**Issue:** Slow loading
**Solutions:**
- Optimize images
- Enable compression
- Check CDN configuration
- Optimize bundle size

### Debugging Tips

1. **Check Browser Console**
   - Look for JavaScript errors
   - Check network requests
   - Verify API calls

2. **Check Server Logs**
   - Review deployment logs
   - Check error logs
   - Monitor performance

3. **Test Locally**
   - Build and preview locally
   - Compare with production
   - Identify differences

4. **Use DevTools**
   - Network tab for requests
   - Console for errors
   - Performance tab for bottlenecks

---

## Continuous Deployment

### Automated Deployment

#### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Deployment Best Practices

1. **Use CI/CD**
   - Automate deployments
   - Run tests before deploy
   - Deploy from main branch

2. **Version Control**
   - Tag releases
   - Keep changelog
   - Document changes

3. **Rollback Plan**
   - Keep previous builds
   - Test rollback process
   - Document rollback steps

4. **Monitoring**
   - Monitor after deployment
   - Set up alerts
   - Track metrics

---

## Deployment Checklist Summary

### Before Deployment
- [ ] Code reviewed
- [ ] Tests passing
- [ ] Build successful
- [ ] Content verified
- [ ] Environment variables set

### During Deployment
- [ ] Build command runs
- [ ] Deployment succeeds
- [ ] No errors in logs

### After Deployment
- [ ] Site loads correctly
- [ ] All features work
- [ ] Performance acceptable
- [ ] Monitoring set up
- [ ] Team notified

---

For maintenance procedures, see [MAINTENANCE.md](./MAINTENANCE.md)


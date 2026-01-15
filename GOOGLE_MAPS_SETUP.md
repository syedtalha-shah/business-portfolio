# Google Maps API Setup Guide

This guide will help you set up Google Maps API for the InteractiveMap component.

## Quick Setup Steps

### 1. Get Your API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Maps JavaScript API**:
   - Navigate to "APIs & Services" → "Library"
   - Search for "Maps JavaScript API"
   - Click "Enable"

### 2. Create API Key

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy your API key

### 3. Configure API Key Restrictions (Important for Security)

1. Click on your newly created API key to edit it
2. **Application restrictions:**
   - Select "HTTP referrers (web sites)"
   - For development, add: `localhost:3000/*`
   - For production, add: `yourdomain.com/*` and `*.yourdomain.com/*`
3. **API restrictions:**
   - Select "Restrict key"
   - Choose "Maps JavaScript API"
   - Optionally add "Places API" if you plan to use places features
4. Click "Save"

### 4. Enable Billing (Required)

Google Maps API requires billing to be enabled:
1. Go to "Billing" in Google Cloud Console
2. Link a billing account (free tier includes $200 credit/month)
3. The free tier covers most small to medium websites

### 5. Add API Key to Your Project

1. Create a `.env` file in the project root (if it doesn't exist)
2. Add your API key:

```env
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

**Important:** 
- Never commit the `.env` file to Git (it's already in `.gitignore`)
- The `.env` file should be in the project root, same level as `package.json`

### 6. Restart Development Server

After adding the API key:
1. Stop your dev server (Ctrl+C)
2. Restart it: `npm run dev`
3. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

## Troubleshooting

### Error: "This page can't load Google Maps correctly"

**Common causes:**
1. **API key not set** - Check that `.env` file exists and contains `VITE_GOOGLE_MAPS_API_KEY`
2. **Invalid API key** - Verify the key is correct in Google Cloud Console
3. **API not enabled** - Ensure "Maps JavaScript API" is enabled
4. **Domain restrictions** - Add `localhost:3000/*` to HTTP referrer restrictions for development
5. **Billing not enabled** - Enable billing in Google Cloud Console

### Error: "Failed to load Google Maps script"

- Check browser console for specific error messages
- Verify API key is correct
- Ensure Maps JavaScript API is enabled
- Check network tab to see if the script request is being blocked

### Map shows but is blank/gray

- Check browser console for JavaScript errors
- Verify the location coordinates are valid
- Ensure the API key has proper permissions

## Production Setup

For production deployment:

1. **Create a separate API key** for production (recommended)
2. **Restrict the key** to your production domain only
3. **Set environment variable** in your hosting platform:
   - Vercel: Add in Project Settings → Environment Variables
   - Netlify: Add in Site Settings → Environment Variables
   - Other platforms: Follow their environment variable setup

## Cost Information

- **Free tier:** $200 credit per month
- **Maps JavaScript API:** Free for up to 28,000 map loads per month
- Most small to medium websites stay within the free tier
- Monitor usage in Google Cloud Console → APIs & Services → Dashboard

## Security Best Practices

1. ✅ Always restrict API keys to specific domains
2. ✅ Use separate keys for development and production
3. ✅ Never commit API keys to version control
4. ✅ Regularly rotate API keys
5. ✅ Monitor usage and set up billing alerts

## Need Help?

- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Maps JavaScript API Guide](https://developers.google.com/maps/documentation/javascript)


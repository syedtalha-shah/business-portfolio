# Form Submission & EmailJS Integration

## Overview

The Business Portfolio uses **EmailJS** for contact form submissions. EmailJS allows sending emails directly from the frontend without requiring a backend server.

## EmailJS Setup

### 1. Account Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Verify your email address
3. Access your dashboard

### 2. Create Email Service
1. Go to "Email Services" in dashboard
2. Add a new service (Gmail, Outlook, etc.)
3. Follow the setup instructions
4. Copy your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in dashboard
2. Create a new template
3. Use template variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{phone}}` - Phone number (optional)
4. Set recipient email address
5. Copy your **Template ID**

**Note:** For a modern, professional email template, see `docs/EMAILJS_TEMPLATE_SETUP.md` for the complete HTML template code.

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Environment Variables

Add to `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=service_nhj5f1h
VITE_EMAILJS_TEMPLATE_ID=template_8y3amtv
VITE_EMAILJS_PUBLIC_KEY=ezVc8qd5coFj9XH1t
```

**Important:** 
- In Vite projects, environment variables must use `VITE_` prefix
- Access in code: `import.meta.env.VITE_EMAILJS_SERVICE_ID`
- Never commit `.env` file to repository
- Use `.env.example` for documentation

## Implementation

### Contact Form Component

The `ContactForm` component uses EmailJS to send emails:

```javascript
import emailjs from '@emailjs/browser'

const handleFormSubmit = async (data) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        phone: data.phone || 'Not provided'
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    
    // Show success message
    setSubmitStatus('success')
    reset()
  } catch (error) {
    // Show error message
    setSubmitStatus('error')
  }
}
```

## EmailJS Features

### Free Tier
- 200 emails/month
- Email delivery
- Template support
- Spam protection
- Analytics dashboard

### Paid Tiers
- Higher email limits
- Advanced features
- Priority support

## Security Considerations

1. **Public Key Exposure:**
   - EmailJS public keys are safe to expose in frontend code
   - They're designed for client-side use
   - Rate limiting protects against abuse

2. **Template Security:**
   - Configure recipient email in EmailJS dashboard
   - Don't expose recipient email in frontend code
   - Use template variables for dynamic content

3. **Spam Protection:**
   - EmailJS includes built-in spam protection
   - Configure CAPTCHA if needed (optional)
   - Monitor dashboard for suspicious activity

## Testing

### Development Testing
1. Use test email addresses
2. Check EmailJS dashboard for sent emails
3. Verify template variables are populated correctly
4. Test error handling

### Production Testing
1. Send test email from production site
2. Verify email delivery
3. Check email formatting
4. Test with different form inputs

## Troubleshooting

### Common Issues

**Emails not sending:**
- Check environment variables are set correctly
- Verify Service ID, Template ID, and Public Key
- Check EmailJS dashboard for errors
- Verify email service is connected

**Template variables not working:**
- Ensure variable names match template
- Check template syntax: `{{variable_name}}`
- Verify data is being passed correctly

**Rate limit exceeded:**
- Check email quota in dashboard
- Upgrade plan if needed
- Implement rate limiting on frontend

## Alternative Solutions

If EmailJS doesn't meet your needs, consider:
- **Formspree:** Similar service, 50 submissions/month free
- **Netlify Forms:** If deployed on Netlify
- **Custom Backend API:** For full control
- **Firebase Functions:** Serverless email sending

## Maintenance

### Regular Tasks
- Monitor email quota usage
- Check for failed deliveries
- Update template if needed
- Review spam reports
- Rotate keys if compromised

### Best Practices
- Keep EmailJS account secure
- Use different keys for dev/prod
- Monitor email delivery rates
- Set up email notifications for form submissions

## Current Configuration

**Service ID:** `service_nhj5f1h`  
**Template ID:** `template_8y3amtv`  
**Public Key:** `ezVc8qd5coFj9XH1t`

These values are stored in environment variables and should not be hardcoded in the application.


# EmailJS Template Setup Guide

## New HTML Email Template

This document provides the complete setup for the modern, professional EmailJS template.

---

## Template HTML Code

Copy the following HTML code into your EmailJS template editor:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0f;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; border-radius: 16px 16px 0 0; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                ✉️ New Message
              </h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">
                Someone reached out through your portfolio
              </p>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="background-color: #13131a; padding: 40px 30px;">
              
              <!-- Sender Info -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px; background-color: #1a1a24; border-radius: 12px; border-left: 4px solid #667eea;">
                    <p style="margin: 0 0 8px; color: #8b8b9a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                      From
                    </p>
                    <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600;">
                      {{name}}
                    </p>
                    <p style="margin: 8px 0 0; color: #667eea; font-size: 14px;">
                      {{email}}
                    </p>
                    <p style="margin: 8px 0 0; color: #8b8b9a; font-size: 14px;">
                      📞 {{phone}}
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Subject -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px; color: #8b8b9a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                      Subject
                    </p>
                    <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                      {{subject}}
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td>
                    <p style="margin: 0 0 12px; color: #8b8b9a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                      Message
                    </p>
                    <div style="background-color: #1a1a24; border-radius: 12px; padding: 24px; border: 1px solid #2a2a3a;">
                      <p style="margin: 0; color: #e0e0e6; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">{{message}}</p>
                    </div>
                  </td>
                </tr>
              </table>
              
              <!-- Reply Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="mailto:{{email}}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;">
                      Reply to {{name}}
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0d0d12; padding: 24px 30px; border-radius: 0 0 16px 16px; text-align: center; border-top: 1px solid #1a1a24;">
              <p style="margin: 0; color: #5a5a6a; font-size: 12px;">
                This message was sent from your portfolio contact form
              </p>
              <p style="margin: 8px 0 0; color: #4a4a5a; font-size: 11px;">
                © 2026 Syed Talha Jan
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## EmailJS Dashboard Setup

### Step 1: Login to EmailJS
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign in to your account

### Step 2: Navigate to Email Templates
1. Click on **"Email Templates"** in the left sidebar
2. Find your existing template or create a new one
3. Click on your template to edit it

### Step 3: Update Template Settings

#### Template Name
- Set a descriptive name: `Portfolio Contact Form - Modern Design`

#### Subject Line
Configure the email subject line in the EmailJS template settings:
```
New Portfolio Message from {{name}}
```

#### Template Content
1. Switch to **HTML** editor mode (not visual editor)
2. Delete the existing HTML content
3. Paste the complete HTML template code from above

### Step 4: Configure Template Variables

The template uses these variables (automatically populated from your contact form):

| Variable | Description | Example |
|----------|-------------|---------|
| `{{name}}` | Sender's full name | John Doe |
| `{{email}}` | Sender's email address | john@example.com |
| `{{phone}}` | Sender's phone number | +1 (555) 123-4567 |
| `{{subject}}` | Message subject | Project Inquiry |
| `{{message}}` | Message content | I'd like to discuss... |

### Step 5: Set Recipient Email
In the **"To email"** field, enter your email address where you want to receive messages:
```
your-email@example.com
```

### Step 6: Save Template
Click **"Save"** button to save your changes

---

## Update Contact Form Code

The current contact form needs to be updated to match the new template variable names.

### Current Variable Mapping (needs update)
```javascript
{
  from_name: data.name,      // ❌ Change to: name
  from_email: data.email,    // ❌ Change to: email
  subject: data.subject,     // ✅ Correct
  message: data.message,     // ✅ Correct
  phone: data.phone          // ✅ Correct
}
```

### Updated Variable Mapping (corrected)
```javascript
{
  name: data.name,           // ✅ Matches {{name}}
  email: data.email,         // ✅ Matches {{email}}
  subject: data.subject,     // ✅ Matches {{subject}}
  message: data.message,     // ✅ Matches {{message}}
  phone: data.phone || 'Not provided'  // ✅ Matches {{phone}}
}
```

---

## Testing the Template

### 1. Test in EmailJS Dashboard
1. In your template editor, click **"Test it"** button
2. Fill in test values for all variables
3. Enter your email address
4. Click **"Send test email"**
5. Check your inbox for the test email

### 2. Test from Your Website
1. Go to your portfolio contact page
2. Fill out the contact form with test data
3. Submit the form
4. Check your email inbox
5. Verify the email looks correct and all data is populated

---

## Troubleshooting

### Issue: Variables not showing in email
**Solution:** Ensure variable names in template match exactly with the data sent from ContactForm.jsx:
- Use `{{name}}` not `{{from_name}}`
- Use `{{email}}` not `{{from_email}}`

### Issue: Email not sending
**Solution:** 
- Verify environment variables are set correctly in `.env`
- Check EmailJS dashboard for error logs
- Ensure you haven't exceeded monthly email limit (200 emails on free tier)

### Issue: Template looks broken in some email clients
**Solution:**
- The template uses inline CSS for maximum compatibility
- Test in multiple email clients (Gmail, Outlook, Apple Mail)
- Some gradient effects may not work in older email clients (they'll fallback to solid colors)

### Issue: Phone number showing "Not provided"
**Solution:** This is expected behavior when user doesn't fill in the optional phone field.

---

## Email Preview

### Desktop Email Clients
The email will display as a beautiful card-style design with:
- Gradient purple header with envelope icon
- Dark theme background
- Sender information in a highlighted box
- Message in a well-formatted container
- Professional reply button
- Footer with copyright information

### Mobile Email Clients
The template is responsive and will:
- Stack elements vertically
- Adjust font sizes for readability
- Maintain the design aesthetic
- Keep the reply button easily tappable

---

## Features of This Template

✅ **Modern Design**: Dark theme with gradient accents  
✅ **Professional**: Business-ready appearance  
✅ **Responsive**: Works on all devices  
✅ **Accessible**: Semantic HTML with proper roles  
✅ **Email-Safe**: Uses table-based layout for maximum compatibility  
✅ **Inline CSS**: All styles inline for email client support  
✅ **Quick Reply**: One-click mailto button  
✅ **Complete Info**: Shows all contact form fields  
✅ **Branded**: Includes your name in footer  

---

## Maintenance

### Updating Template
To make changes to the email template:
1. Edit the HTML code in EmailJS dashboard
2. Test the changes using "Test it" button
3. Save the template
4. Test from your live website

### Version Control
Consider keeping a backup of your template HTML:
- Save a copy in your project documentation
- Store in version control (Git)
- Document any customizations made

---

## Additional Customization

### Change Color Scheme
To modify the purple gradient colors:
```css
/* Find these in the template */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your brand colors, e.g., blue gradient */
background: linear-gradient(135deg, #4F46E5 0%, #2563EB 100%);
```

### Change Font
To use a different font family:
```css
/* Find this in body tag */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Change to your preference */
font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
```

### Add Company Logo
Add an image before the header text:
```html
<img src="https://your-domain.com/logo.png" alt="Company Logo" style="width: 120px; margin-bottom: 20px;">
```

---

## Need Help?

If you encounter any issues:
1. Check the EmailJS documentation: https://www.emailjs.com/docs/
2. Review the troubleshooting section above
3. Test the template with different values
4. Verify your environment variables are correct



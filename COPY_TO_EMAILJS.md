# 🚀 Quick Setup - EmailJS Template Update

## Copy This to EmailJS Dashboard

### 📋 Instructions:
1. Go to: https://dashboard.emailjs.com/
2. Click: **Email Templates** (left sidebar)
3. Select: Your template or create new one
4. Switch to: **HTML editor** mode (not visual editor)
5. Delete: All existing content
6. Copy: Everything from the section below
7. Paste: Into the EmailJS template editor
8. Save: Click the Save button

---

## 🎯 Subject Line Configuration
In the EmailJS template settings, set the subject to:
```
New Portfolio Message from {{name}}
```

---

## 📧 Recipient Email
Set your email address where you want to receive messages:
```
your-email@example.com
```
(Replace with your actual email)

---

## 📋 Template Code (Copy Everything Below This Line)

---START OF TEMPLATE---
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
---END OF TEMPLATE---

---

## ✅ After Pasting:

1. **Save** the template in EmailJS dashboard
2. Click **"Test it"** button to send a test email
3. Check your inbox to verify the email looks correct
4. Test from your website contact form

---

## 🎨 Quick Customization:

### Change the purple color to your brand color:
Find this line (appears twice in the template):
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Replace with:
```css
/* For blue: */
background: linear-gradient(135deg, #4F46E5 0%, #2563EB 100%);

/* For green: */
background: linear-gradient(135deg, #10B981 0%, #059669 100%);
```

### Update the footer:
Find and change your name in the footer section:
```html
© 2026 Syed Talha Jan
```

---

## ⚠️ Important:
- The code has already been updated in `ContactForm.jsx` to work with this template
- Variables used: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`, `{{phone}}`
- Make sure to configure the subject line as shown above

---

## 📱 Need Help?
See the detailed guides:
- `EMAILJS_TEMPLATE_README.md` - Complete overview
- `EMAILJS_UPDATE_SUMMARY.md` - Quick reference
- `docs/EMAILJS_TEMPLATE_SETUP.md` - Step-by-step guide

---

## 🎉 Done!
Your contact form will now send beautiful, professional emails!


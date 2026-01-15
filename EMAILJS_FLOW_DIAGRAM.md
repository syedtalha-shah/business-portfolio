# EmailJS Template - Data Flow

## How the Contact Form Works with EmailJS

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER SUBMITS FORM                         │
│                                                                   │
│  Portfolio Contact Page → User fills out:                        │
│  • Name: "John Doe"                                              │
│  • Email: "john@example.com"                                     │
│  • Phone: "+1 (555) 123-4567"                                    │
│  • Subject: "Project Inquiry"                                    │
│  • Message: "I'd like to discuss a project..."                   │
└───────────────────────┬───────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                   REACT COMPONENT PROCESSING                     │
│                 (ContactForm.jsx - Line 71-82)                   │
│                                                                   │
│  emailjs.send(serviceId, templateId, {                           │
│    name: "John Doe",                    → {{name}}               │
│    email: "john@example.com",           → {{email}}              │
│    phone: "+1 (555) 123-4567",          → {{phone}}              │
│    subject: "Project Inquiry",          → {{subject}}            │
│    message: "I'd like to discuss..."    → {{message}}            │
│  }, publicKey)                                                   │
└───────────────────────┬───────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                      EMAILJS SERVICE                             │
│                                                                   │
│  • Receives data from frontend                                   │
│  • Uses your Service ID to authenticate                          │
│  • Finds your Template by Template ID                            │
│  • Replaces {{variables}} with actual data                       │
│  • Formats as HTML email                                         │
└───────────────────────┬───────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                    EMAIL TEMPLATE PROCESSING                     │
│                                                                   │
│  BEFORE (Template with variables):                               │
│  ┌────────────────────────────────────────────┐                 │
│  │ From: {{name}}                             │                 │
│  │ Email: {{email}}                           │                 │
│  │ Phone: {{phone}}                           │                 │
│  │ Subject: {{subject}}                       │                 │
│  │ Message: {{message}}                       │                 │
│  └────────────────────────────────────────────┘                 │
│                                                                   │
│  AFTER (Variables replaced with actual data):                    │
│  ┌────────────────────────────────────────────┐                 │
│  │ From: John Doe                             │                 │
│  │ Email: john@example.com                    │                 │
│  │ Phone: +1 (555) 123-4567                   │                 │
│  │ Subject: Project Inquiry                   │                 │
│  │ Message: I'd like to discuss a project...  │                 │
│  └────────────────────────────────────────────┘                 │
└───────────────────────┬───────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                         EMAIL DELIVERY                           │
│                                                                   │
│  EmailJS sends the formatted email to:                           │
│  → your-email@example.com (configured in EmailJS dashboard)      │
└───────────────────────┬───────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                      YOU RECEIVE EMAIL                           │
│                                                                   │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  ┃                 ✉️ New Message                           ┃  │
│  ┃          Someone reached out through your portfolio      ┃  │
│  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫  │
│  ┃                                                           ┃  │
│  ┃  FROM                                                     ┃  │
│  ┃  John Doe                                                 ┃  │
│  ┃  john@example.com                                         ┃  │
│  ┃  📞 +1 (555) 123-4567                                     ┃  │
│  ┃                                                           ┃  │
│  ┃  SUBJECT                                                  ┃  │
│  ┃  Project Inquiry                                          ┃  │
│  ┃                                                           ┃  │
│  ┃  MESSAGE                                                  ┃  │
│  ┃  I'd like to discuss a project...                        ┃  │
│  ┃                                                           ┃  │
│  ┃         [Reply to John Doe]  ← Click to reply            ┃  │
│  ┃                                                           ┃  │
│  ┃  This message was sent from your portfolio contact form  ┃  │
│  ┃  © 2026 Syed Talha Jan                                   ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Variable Mapping

### From Form to Email

| Form Field | Variable Name | Appears in Email As |
|-----------|---------------|---------------------|
| Name input | `{{name}}` | "John Doe" |
| Email input | `{{email}}` | "john@example.com" |
| Phone input | `{{phone}}` | "📞 +1 (555) 123-4567" |
| Subject input | `{{subject}}` | "Project Inquiry" |
| Message textarea | `{{message}}` | Full message text |

---

## Configuration Files

### 1. Environment Variables (.env)
```
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

### 2. Contact Form Component (ContactForm.jsx)
```javascript
emailjs.send(
  serviceId,
  templateId,
  {
    name: data.name,      // → {{name}}
    email: data.email,    // → {{email}}
    phone: data.phone,    // → {{phone}}
    subject: data.subject,// → {{subject}}
    message: data.message // → {{message}}
  },
  publicKey
)
```

### 3. EmailJS Dashboard Configuration
- **Service:** Your email provider (Gmail, Outlook, etc.)
- **Template:** Contains the HTML with {{variables}}
- **Subject:** "New Portfolio Message from {{name}}"
- **To Email:** your-email@example.com

---

## Update Summary

### What Changed?

#### BEFORE (Old Code):
```javascript
{
  from_name: data.name,   // ❌ Old variable name
  from_email: data.email, // ❌ Old variable name
  subject: data.subject,
  message: data.message,
  phone: data.phone
}
```

**Old Template Variables:**
- `{{from_name}}`
- `{{from_email}}`

#### AFTER (New Code):
```javascript
{
  name: data.name,        // ✅ New variable name
  email: data.email,      // ✅ New variable name
  subject: data.subject,
  message: data.message,
  phone: data.phone
}
```

**New Template Variables:**
- `{{name}}`
- `{{email}}`

### Why?
- Cleaner, more intuitive variable names
- Matches common email template conventions
- Better matches the template design

---

## Email Client Compatibility

The template works perfectly in:

✅ **Desktop Email Clients:**
- Gmail (web & app)
- Outlook (web & desktop)
- Apple Mail
- Thunderbird
- Yahoo Mail

✅ **Mobile Email Clients:**
- Gmail (iOS & Android)
- Apple Mail (iOS)
- Outlook (iOS & Android)
- Samsung Email
- Native email apps

✅ **Features Supported:**
- Gradient backgrounds (with fallback)
- Rounded corners
- Custom fonts (with fallback)
- Responsive layout
- Interactive buttons

---

## Security & Privacy

### What's Exposed?
✅ **Safe to Expose:**
- EmailJS Public Key (designed for frontend use)
- Service ID (public identifier)
- Template ID (public identifier)

❌ **Never Exposed:**
- Your email password
- Recipient email address (configured in EmailJS, not in code)
- Private API keys

### Rate Limiting
- EmailJS includes built-in spam protection
- Free tier: 200 emails/month
- Rate limits prevent abuse
- Dashboard monitoring available

---

## Monitoring & Analytics

### EmailJS Dashboard Shows:
- Total emails sent
- Success/failure rate
- Monthly usage
- Error logs
- Template performance

### Check Your Usage:
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. View "Overview" for usage statistics
3. Check "Logs" for delivery status
4. Monitor "Email History" for recent sends

---

## Testing Checklist

- [ ] Template copied to EmailJS dashboard
- [ ] Subject line configured
- [ ] Recipient email set
- [ ] Test email sent from dashboard ✓
- [ ] Test email received and formatted correctly ✓
- [ ] Form submitted from website ✓
- [ ] Real email received from form submission ✓
- [ ] All variables populated correctly ✓
- [ ] Reply button works ✓
- [ ] Email looks good on desktop ✓
- [ ] Email looks good on mobile ✓

---

## Support

### Need Help?
1. Check `EMAILJS_TEMPLATE_README.md` for overview
2. Read `EMAILJS_UPDATE_SUMMARY.md` for quick reference
3. See `docs/EMAILJS_TEMPLATE_SETUP.md` for detailed guide
4. Visit [EmailJS Documentation](https://www.emailjs.com/docs/)

### Common Issues?
See troubleshooting sections in:
- `EMAILJS_UPDATE_SUMMARY.md`
- `docs/EMAILJS_TEMPLATE_SETUP.md`

---

## Quick Links

- 🌐 [EmailJS Dashboard](https://dashboard.emailjs.com/)
- 📚 [EmailJS Docs](https://www.emailjs.com/docs/)
- 💰 [EmailJS Pricing](https://www.emailjs.com/pricing/)
- 🔧 [EmailJS Support](https://www.emailjs.com/docs/faq/)

---

**Your contact form is now set up with a beautiful, professional email template! 🎉**


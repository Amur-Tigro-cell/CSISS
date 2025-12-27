# 📧 Email Setup Guide for Contact Form

## ✅ What's Been Done

Your contact form is now configured to send emails to: **subroopu@gmail.com**

The form uses **Web3Forms** (free service) to send emails directly to your Gmail.

---

## 🔑 Get Your Web3Forms Access Key (2 minutes)

1. **Go to:** https://web3forms.com
2. **Click:** "Get Started" or "Create Access Key"
3. **Enter your email:** subroopu@gmail.com
4. **Click:** "Create Access Key"
5. **Copy the Access Key** (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

---

## ✏️ Add the Access Key to Your Code

Open `e:\CSISS\contact.html` and find this line (around line 99):

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```

**Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key:**

```html
<input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
```

---

## 📤 Push Changes to GitHub

After adding your access key, commit and push:

```powershell
cd e:\CSISS
git add .
git commit -m "Add email notifications to contact form"
git push origin main
```

---

## ✅ How It Works

When someone fills out the contact form:

1. Form data is sent to Web3Forms
2. Web3Forms sends an email to **subroopu@gmail.com**
3. You receive an email with:
   - Name
   - Email address
   - Phone (if provided)
   - Organization (if provided)
   - Subject
   - Message
   - Consent checkbox status

---

## 📧 Email Format You'll Receive

**Subject:** New CSISS Contact Form Submission

**Body:**
```
Name: John Doe
Email: john@example.com
Phone: +880-XXX-XXXXXX
Organization: Example Company
Subject: Partnership Inquiry
Message: [Their message here]
Consent: Yes
```

---

## 🎯 Features

✅ **Free:** No cost (up to 250 submissions/month)  
✅ **Instant:** Emails arrive immediately  
✅ **Spam Protection:** Built-in reCAPTCHA support  
✅ **No Backend:** Works with static sites  
✅ **Reliable:** 99.9% uptime  

---

## 🔒 Security Notes

- Never share your access key publicly
- Your access key is in the HTML (visible to users)
- This is normal for Web3Forms - they handle spam protection
- For sensitive data, consider a backend solution

---

## 🆘 Troubleshooting

**Not receiving emails?**
1. Check spam folder in Gmail
2. Verify access key is correct in contact.html
3. Test form submission
4. Check Web3Forms dashboard for logs

**Want to test?**
1. Deploy to Render or GitHub Pages
2. Fill out your contact form
3. Check your Gmail (subroopu@gmail.com)

---

## 🔄 Alternative: EmailJS (If Web3Forms doesn't work)

If you prefer EmailJS:
1. Create account at https://emailjs.com
2. Connect your Gmail
3. Get Service ID, Template ID, and Public Key
4. I can update the code to use EmailJS instead

---

## 📊 Web3Forms Free Tier Limits

- 250 submissions per month
- Unlimited access keys
- Email support
- Spam filtering included

**Need more?** Upgrade to Pro ($10/month) for 10,000 submissions

---

## ✅ Next Steps

1. Get your access key from https://web3forms.com
2. Add it to contact.html (line 99)
3. Commit and push to GitHub
4. Deploy to Render
5. Test the form!

---

**After setup, every form submission will arrive in subroopu@gmail.com!** 📧✨

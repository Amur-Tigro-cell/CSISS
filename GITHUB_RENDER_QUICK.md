# 🚀 Push to GitHub & Deploy on Render - Quick Steps

## ⚡ QUICK REFERENCE (Copy-Paste Ready)

### Step 1: Create GitHub Repository
Go to: https://github.com/new
- Name: `csiss-website`
- Description: "Community Safety & Information Support System - Bangladesh"
- Public (so Render can access it)
- Click **Create repository**

### Step 2: Copy Your Repository URL
From GitHub, copy the URL shown (looks like):
```
https://github.com/YOUR_USERNAME/csiss-website.git
```

### Step 3: Push to GitHub (Copy-Paste This)
Open PowerShell in `e:\CSISS` folder and paste:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/csiss-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Step 4: Deploy on Render
1. Go to: https://render.com
2. Sign in (or sign up with GitHub)
3. Click **New +** → **Web Service**
4. Select **csiss-website** repository
5. Fill settings:
   - **Name**: csiss-website
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python -m http.server 8000`
6. Click **Create Web Service**
7. Wait 2-3 minutes for deployment
8. Get your live URL! ✅

---

## 📋 What Gets Committed

Git already initialized with 21 files:
- ✅ 6 HTML pages
- ✅ 2 CSS stylesheets
- ✅ 3 JavaScript files
- ✅ 5 Documentation files
- ✅ Deployment configs (render.yaml, requirements.txt)
- ✅ .gitignore (already configured)

Ready to push! 🎉

---

## 🔑 GitHub Personal Access Token (If Needed)

If Git asks for authentication:

1. Go to: https://github.com/settings/tokens
2. Click **Generate new token** → **Generate new token (classic)**
3. Name: "csiss-deployment"
4. Scopes: Check ✓ `repo` and ✓ `workflow`
5. Click **Generate token**
6. **Copy the token** (won't show again!)
7. When Git asks for password, paste the token

---

## ✅ Verification

After pushing to GitHub:
- Go to: https://github.com/YOUR_USERNAME/csiss-website
- You should see all your files there
- If you see commits, it worked! ✅

After deploying on Render:
- Check Render dashboard for deployment status
- When it says "Live", your site is online! ✅
- Click the URL to visit your live website

---

## 🎉 You're Done!

Your website is now:
- ✅ Backed up on GitHub
- ✅ Live on the internet via Render
- ✅ Auto-deploying on every push to GitHub

Share your Render URL with everyone! 🌐

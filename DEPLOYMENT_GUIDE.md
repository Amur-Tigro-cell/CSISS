# CSISS Website - GitHub & Render Deployment Guide

## 📋 Prerequisites

Before you start, make sure you have:
- ✅ GitHub account (https://github.com/signup)
- ✅ Render account (https://render.com - free tier available)
- ✅ Git installed on your computer (https://git-scm.com/download)

## 🚀 Step 1: Initialize Git Repository (Local)

Open PowerShell/Command Prompt in the CSISS folder and run:

```powershell
cd e:\CSISS
git init
git add .
git commit -m "Initial commit: CSISS website with all pages and styling"
```

### What this does:
- `git init` - Creates a local git repository
- `git add .` - Stages all files for commit
- `git commit` - Creates a commit with your changes

## 📤 Step 2: Create GitHub Repository

### Option A: Using GitHub Web Interface (Easiest)

1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name**: `csiss-website` (or any name you want)
   - **Description**: "Community Safety & Information Support System - Bangladesh"
   - **Public** or **Private**: Choose visibility
   - **Do NOT add README.md** (we already have one)
   - Click **Create repository**

3. Copy the HTTPS URL (looks like: `https://github.com/YOUR_USERNAME/csiss-website.git`)

### Option B: Using GitHub CLI

If you have GitHub CLI installed:

```powershell
gh repo create csiss-website --public --source=. --remote=origin --push
```

## 🔗 Step 3: Add Remote and Push to GitHub

In PowerShell/Command Prompt in the CSISS folder:

```powershell
# Replace YOUR_USERNAME and REPO_NAME with actual values
git remote add origin https://github.com/YOUR_USERNAME/csiss-website.git
git branch -M main
git push -u origin main
```

### Example:
```powershell
git remote add origin https://github.com/john123/csiss-website.git
git branch -M main
git push -u origin main
```

### What this does:
- `git remote add origin` - Links your local repo to GitHub
- `git branch -M main` - Renames branch to `main` (GitHub default)
- `git push -u origin main` - Uploads your code to GitHub

### First time? Git might ask:
- Enter your GitHub username
- Enter your GitHub personal access token (Create at https://github.com/settings/tokens)

## ✅ Step 4: Verify on GitHub

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/csiss-website`
2. You should see all your files (HTML, CSS, JS, documentation)
3. Great! Your code is now on GitHub 🎉

## 🚀 Step 5: Deploy on Render

### Prerequisites:
- GitHub repository is public or connected
- Render account created

### Option A: Deploy from GitHub UI (Recommended)

1. Go to https://render.com and sign in
2. Click **New +** → **Web Service**
3. Connect your GitHub account if not already done
4. Select the **csiss-website** repository
5. Fill in the settings:
   - **Name**: `csiss-website`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python -m http.server 8000`
   - **Instance Type**: Free (to stay within free tier)

6. Scroll down and click **Create Web Service**
7. Wait for deployment (2-3 minutes)
8. You'll get a URL like: `https://csiss-website.onrender.com`

### Option B: Deploy using render.yaml (Automatic)

We already created `render.yaml` in your project. Render will:
1. Detect the `render.yaml` file
2. Use settings from the file automatically
3. Deploy without manual configuration

Steps:
1. Go to https://render.com → New → Web Service
2. Connect GitHub repository
3. Select **csiss-website** repository
4. Render automatically reads `render.yaml`
5. Click **Create Web Service**
6. Deployment starts automatically ✅

## 📊 Render Deployment Details

### Free Tier Limits:
- ✅ 1 web service running
- ✅ 512 MB RAM
- ✅ 0.5 CPU
- ✅ Auto-pause after 15 min of inactivity
- ⚠️ Spins up on first request (takes 30 seconds)

### What to expect:
1. **Building** (1-2 minutes) - Render prepares your app
2. **Deploying** (1 minute) - Renders deploys your code
3. **Live** ✅ - Your website is online!

### Your Website URL:
After deployment, you'll get a URL:
```
https://csiss-website.onrender.com
```

You can customize the domain in Render settings.

## 🔄 Step 6: Making Updates

After you've deployed, here's how to push updates:

```powershell
cd e:\CSISS

# Make changes to your files

git add .
git commit -m "Update: Changed colors/added features"
git push origin main
```

Render will automatically redeploy within 2-3 minutes!

## 🛠️ Troubleshooting

### Issue: "Repository not found"
**Solution**: Check that:
- GitHub repository URL is correct
- Your GitHub account has access
- Repository is public (or you're logged in)

### Issue: Build fails on Render
**Solution**: Check:
- `requirements.txt` exists (we created it)
- `render.yaml` has correct syntax
- No Python 2 specific code used

### Issue: Website is slow on Render
**Solution**: This is normal on free tier
- Site sleeps after 15 min of inactivity
- Takes 30 seconds to wake up on next request
- Upgrade to paid tier for always-on hosting

### Issue: Port 8000 not working
**Solution**: This is configured in `render.yaml`
- Render exposes the service automatically
- Don't need to specify port in URL

## 📝 Git Commands Reference

```powershell
# Check git status
git status

# See your commits
git log --oneline

# Push specific branch
git push origin main

# Pull latest from GitHub
git pull origin main

# Create a new branch
git checkout -b feature-name

# Switch to main branch
git checkout main
```

## 🌐 Custom Domain on Render (Optional)

1. In Render dashboard, go to your web service
2. Click **Settings** → **Custom Domain**
3. Add your domain (e.g., csiss.bd)
4. Follow DNS configuration steps
5. Wait for DNS to propagate (can take 24 hours)

## 📱 Test Your Deployed Website

After Render deployment:

1. **Desktop**: Open the Render URL in browser
2. **Mobile**: Open on phone using the URL
3. **Test navigation**: Click through all 6 pages
4. **Test form**: Submit contact form (data goes to localStorage)
5. **Test responsiveness**: Resize browser

## 🎯 Summary of Files Added

New files created for deployment:
- `render.yaml` - Render configuration
- `requirements.txt` - Python dependencies (minimal)
- `.gitignore` - Already existed, configured properly

## 🚀 Next Steps

1. ✅ Initialize git locally (Step 1)
2. ✅ Create GitHub repository (Step 2)
3. ✅ Push to GitHub (Step 3)
4. ✅ Deploy on Render (Step 5)
5. ✅ Test your live website
6. ✅ Share the Render URL with others!

## 💡 Pro Tips

**Tip 1: Free vs Paid on Render**
- Free tier: Good for testing/demos
- Paid ($7/month): Always-on, better performance

**Tip 2: Set up GitHub Pages Alternative**
- GitHub can also host static sites for free
- Go to GitHub repo → Settings → Pages
- Choose source as main branch

**Tip 3: Auto-deploy with Render**
- Connect GitHub repo to Render
- Every push to `main` auto-deploys
- No manual steps needed!

**Tip 4: Environment Variables**
- If you add backend later:
- Add to Render environment variables
- Don't hardcode sensitive data

## 📞 Support Resources

- **GitHub Help**: https://docs.github.com
- **Render Docs**: https://render.com/docs
- **Git Documentation**: https://git-scm.com/doc

## ✅ Checklist

- [ ] GitHub account created
- [ ] Render account created
- [ ] Git installed locally
- [ ] Local git repository initialized
- [ ] Files committed locally
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Render web service created
- [ ] Website deployed and live
- [ ] Tested all pages on live URL
- [ ] Shared URL with team/users

---

**Congratulations!** Your CSISS website is now live on Render! 🎉

Access your live website at:
```
https://csiss-website.onrender.com
```

(Replace with your actual Render URL)

# 📝 Exact Commands to Execute

## These are the EXACT commands to copy-paste into PowerShell

### Command 1: Set up GitHub Remote
Replace `YOUR_USERNAME` with your actual GitHub username!

```powershell
git remote add origin https://github.com/YOUR_USERNAME/csiss-website.git
```

**Example:**
```powershell
git remote add origin https://github.com/john123/csiss-website.git
```

---

### Command 2: Set Main Branch
Copy-paste exactly as shown:

```powershell
git branch -M main
```

---

### Command 3: Push to GitHub
Copy-paste exactly as shown (will ask for GitHub credentials):

```powershell
git push -u origin main
```

---

## 📝 Full Copy-Paste (All at Once)

If your GitHub username is `john123`, copy all three:

```powershell
git remote add origin https://github.com/john123/csiss-website.git
git branch -M main
git push -u origin main
```

If asked for "Username/token", use:
- Username: Your GitHub username
- Password: Your personal access token (from https://github.com/settings/tokens)

---

## ✅ After Pushing, Verify:

Check that it worked:
```powershell
git remote -v
```

Should show:
```
origin  https://github.com/john123/csiss-website.git (fetch)
origin  https://github.com/john123/csiss-website.git (push)
```

---

## 🚀 To Check Git Status:

```powershell
git status
```

Should show:
```
On branch main
nothing to commit, working tree clean
```

---

## 📤 Future Updates (After First Push)

Next time you make changes, just use:

```powershell
git add .
git commit -m "Your message here"
git push
```

---

## 🎯 Checklist

- [ ] Created GitHub repository at https://github.com/new
- [ ] Copied the repository URL
- [ ] Replaced YOUR_USERNAME with actual username
- [ ] Ran `git remote add origin ...` command
- [ ] Ran `git branch -M main` command
- [ ] Ran `git push -u origin main` command
- [ ] Verified on GitHub that files are there
- [ ] Created Render account and web service
- [ ] Website is live on Render!

---

## 🆘 Troubleshooting Commands

If something went wrong:

**See commit history:**
```powershell
git log --oneline
```

**See branches:**
```powershell
git branch -a
```

**Reset and try again:**
```powershell
git remote remove origin
```
Then run the add origin command again.

**See remote URLs:**
```powershell
git remote -v
```

---

**That's it! You're ready to deploy!** 🚀

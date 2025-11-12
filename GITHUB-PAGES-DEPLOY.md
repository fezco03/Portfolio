# 🚀 Deploy to GitHub Pages - Step by Step

## ✅ Prerequisites Done:
- ✅ gh-pages installed
- ✅ package.json configured
- ✅ Git installed

---

## 📝 **STEP-BY-STEP DEPLOYMENT**

### **Step 1: Create GitHub Repository**

1. Go to: https://github.com/new
2. Repository name: `portfolio` (or any name you like)
3. Description: "My Professional Portfolio Website"
4. Set to **Public**
5. ❌ **DO NOT** initialize with README
6. Click **"Create repository"**

---

### **Step 2: Initialize Git (Run these commands in PowerShell)**

```powershell
# Navigate to your portfolio folder (if not already there)
cd D:\Portfolio

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Portfolio website"
```

---

### **Step 3: Connect to GitHub**

**Replace `YOUR_USERNAME` with your actual GitHub username:**

```powershell
# Add GitHub remote (UPDATE THIS WITH YOUR USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example:** If your GitHub username is `joshlopez`, the command would be:
```powershell
git remote add origin https://github.com/joshlopez/portfolio.git
```

---

### **Step 4: Deploy to GitHub Pages**

```powershell
# This will build and deploy your site
npm run deploy
```

**This command will:**
- Build your project (`npm run build`)
- Create a `gh-pages` branch
- Push your built files to GitHub
- Your site will be live in 1-2 minutes!

---

### **Step 5: Enable GitHub Pages (One-time Setup)**

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under "Source", select: **Branch: `gh-pages`**
5. Click **"Save"**
6. Wait 1-2 minutes

---

### **Step 6: Get Your Live URL**

Your portfolio will be live at:

```
https://YOUR_USERNAME.github.io/portfolio
```

**Example:** 
- Username: `joshlopez`
- URL: `https://joshlopez.github.io/portfolio`

---

## 🎯 **QUICK REFERENCE COMMANDS**

### First Time Deployment:
```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
npm run deploy
```

### Future Updates (After making changes):
```powershell
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

---

## ⚠️ **IMPORTANT NOTES**

1. **Replace `YOUR_USERNAME`** with your actual GitHub username
2. If you get authentication errors, use **Personal Access Token** instead of password
3. Your site updates within 1-2 minutes after `npm run deploy`
4. The `dist` folder is NOT pushed to main branch (it goes to gh-pages branch)

---

## 🔑 **GitHub Authentication**

If asked for credentials:

**Username:** Your GitHub username

**Password:** Use **Personal Access Token** (not your password)

### To create a token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Select `repo` scope
3. Copy the token and use it as password

---

## 🆘 **Troubleshooting**

### "Permission denied" error?
- Use Personal Access Token instead of password
- Or use SSH: `git remote set-url origin git@github.com:YOUR_USERNAME/portfolio.git`

### Site not showing?
- Wait 2-3 minutes
- Check GitHub Pages settings
- Make sure `gh-pages` branch exists
- Clear browser cache

### "Failed to get remote" error?
- Check GitHub repository exists
- Verify repository name matches
- Check internet connection

---

## ✅ **After Successful Deployment**

Your portfolio is now:
- ✅ Live on the internet
- ✅ FREE forever
- ✅ Accessible worldwide
- ✅ Fast and reliable
- ✅ Custom domain ready (optional)

### Share your portfolio:
- LinkedIn profile
- Resume
- Email signature
- Facebook
- Job applications

---

## 🎉 **YOU'RE DONE!**

Your professional portfolio is now live on GitHub Pages!

**URL Format:** `https://YOUR_USERNAME.github.io/portfolio`

Update anytime with:
```powershell
npm run deploy
```

---

Need help? Check the error messages and refer to the Troubleshooting section above!

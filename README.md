# V1Apps.io

## 🚀 Overview
V1Apps.io is a **free PaaS (Platform-as-a-Service)** that allows users to deploy their applications seamlessly. This guide will help you set up the platform, deploy the frontend on GitHub Pages, and the backend on DigitalOcean.

---

## 📌 1️⃣ Push Your Code to GitHub
### **Initialize Git in Your Project Folder**
```bash
cd /path/to/your/project
git init
git add .
git commit -m "Initial commit"
```

### **Create a GitHub Repository**
1. Go to **[GitHub](https://github.com/)**
2. Click **New Repository**
3. Name it (e.g., `my-paas-platform`)
4. Copy the repo URL (e.g., `https://github.com/yourusername/my-paas-platform.git`)

### **Push Your Code to GitHub**
```bash
git remote add origin https://github.com/yourusername/my-paas-platform.git
git branch -M main
git push -u origin main
```

---

## 🌐 2️⃣ Deploy the Frontend (GitHub Pages)
Your **React frontend** can be deployed on **GitHub Pages**.

### **Install GitHub Pages Dependencies**
```bash
cd frontend/
npm install gh-pages --save-dev
```

### **Modify `package.json`**
Add these lines inside `frontend/package.json`:
```json
"homepage": "https://yourusername.github.io/my-paas-platform",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### **Deploy the Frontend**
```bash
npm run deploy
```
Your React app will be live at:  
🔗 `https://yourusername.github.io/my-paas-platform`

---

## ⚙️ 3️⃣ Deploy the Backend (DigitalOcean)
GitHub Pages only supports frontend, so you need to deploy the **backend** on **DigitalOcean**.

### **Create a DigitalOcean Droplet**
1. Go to **[DigitalOcean](https://www.digitalocean.com/)**
2. Click **Create → Droplet**
3. Choose **Ubuntu 22.04**
4. Select **Basic Plan** (e.g., `$5/month`)
5. Add your **SSH Key** (or use a password)
6. Click **Create Droplet**

### **Connect to Your Droplet**
```bash
ssh root@your-droplet-ip
```

### **Set Up the Backend Server**
```bash
sudo apt update && sudo apt install -y nodejs npm
git clone https://github.com/yourusername/my-paas-platform.git
cd my-paas-platform/backend
npm install
```

### **Run Your Backend**
```bash
node server.js
```
Your backend is now live at:  
🔗 `http://your-droplet-ip:3001`

---

## 🤖 4️⃣ Automate Backend Deployment (GitHub Actions)
If you want **GitHub to auto-deploy updates**, create `.github/workflows/deploy.yml` in your repo:

```yaml
name: Deploy to DigitalOcean
on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: SSH into Droplet & Pull Latest Code
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.DO_IP }}
          username: root
          key: ${{ secrets.DO_SSH_KEY }}
          script: |
            cd /root/my-paas-platform
            git pull origin main
            cd backend
            npm install
            pm2 restart server.js
```

### **Enable GitHub Actions Deployment**
1. Go to **GitHub → Repo → Settings → Secrets**
2. Add Secret Variables:
   - `DO_IP` → Your DigitalOcean Droplet IP
   - `DO_SSH_KEY` → Your SSH Private Key

Now, every time you **push changes to GitHub**, the backend **auto-deploys to DigitalOcean!** 🎉

---

## ✅ **Summary**
- ✅ **Push Code to GitHub** (Backend + Frontend)
- ✅ **Deploy Frontend on GitHub Pages**
- ✅ **Deploy Backend on DigitalOcean**
- ✅ **Automate Backend Deployment with GitHub Actions**

---

## 📞 Need Help?
If you have any questions or need support, feel free to reach out! 🚀


# V1Apps.io
1️⃣ Push Your Code to GitHub
Initialize Git in your project folder
Open your terminal and run:

bash
Copy
Edit
cd /path/to/your/project
git init
git add .
git commit -m "Initial commit"
Create a GitHub repository

Go to GitHub
Click New Repository
Name it (e.g., my-paas-platform)
Copy the repo URL (e.g., https://github.com/yourusername/my-paas-platform.git)
Push your code to GitHub

bash
Copy
Edit
git remote add origin https://github.com/yourusername/my-paas-platform.git
git branch -M main
git push -u origin main
2️⃣ Deploy the Frontend (GitHub Pages)
Your React frontend can be deployed on GitHub Pages.

Install GitHub Pages Dependencies
Run this inside your frontend/ folder:

bash
Copy
Edit
npm install gh-pages --save-dev
Modify package.json
Add these lines inside frontend/package.json:

json
Copy
Edit
"homepage": "https://yourusername.github.io/my-paas-platform",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy the Frontend
bash
Copy
Edit
npm run deploy
Your React app will be live at:
🔗 https://yourusername.github.io/my-paas-platform

3️⃣ Deploy the Backend (DigitalOcean or GitHub Actions)
Since GitHub Pages only supports frontend, you'll need to deploy your backend on DigitalOcean.

Steps to Deploy Backend
Create a DigitalOcean Droplet

Go to DigitalOcean
Click Create → Droplet
Choose Ubuntu 22.04
Select Basic Plan (e.g., $5/month)
Add your SSH Key (or use password)
Click Create Droplet
Connect to Your Droplet

bash
Copy
Edit
ssh root@your-droplet-ip
Set Up the Backend Server

bash
Copy
Edit
sudo apt update && sudo apt install -y nodejs npm
git clone https://github.com/yourusername/my-paas-platform.git
cd my-paas-platform/backend
npm install
Run Your Backend

bash
Copy
Edit
node server.js
Now, your backend is live at http://your-droplet-ip:3001

4️⃣ Automate Backend Deployment with GitHub Actions
If you want GitHub to auto-deploy updates, create .github/workflows/deploy.yml in your repo:

yaml
Copy
Edit
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
Steps to Enable GitHub Actions Deployment:

Go to GitHub → Repo → Settings → Secrets
Add Secret Variables
DO_IP → Your DigitalOcean Droplet IP
DO_SSH_KEY → Your SSH Private Key
Now, every time you push changes to GitHub, the backend auto-deploys to DigitalOcean! 🎉

🚀 Summary
✅ Push Code to GitHub (Backend + Frontend)
✅ Deploy Frontend on GitHub Pages
✅ Deploy Backend on DigitalOcean
✅ Automate Backend Deployment with GitHub Actions

Let me know if you need help setting up anything! 🚀

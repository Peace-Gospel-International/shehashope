# Manual Vercel Deployment Instructions

Since the CLI authentication is having timing issues, here's how to deploy manually:

## Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to https://vercel.com and login with info@peacegospel.org
2. Click "Add New..." → "Project"
3. Import the GitHub repository: `Peace-Gospel-International/shehashope`
   - If the repo isn't connected yet, you'll need to push to GitHub first (see below)
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
5. Click "Deploy"

## Option 2: Push to GitHub First, Then Link to Vercel

### Push to GitHub:
```bash
cd ~/projects/shehashope
git remote -v  # Verify remote is set
git push -u origin main
```

You'll be prompted for GitHub credentials. Use:
- Username: Your GitHub username
- Password: A Personal Access Token (not your GitHub password)
  - Create one at: https://github.com/settings/tokens
  - Select scopes: repo (full control)

### Then deploy via Vercel Dashboard as described in Option 1

## Current Status:
- ✅ All code is committed locally
- ✅ Site works perfectly on localhost:3000
- ⏳ Needs: Push to GitHub → Deploy to Vercel


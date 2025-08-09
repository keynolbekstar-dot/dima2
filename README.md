
# Dmitry Karpov — Apple‑style One‑pager

Next.js 14 + Tailwind + Framer Motion. Ready for Vercel.

## Local run
```bash
npm i
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel (step‑by‑step)
1. Create a new GitHub repository and push this project:
   ```bash
   git init
   git add -A
   git commit -m "Initial"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
2. Go to https://vercel.com → New Project → Import Git Repository.
3. Select the repo. Framework preset: **Next.js**. No extra settings needed.
4. Click **Deploy**. In ~1 minute you'll get a live URL.
5. (Optional) Add a custom domain in the project **Settings → Domains**.

## Replace the photo
Change `public/profile.jpg` to your portrait. Keep the same file name.

## Edit content
Most content is in `app/page.tsx`.

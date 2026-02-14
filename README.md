This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to GitHub Pages

This site is configured for static export and automatic deployment to GitHub Pages.

### Setup Instructions

1. **Create a GitHub repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in repository settings**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment", set Source to "GitHub Actions"
   - The workflow will automatically deploy on push to main branch

3. **Configure custom domain** (alexayekha.tech):
   - In Settings > Pages, add `alexayekha.tech` as a custom domain
   - In your DNS provider, add these records:
     - For root domain: Add 4 A records pointing to GitHub's IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - For www subdomain: Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Wait for DNS propagation (can take up to 24 hours)
   - Enable "Enforce HTTPS" in GitHub Pages settings (after DNS is configured)

### Build Locally

```bash
npm run build
```

The static files will be generated in the `out` directory.

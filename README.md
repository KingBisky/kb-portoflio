# Kang Bin Wong — Portfolio

# Just experimenting only, in the meantime still tryna make a portfolio site on Wixsite

A responsive Next.js portfolio designed for Vercel deployment.

## Features
- Responsive editorial-style homepage
- Project explorer with category filters and live search
- 13 unique project routes generated from `data/projects.json`
- Individual project case-study layouts\n- Dedicated resume page and credentials section
- Related-project recommendations
- Mobile navigation, share-link action, GitHub links
- Static generation for project pages

## Run locally
Requires Node.js 18.18+ (Node.js 20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and upload the contents of this folder.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected framework as Next.js and deploy.

No environment variables are required for the current version. The resume page links to the currently published CV PDF; replace that URL when you upload an updated CV.

## Update your portfolio
- Edit project content in `data/projects.json`.
- Add project images to `public/` and update `CoverArt` in `components/site.jsx` if you want to use actual screenshots.
- Update the experience and skills copy in `components/site.jsx`.
- The GitHub profile link is currently set to `https://github.com/KingBisky`; individual repository links should be added when verified.

## Accuracy notes
The duplicate FinanceQuest cards from the original Wix project listing have been consolidated into one project.
The Employee Burnout, AI Budgeting & Financial Literacy Coach, and Singapore Water Quality Data Pipeline cards are shown as project overviews because their detailed case-study pages were not available. The AI Budgeting card's original Wix description conflicts with its title. Its draft case study now uses the project information from the published CV (Vertex AI / Gemini fine-tuning), but should still be checked against the final project repository.
The original Wix listing also contains a "Coming Soon" placeholder, which is not included as a project.
Some project cards on Wix use a shared Read More link. The GitHub action currently points to the public profile; replace each `github` value in `data/projects.json` with the exact repository URL when confirmed. Project years are left unspecified rather than guessed.

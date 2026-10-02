# Joshua S. Ricardo — Personal Portfolio

A responsive four-page portfolio built with Next.js App Router and React.

## Pages
- `/` — Home
- `/portfolio` — Projects and skills
- `/about` — About Joshua
- `/gallery` — Interests and inspiration gallery

The shared Header uses `usePathname()` to highlight the active page.

## Requirements
- Node.js 20.9 or later
- npm

## Run locally
1. Open this folder in VS Code.
2. Open the terminal in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit `http://localhost:3000`.

## Publish to GitHub
1. Create a new **public** repository on GitHub, for example `joshua-s-ricardo-portfolio`.
2. Open a terminal inside this project folder.
3. Run the following commands, replacing the URL with your own repository URL:

```bash
git init
git add .
git commit -m "Create personal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/joshua-s-ricardo-portfolio.git
git push -u origin main
```

Take screenshots of Home, Portfolio, About, and Gallery after opening each route in the browser. The project files are provided, but a GitHub repository must be created and pushed from your own account.

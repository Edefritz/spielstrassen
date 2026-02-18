# Spielstrassen Website

A simple static site about Spiel & Nachbarschaftsstrassen built with Eleventy (11ty).

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser to http://localhost:8080

## Building

To build the site manually:
```bash
npm run build
```

The built site will be in the `_site/` directory.

## Deployment

This site automatically deploys to GitHub Pages when you push to the `main` branch.

### First-time Setup

1. Go to your repository settings on GitHub
2. Navigate to Settings > Pages
3. Under "Build and deployment" > "Source", select **GitHub Actions**
4. Push your changes to the `main` branch
5. The site will be available at: https://edefritz.github.io/spielstrassen/

### Custom Domain Setup

When you're ready to use a custom domain:

1. Add a file named `CNAME` in the `src/` directory containing your domain name:
```
yourdomain.com
```

2. Configure your domain's DNS settings:
   - For apex domain (example.com): Add A records pointing to GitHub's IPs
   - For subdomain (www.example.com): Add CNAME record pointing to `edefritz.github.io`

3. In your GitHub repository settings > Pages, enter your custom domain

4. Enable "Enforce HTTPS" once DNS propagation is complete

## Project Structure

```
.
├── src/
│   ├── _includes/
│   │   └── layout.njk       # Base HTML template
│   ├── index.md             # Homepage content
│   └── styles.css           # Site styles
├── .eleventy.js             # 11ty configuration
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
└── package.json             # Dependencies and scripts
```

## Editing Content

Edit the Markdown files in the `src/` directory. The site will automatically rebuild and deploy when you push to `main`.

To add images:
1. Create an `images/` folder in `src/`
2. Add your images there
3. Reference them in Markdown: `![Alt text](/images/photo.jpg)`

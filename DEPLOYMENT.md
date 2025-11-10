# Foundation Scholars Website - Deployment Guide

This guide provides instructions for deploying the Foundation Scholars website.

## Quick Start

The website is built with static HTML, CSS, and JavaScript files that require no build process or dependencies. You can deploy it to any web hosting service.

## Deployment Options

### Option 1: GitHub Pages (Recommended)

GitHub Pages provides free hosting for static websites directly from your repository.

#### Steps:

1. Push your code to a GitHub repository (already done!)
2. Go to your repository on GitHub
3. Click on **Settings**
4. Scroll down to **Pages** section in the left sidebar
5. Under **Source**, select your branch (usually `main`)
6. Select **/ (root)** as the folder
7. Click **Save**
8. Wait a few minutes for deployment
9. Your site will be available at: `https://[username].github.io/Foundation-Scholars/`

### Option 2: Netlify

Netlify offers easy deployment with drag-and-drop or Git integration.

#### Method A: Drag and Drop

1. Visit [netlify.com](https://www.netlify.com/)
2. Sign up for a free account
3. Drag and drop your project folder onto the Netlify dashboard
4. Your site will be deployed instantly with a random URL
5. You can customize the URL in site settings

#### Method B: Git Integration

1. Connect your GitHub repository to Netlify
2. Configure build settings (leave blank - no build needed)
3. Deploy branch: main
4. Netlify will auto-deploy on every push

### Option 3: Vercel

Vercel provides instant deployment for static sites.

1. Visit [vercel.com](https://vercel.com/)
2. Sign up and connect your GitHub account
3. Import your repository
4. No build configuration needed
5. Deploy

### Option 4: Traditional Web Hosting

Upload files via FTP to any web hosting service:

1. Connect to your hosting via FTP client (like FileZilla)
2. Upload all project files to your `public_html` or `www` directory
3. Ensure `index.html` is in the root directory
4. Your site will be live at your domain

## Custom Domain

### For GitHub Pages:

1. In repository Settings > Pages
2. Add your custom domain
3. Update DNS records at your domain registrar:
   - Add a CNAME record pointing to `[username].github.io`

### For Netlify/Vercel:

1. Go to Domain Settings in your project
2. Add your custom domain
3. Follow the DNS configuration instructions provided

## Post-Deployment Configuration

### Update Contact Email

Replace the placeholder email in `contact.html`:
```html
foundation.scholars@wmich.edu
```

### Connect Forms (Optional)

The contact and newsletter forms currently show success messages without sending data. To make them functional:

#### Option A: Use a Form Service

1. **Formspree** (formspree.io)
   - Free tier available
   - Add their endpoint to your form action
   
2. **Netlify Forms** (if using Netlify)
   - Add `netlify` attribute to forms
   - Forms will appear in Netlify dashboard

3. **EmailJS** (emailjs.com)
   - Free tier available
   - Send emails directly from JavaScript

#### Option B: Custom Backend

Create a backend API endpoint to handle form submissions and integrate it with the JavaScript files.

### Add Analytics (Optional)

1. **Google Analytics**
   - Create a GA property
   - Add tracking code to all HTML pages before `</head>`

2. **Plausible** (privacy-friendly alternative)
   - Add their script to your pages

## Content Updates

### Adding News Articles

Edit `newsletter.html` and add new articles in this format:

```html
<article class="newsletter-post">
    <div class="post-header">
        <div class="post-date">Date Here</div>
        <span class="post-category">Category</span>
    </div>
    <h4>Article Title</h4>
    <p>Article content...</p>
</article>
```

### Adding Network Members

Edit `network.html` and add member cards:

```html
<div class="member-card">
    <div class="member-avatar">XY</div>
    <div class="member-info">
        <h4>Member Name</h4>
        <p class="member-title">Major, Class Year</p>
        <p class="member-status">Status</p>
    </div>
</div>
```

## Maintenance

### Regular Updates

1. Update news and events monthly
2. Add new scholar profiles as they join
3. Archive old newsletter posts annually
4. Keep contact information current

### Performance Optimization

The site is already optimized for performance:
- Minimal CSS and JavaScript
- No external dependencies except Google Fonts
- Mobile-responsive design
- Fast loading times

### Security

- No server-side code = minimal security concerns
- Use HTTPS (provided by GitHub Pages, Netlify, Vercel)
- Keep contact form protected from spam with services like reCAPTCHA if needed

## Troubleshooting

### Site not loading

- Check that `index.html` is in the root directory
- Verify all file paths are correct (relative paths used)
- Check browser console for errors

### Forms not working

- Verify JavaScript files are loading
- Check browser console for errors
- Ensure form service is properly configured

### Styling issues

- Clear browser cache
- Check that `styles/main.css` is loading
- Verify CSS file path is correct

## Support

For issues or questions about the website:
- Check the repository README
- Review this deployment guide
- Contact the website administrator

## Future Enhancements

Consider adding:
- Image gallery for events
- Member photo uploads
- Blog functionality
- Event calendar
- Password-protected member area
- Integration with social media

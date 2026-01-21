# Professional Portfolio Website

A modern, professional portfolio website showcasing top 5 projects and skills. Built with pure HTML, CSS, and JavaScript - **no build process required!**

## 🚀 Quick Start

### Option 1: Open Directly in Browser
1. **Double-click** `index.html` file
2. Your portfolio opens in your default browser!
3. That's it! No installation needed.

### Option 2: Using Live Server (Recommended)
If you have VS Code:
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Portfolio opens at `http://localhost:5500`

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with glassmorphism effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Pure HTML/CSS/JS, loads instantly
- 🎭 **Smooth Animations** - CSS animations and transitions
- 🌈 **Beautiful Gradients** - Modern color schemes
- 📦 **Top 5 Projects** - Showcase your best work with modals
- 💼 **Skills Section** - Animated progress bars
- 📧 **Contact Form** - Easy way for visitors to reach out
- 🔍 **Interactive Modals** - Click projects to see details

## 📁 File Structure

```
PROPORTFOLIO/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🎨 Customization

### Update Your Projects
Edit the `projects` array in `script.js`:

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Title",
        description: "Short description",
        longDescription: "Detailed description...",
        technologies: ["React", "Node.js"],
        image: "your-image-url.jpg",
        githubUrl: "https://github.com/your-repo",
        liveUrl: "https://your-live-site.com"
    },
    // Add more projects...
];
```

### Update Your Skills
Edit the skills section in `index.html` (search for "Skills Section") to modify skill categories and levels.

### Update Contact Information
Edit the contact section in `index.html`:
- Email addresses
- Phone numbers
- Social media links
- Location

### Update Personal Information
Edit these sections in `index.html`:
- Hero section: Name, title, description
- About section: Bio text, profile image
- Social links throughout the page

### Change Colors
Edit CSS variables in `styles.css` at the top:

```css
:root {
    --primary-blue: #0ea5e9;
    --primary-purple: #a855f7;
    --primary-pink: #ec4899;
    /* ... more colors ... */
}
```

## 🌐 Deploying Your Portfolio

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live at `username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Site is live instantly!

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

### Option 4: Any Web Hosting
Just upload all files (index.html, styles.css, script.js) to your web hosting service!

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎯 Sections

1. **Hero** - Eye-catching introduction
2. **About** - Personal information and highlights
3. **Skills** - Technical skills with progress bars
4. **Projects** - Top 5 projects showcase
5. **Contact** - Contact form and information
6. **Footer** - Simple footer

## 💡 Tips

- Replace placeholder images with your own project screenshots
- Update all placeholder links (GitHub, LinkedIn, etc.)
- Customize the color scheme to match your brand
- Add your real projects and update descriptions
- Test on mobile devices
- Validate your HTML/CSS if needed

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

- Font Awesome icons
- Unsplash for placeholder images (replace with your own!)
- Modern CSS techniques (Grid, Flexbox, CSS Variables)

---

**Need help?** All code is well-commented and easy to customize. Just open the files and start editing!

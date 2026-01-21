# How to Add Your Own Images

## Step 1: Add Your Profile Image

1. **Place your profile photo** in the `images` folder
   - Recommended name: `profile.jpg` or `profile.png`
   - Recommended size: 600x600 pixels or larger (square works best)
   - File formats: JPG, PNG, or WebP

2. **The image path is already set** in `index.html`:
   ```html
   <img src="images/profile.jpg" alt="Profile">
   ```
   - Just make sure your image filename matches (or update the filename in the code)

## Step 2: Add Project Images (Optional)

1. **Place your project screenshots** in the `images` folder
   - Recommended names: `project1.jpg`, `project2.jpg`, etc.
   - Recommended size: 800x600 pixels or larger
   - File formats: JPG, PNG, or WebP

2. **Update `script.js`** - Change the `image` property for each project:
   ```javascript
   {
       id: 1,
       title: "Your Project",
       // ... other properties
       image: "images/project1.jpg",  // Change this line
   }
   ```

## Quick Reference

### Profile Image Location:
- **File**: `index.html`
- **Line**: Around line 82
- **Current**: `src="images/profile.jpg"`
- **Action**: Add your photo as `/pimagesrofile.jpg`

### Project Images Location:
- **File**: `script.js`
- **Section**: `projects` array (lines 2-53)
- **Property**: `image: "images/project1.jpg"`
- **Action**: Add your project screenshots and update the paths

## Image Tips

- **Optimize your images** - Use tools like TinyPNG to reduce file size
- **Use consistent sizing** - Similar dimensions look better
- **Keep file sizes reasonable** - Under 500KB per image for faster loading
- **Square images work best** for profile photos
- **Wide images (16:9 or 4:3)** work best for project screenshots

## Current Image Structure

```
PROPORTFOLIO/
├── images/
│   ├── profile.jpg      ← Your profile photo here
│   ├── project1.jpg     ← Project 1 screenshot (optional)
│   ├── project2.jpg     ← Project 2 screenshot (optional)
│   └── ...              ← More project images
├── index.html
├── styles.css
└── script.js
```

## Need Help?

If your image isn't showing:
1. Check the filename matches exactly (case-sensitive on some systems)
2. Make sure the image is in the `images` folder
3. Check the file path in the code matches your filename
4. Try using `.jpg` instead of `.jpeg` or vice versa

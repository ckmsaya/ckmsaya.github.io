# Quick Start Guide - How to Review Your Portfolio

## Step 1: Install Node.js (if not already installed)

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version
   - Choose the Windows Installer (.msi) for your system (64-bit recommended)

2. **Install Node.js:**
   - Run the installer
   - Follow the installation wizard (use default settings)
   - Make sure "Add to PATH" is checked
   - Complete the installation

3. **Verify Installation:**
   - Open a NEW terminal/PowerShell window
   - Run these commands to verify:
     ```bash
     node --version
     npm --version
     ```
   - You should see version numbers for both

## Step 2: Install Project Dependencies

1. **Open Terminal/PowerShell in the project folder:**
   - Navigate to: `C:\Users\THATO\Downloads\PROPORTFOLIO`
   - Or right-click in the folder and select "Open in Terminal"

2. **Install dependencies:**
   ```bash
   npm install
   ```
   - This will take 1-2 minutes to download all required packages
   - Wait for it to complete (you'll see "added X packages" message)

## Step 3: Start the Development Server

Run this command:
```bash
npm run dev
```

You should see output like:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## Step 4: View Your Portfolio

1. **Open your web browser** (Chrome, Firefox, Edge, etc.)
2. **Navigate to:** `http://localhost:5173/`
3. **Your portfolio will load!**

You can now:
- Scroll through all sections
- Click on projects to see details
- Test the contact form
- View it on different screen sizes by resizing your browser

## Troubleshooting

### If `npm install` fails:
- Make sure you have Node.js installed (Step 1)
- Try closing and reopening your terminal
- Make sure you're in the correct folder

### If the server doesn't start:
- Check if port 5173 is already in use
- Try closing other applications that might use that port
- Restart your terminal and try again

### To stop the development server:
- Press `Ctrl + C` in the terminal

## Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any web hosting service!

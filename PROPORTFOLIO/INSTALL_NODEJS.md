# Install Node.js to Run Your Portfolio

## ⚠️ Node.js is NOT installed on your system

You need to install Node.js before you can run `npm run dev`.

## Quick Installation Steps:

### 1. Download Node.js
- **Direct Link:** https://nodejs.org/
- Click the green **"LTS"** button (recommended version)
- This downloads the Windows installer

### 2. Install Node.js
1. Run the downloaded `.msi` file
2. Click "Next" through the installer
3. **Important:** Make sure "Add to PATH" option is checked ✓
4. Click "Install"
5. Wait for installation to complete
6. Click "Finish"

### 3. Restart Your Terminal
- **Close this PowerShell/Command Prompt window**
- Open a **NEW** PowerShell or Command Prompt window
- Navigate back to your project folder:
  ```powershell
  cd C:\Users\THATO\Downloads\PROPORTFOLIO
  ```

### 4. Verify Installation
Run these commands to verify Node.js is installed:
```powershell
node --version
npm --version
```
You should see version numbers (like v20.x.x and 10.x.x)

### 5. Install Dependencies & Run
Once Node.js is installed, run these commands:
```powershell
npm install
npm run dev
```

## Alternative: Use nvm-windows (Optional)
If you prefer a Node.js version manager:
- Download from: https://github.com/coreybutler/nvm-windows/releases
- Install nvm, then install Node.js through it

---
**After installing Node.js, come back and run `npm install` then `npm run dev`!**

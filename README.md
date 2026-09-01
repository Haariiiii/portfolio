# Harigovind P — Personal Portfolio Website

A modern, premium personal portfolio website for **Harigovind P**, Computer Science & Engineering graduate specializing in **Data Science, Machine Learning, Computer Vision, and Artificial Intelligence**.

Built with **Vite**, **React**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The production bundle will be generated inside the `dist/` directory.

---

## 🖼️ How to Add / Change Your Profile Image

1. Prepare your profile photo (`.jpg` or `.png`).
2. Name it **`profile.jpg`**.
3. Place it inside the **`public/`** directory (`public/profile.jpg`).
4. Alternatively, if your photo has a different filename or format (e.g. `/my-photo.png`), edit line 17 of `src/data/portfolioData.js`:
   ```js
   profileImage: "/my-photo.png",
   ```
5. The portfolio automatically displays your image with fallback initials (`HP`) if the photo is missing.

---

## ⚙️ Easy Customization & Data Editing

All portfolio content is centralized inside a single file:
👉 **`src/data/portfolioData.js`**

### What you can edit in `portfolioData.js`:
- **Personal Info & Image**: Name, Headline, Bio, Profile Image path, Email, Location
- **Social Links**: GitHub, LinkedIn, Email URL
- **Formspree / EmailJS Endpoint**: Replace `formspreeEndpoint` with your active form endpoint ID.
- **About Narrative**: Paragraphs and key points
- **Skills**: Categories, skill lists, and technology icons
- **Projects**: Add, remove, or update project cards, YOLO11 metrics, descriptions, GitHub repos, and live demo links
- **Education & Experience**: B.Tech CGPA, dates, courses, and job timeline
- **Certifications**: Title, issuer, year, and verification URLs

---

## 📄 Updating Your Resume PDF

1. Prepare your resume in PDF format.
2. Name it **`resume.pdf`**.
3. Place it inside the **`public/`** folder (`public/resume.pdf`).
4. All "Download Resume" buttons throughout the portfolio automatically link to this file!

---

## 🌐 Deploying to Vercel

### Option 1: Deploy via GitHub (Recommended)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Deploying Harigovind P Portfolio"
   ```
2. Push your code to your GitHub account repository.
3. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
4. Import your GitHub repository. Vercel auto-detects Vite configuration!
5. Click **"Deploy"**.

### Option 2: Deploy directly via Vercel CLI
Run the following command directly in your terminal:
```bash
npx vercel
```
Follow the interactive prompts to deploy directly to Vercel in seconds!

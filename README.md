# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Material-UI. This project showcases professional experience, education, and certifications in a clean, user-friendly interface.

## Features

- 🎨 Responsive Material-UI design
- 🌙 Dark mode support
- 📱 Mobile-friendly layout
- ⚡ Fast page loads with Next.js
- 📊 Timeline-based experience display
- 🎓 Education and certification sections

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **UI Library:** Material-UI (MUI) v6
- **Styling:** Emotion
- **Font:** Poppins (Google Fonts)
- **Development Tools:** ESLint, TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/saulodias/my-resume.git
cd my-resume
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── data/            # Portfolio data
├── types/           # TypeScript type definitions
└── theme.ts         # MUI theme configuration
```

## Customization

1. Update your portfolio data in `src/data/portfolio.ts`
2. Modify the theme in `src/theme.ts`
3. Add your profile picture to the public directory
4. Customize components in the `src/components` directory

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```
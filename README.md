# Eurikaa Landing Page

This is the official landing page for Eurikaa, a location-driven social application. This project is built with [Next.js](https://nextjs.org/) and showcases the core concepts and features of the Eurikaa app.

## Overview

Eurikaa aims to revolutionize how people connect with places by making every shared experience a discoverable destination. This landing page provides information about the problem Eurikaa solves, its key features, and calls to action for users to download the app.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v14+ with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Font:** Rubik (via `next/font/google`)
*   **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

The project follows a standard Next.js App Router structure:

```
.
├── public/                 # Static assets (images, fonts, etc.)
├── src/
│   ├── app/                # Main application directory
│   │   ├── page.tsx        # Entry point and main page content
│   │   ├── layout.tsx      # Root layout
│   │   ├── globals.css     # Global styles
│   │   └── favicon.ico     # Application favicon
│   └── components/         # Reusable React components
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── ProblemSolution.tsx
│       ├── FeatureShowcase.tsx
│       ├── SocialProof.tsx
│       ├── CtaSection.tsx
│       └── Footer.tsx
├── next.config.ts          # Next.js configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## Components

The landing page is built using the following main components found in `src/components/`:

*   **Navbar:** Displays the application logo and potential navigation links.
*   **HeroSection:** The main introductory section with a headline, description, and app download badges.
*   **ProblemSolution:** Explains the problem Eurikaa addresses and how it offers a solution.
*   **FeatureShowcase:** Highlights key features of the Eurikaa app, such as precise location tagging, benefits for mobile vendors, explorers, and travel influencers.
*   **SocialProof:** A section for testimonials, community information, and potential partner logos (currently placeholders).
*   **CtaSection:** Contains a final call to action for downloading the app.
*   **Footer:** Includes links for navigation, legal information, app badges, and copyright details.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm, yarn, or pnpm

### Installation & Running

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the main page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Key Features Highlighted

*   **Location-Centric Social Experience:** Emphasizes precise GPS tagging for posts.
*   **Target User Groups:** Caters to travel influencers, mobile vendors, and explorers.
*   **Content Monetization:** Suggests opportunities for influencers.
*   **Community Building:** Aims to connect people through shared places and interests.

## Learn More (Next.js)

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

'use client';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ProblemSolution from '@/components/ProblemSolution';
import FeatureShowcase from '@/components/FeatureShowcase';
import SocialProof from '@/components/SocialProof';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={rubik.className + ' font-sans bg-gray-50 text-gray-800'}> {/* Apply Rubik class */}
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Problem/Solution Statement */}
      <ProblemSolution />

      {/* Feature Showcases */}
      <FeatureShowcase />

      {/* Social Proof & Credibility Builders */}
      <SocialProof />

      {/* Reinforcing Calls-to-Action (CTAs) */}
      <CtaSection />

      {/* Footer */}
      <Footer />

      {/* Basic CSS for animations - could be in a global CSS file */}
      {/* It's generally better to put global CSS in a dedicated CSS file */}
      <style jsx global>{`
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

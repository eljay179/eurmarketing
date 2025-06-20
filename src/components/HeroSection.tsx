import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero-section bg-gradient-to-br from-blue-600 to-purple-700 text-white min-h-screen flex items-center p-8 sm:p-12 font-inter relative overflow-hidden">
      {/* Abstract background shapes/gradients for visual interest */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Image on the left - Enhanced for modern appeal */}
        <div className="flex justify-center md:justify-end">
          
          
          <Image
            src="/iPhone 14 Pro - Clay.png"
            alt="Eurikaa Home Screen"
 width={500}
 height={800}
            className="w-full max-w-sm lg:max-w-md h-auto object-contain rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text content on the right - Modernized Typography and Layout */}
        <div className="text-center md:text-left p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-down">
            Eurikaa: Where every post becomes a <span className="text-yellow-300">destination</span>.
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl md:max-w-none mx-auto animate-fade-in-up">
            Eurikaa is a location-driven social app designed for mobile vendors, travel
            influencers, and explorers, providing an optimized platform for
            connecting people through place. Unlike traditional social media,
            it puts location at the heart of content and discovery, making
            every place a connection point.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600 mt-10">
            {/* App Store Button - now using the badge image */}
            <a href="#download-app-store"> {/* Placeholder link */}
              <Image
                src="/AppStoreBadge.svg" // Placeholder for AppStoreBadge.svg
                alt="Download on the App Store"
                width={160}
                height={48}
                className="h-auto transform transition-transform duration-300 hover:scale-105" // Maintain hover effect
              />
            </a>
            {/* Google Play Button - now using the badge image */}
            <a href="#download-google-play"> {/* Placeholder link */}
              <Image
                src="/GooglePlayBadge.png" // Placeholder for GooglePlayBadge.png
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="h-auto transform transition-transform duration-300 hover:scale-105" // Maintain hover effect
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

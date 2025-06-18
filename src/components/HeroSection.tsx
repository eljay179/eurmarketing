'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero-section bg-[url('/hero-background.png')] bg-cover bg-center text-gray-800 min-h-screen flex items-center p-8 sm:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image on the left */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/wb-home.png"
            alt="Eurikaa Home Screen"
            width={384}
            height={700}
          />
        </div>

        {/* Text content on the right */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-3xl md:text-4xl  mb-6 leading-tight animate-fade-in-down">
            Eurikaa: Where every post becomes a destination.
          </h1>
          <p className="text-lg sm:text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up">
            Eurikaa is a location-driven social app designed for travel
            influencers, mobile vendors, and explorers, providing an optimized
            platform for connecting people through place. Unlike traditional
            social media, it puts location at the heart of content and
            discovery, making every place a connection point.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600">
            <a href="#download-eurikaa">
              <Image
                src="/AppStoreBadge.svg"
                alt="Download on the App Store"
                width={160}
                height={48}
                style={{ height: 'auto' }}
              />
            </a>
            <a href="#download-eurikaa">
              <Image
                src="/GooglePlayBadge.png"
                alt="Get it on Google Play"
                width={160}
                height={48}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
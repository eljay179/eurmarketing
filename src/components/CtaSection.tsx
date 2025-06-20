import React from 'react';
import Image from 'next/image';

const CtaSection: React.FC = () => {
  return (
    <section className="cta-section py-16 sm:py-24 px-6 bg-gradient-to-br from-indigo-700 to-purple-800 text-white font-inter relative overflow-hidden rounded-2xl mx-auto max-w-6xl shadow-2xl">
      {/* Abstract background shapes/gradients for visual interest */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Modernized Logo Placement */}
        <Image
          src="/Eurikaa Main Light.png"
          alt="Eurikaa Logo"
          width={120} // Adjust width as needed
          height={40} // Adjust height as needed based on aspect ratio
          className="mx-auto mb-8" // Added margin bottom for spacing
        />        
        
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Explore with <span className="text-blue-300">Eurikaa</span>?
        </h2>
        <p className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Download Eurikaa today and start transforming your posts into engaging, discoverable destinations.
          Connect with the world in a whole new, location-based way.
        </p>
        
        {/* Action Buttons - Modernized with consistent styling */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 sm:space-x-6">
          <a
            href="#download-app-store" // Replace with actual App Store link
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
          >
            {/* Replaced AppStoreBadge with a styled button and placeholder icon */}
            <svg className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.5 16.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm7-2c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-3.5 4c-1.657 0-3-1.343-3-3v-7c0-1.657 1.343-3 3-3s3 1.343 3 3v7c0 1.657-1.343 3-3 3z"/>
            </svg>
            Download on the App Store
          </a>
          <a
            href="#download-google-play" // Replace with actual Google Play link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
          >
            {/* Replaced GooglePlayBadge with a styled button and placeholder icon */}
            <svg className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:-rotate-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21.05 12L15.9 7.05v9.9L21.05 12zm-8.6-4.55L4.5 3.75V20.25L12.45 15.45z"/>
            </svg>
            Get it on Google Play
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

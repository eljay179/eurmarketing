import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    quote: "eurikaa has transformed how I discover local gems! As a mobile vendor, finding new spots to set up has never been easier. Highly recommend!",
    author: "Maria S.",
    title: "Mobile Vendor"
  },
  {
    id: 2,
    quote: "As a travel influencer, authentic experiences are key. eurikaa connects me with unique, location-based adventures that truly stand out.",
    author: "David L.",
    title: "Travel Influencer"
  },
  {
    id: 3,
    quote: "I love exploring new places, and eurikaa makes it so simple to find hidden treasures around me. It's my go-to app for local discovery!",
    author: "Sarah J.",
    title: "Everyday Explorer"
  },
  {
    id: 4,
    quote: "The community aspect of eurikaa is fantastic. It's more than just an app; it's a way to connect with others who love to explore.",
    author: "Omar K.",
    title: "Community Member"
  }
];

const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous testimonial
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, [currentIndex]); // Restart interval if current index changes (e.g., manual navigation)

  return (
    <section className="social-proof-section py-16 sm:py-24 px-6 bg-gray-50 font-inter overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Hear From Our Community</h2>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          eurikaa is connecting millions of mobile vendors, travel influencers, and everyday explorers to authentic, location-based experiences.
        </p>

        {/* Testimonial Carousel Container */}
        {/* Added perspective to the container for 3D transforms */}
        <div className="relative w-full max-w-2xl mx-auto h-[300px] flex justify-center items-center perspective-1000">
          {testimonials.map((testimonial, index) => {
            let positionClass = '';
            let zIndex = 0;
            let transformStyle = {};
            let opacityClass = 'opacity-0'; // Default to hidden

            // Calculate distance from current index, handling wrap-around for a continuous loop
            const total = testimonials.length;
            let distance = index - currentIndex;

            // Adjust distance for seamless looping
            if (distance > total / 2) {
              distance -= total;
            } else if (distance < -total / 2) {
              distance += total;
            }

            // Determine position, Z-index, and visibility based on distance
            if (index === currentIndex) {
              // Active card
              positionClass = 'relative z-30';
              zIndex = 30;
              transformStyle = { transform: 'translateX(0%) translateY(0px) scale(1) rotateY(0deg)' };
              opacityClass = 'opacity-100';
            } else if (distance === 1) {
              // Card immediately to the right of current
              positionClass = 'absolute z-20 top-0 left-0 w-full';
              zIndex = 20;
              transformStyle = { transform: 'translateX(15%) translateY(10px) scale(0.95) rotateY(-8deg)' };
            } else if (distance === -1) {
              // Card immediately to the left of current
              positionClass = 'absolute z-20 top-0 left-0 w-full';
              zIndex = 20;
              transformStyle = { transform: 'translateX(-15%) translateY(10px) scale(0.95) rotateY(8deg)' };
            } else if (distance === 2) {
                // Second card to the right
                positionClass = 'absolute z-10 top-0 left-0 w-full';
                zIndex = 10;
                transformStyle = { transform: 'translateX(30%) translateY(20px) scale(0.9) rotateY(-15deg)' };
            } else if (distance === -2) {
                // Second card to the left
                positionClass = 'absolute z-10 top-0 left-0 w-full';
                zIndex = 10;
                transformStyle = { transform: 'translateX(-30%) translateY(20px) scale(0.9) rotateY(15deg)' };
            } else {
              // Far-off cards, hide them fully
              positionClass = 'hidden'; // Ensure cards far away are not rendered
              zIndex = 0;
            }

            return (
              <div
                key={testimonial.id}
                // transition-all for smooth movement, backface-hidden to prevent seeing the back during rotation
                className={`testimonial-card-wrapper absolute w-full top-0 left-0 transition-all duration-700 ease-in-out ${opacityClass} ${positionClass} backface-hidden`}
                style={{
                  ...transformStyle,
                  zIndex: zIndex,
                  transformOrigin: 'center center' // Ensure consistent transform origin for rotation
                }}
              >
                <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-200 min-h-[200px] flex flex-col justify-center items-center">
                  <blockquote className="text-xl sm:text-2xl italic text-gray-700 leading-relaxed mb-6">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="text-gray-900 font-semibold text-lg">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm mt-1">{testimonial.title}</div>
                </div>
              </div>
            );
          })}

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 z-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 z-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300
                  ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

import React from 'react'; // Import React as this is a React component
import { MapPin, Users, Clock, Share2, Sparkles } from 'lucide-react';
import Image from 'next/image';

const FeatureShowcase: React.FC = () => {
  return (
    <section className="feature-showcase-section py-16 sm:py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800">
          Discover the Power of <span className="text-blue-600">Eurikaa</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

          {/* Feature 1: Pinpoint Navigation: Guide Customers Directly to You */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <MapPin className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Pinpoint Navigation: Guide Customers Directly to You</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Stop losing customers to the scroll. Eurikaa provides <span className="font-bold">ultra-precise directions</span> (within 3 meters) directly to your physical stand. This means more foot traffic, more sales, and less time wasted trying to explain your location. Get customers to your stand, not just your feed, and watch your engagement soar.
            </p>
            {/* Replaced Next.js Image component with a standard <img> tag */}
            <Image
              src="https://placehold.co/400x225/e9d5ff/333333?text=Precise+Map+View"
              alt="Precise Map View"
              width={400}
              height={225}
              className="rounded-lg shadow-md mx-auto w-full h-auto" // Added w-full h-auto for responsiveness
            />
          </div>

          {/* Feature 2: Local Discovery: Reach New Customers Near You */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Local Discovery: Reach New Customers Near You</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Expand your reach far beyond your current followers. Eurikaa automatically <span className="font-bold">broadcasts your posts to every potential customer</span> within a 10-mile radius, even if they haven&apos;t discovered you yet. This powerful <span className="font-bold">local discovery feature</span> puts your stand in front of thousands of new eyes, driving organic growth and attracting a wider audience.
            </p>
            {/* Replaced Next.js Image component with a standard <img> tag */}
            <Image
              src="https://placehold.co/400x225/a5b4fc/333333?text=Local+Discovery"
              alt="Local Discovery"
              width={400}
              height={225}
              className="rounded-lg shadow-md mx-auto w-full h-auto" // Added w-full h-auto for responsiveness
            />
          </div>

          {/* Feature 3: Real-Time Availability: Customers Always Know When to Find You */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Clock className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Real-Time Availability: Customers Always Know When to Find You</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Never miss a customer again due to outdated information. Eurikaa allows you to <span className="font-bold">instantly publish and update your hours of operation</span>, special events, and availability in real-time. Your customers will always know exactly when and where to find you, leading to improved customer satisfaction and consistent business.
            </p>
            {/* Replaced Next.js Image component with a standard <img> tag */}
            <Image
              src="https://placehold.co/400x225/818cf8/333333?text=Hours+of+Operation"
              alt="Hours of Operation"
              width={400}
              height={225}
              className="rounded-lg shadow-md mx-auto w-full h-auto" // Added w-full h-auto for responsiveness
            />
          </div>

          {/* Feature 4: Unified Social Sharing: Post Once, Reach Everywhere */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Share2 className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Unified Social Sharing: Post Once, Reach Everywhere</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Stop the multi-platform juggling act. With Eurikaa&apos;s <span className="font-bold">integrated social sharing</span>, you post once, and we&apos;ll automatically share it across your other connected social media accounts. Keep your entire audience in the loop effortlessly, saving you time and ensuring your message reaches every follower, everywhere.
            </p>
            {/* Replaced Next.js Image component with a standard <img> tag */}
            <Image
              src="https://placehold.co/400x225/c4b5fd/333333?text=Social+Sharing"
              alt="Social Sharing"
              width={400}
              height={225}
              className="rounded-lg shadow-md mx-auto w-full h-auto" // Added w-full h-auto for responsiveness
            />
          </div>

        </div>

        {/* Key App Functionalities Sub-section */}
        <div className="mt-16 pt-10 border-t border-gray-300">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">More Unique Features</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-700">
            {[
              "Self-Curated Home Screen: Filter by Interests, Near Me, People, Location.",
              "Events: Discover and share time-sensitive 'WhereAbouts'.",
              "Groups: Connect with others who share your passions.",
              "AI-Powered Enhancements: Improve stories and images.",
              "Cross-Platform Sharing: Easily share Eurikaa posts.",
              "Offline Posting: Share your adventures even without connection."
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-md">
                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;

 'use client'

import { Apple, Play, MapPin, Users, BarChart, Lightbulb, MessageCircle, Sparkles } from 'lucide-react';
import { Rubik } from 'next/font/google'; // Import Rubik font

const rubik = Rubik({ subsets: ['latin'] }); // Initialize Rubik font
export default function Home() {
  return (
    <div className={rubik.className + ' font-sans bg-gray-50 text-gray-800'}> {/* Apply Rubik class */}
      {/* Hero Section */}
      <section className="hero-section bg-[url('/hero-background.png')] bg-cover bg-center text-gray-800 min-h-screen flex items-center p-8 sm:p-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image on the left */}
          <div className="flex justify-center md:justify-end">
            <img src="/wb-home.png" alt="Eurikaa Home Screen" className="w-full max-w-sm" />
          </div>

          {/* Text content on the right */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-3xl md:text-4xl  mb-6 leading-tight animate-fade-in-down">
              Eurikaa: Where every post becomes a destination.
            </h1>
            <p className="text-lg sm:text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up">
              Eurikaa is a location-driven social app designed for travel influencers, mobile vendors, and explorers,
              providing an optimized platform for connecting people through place. Unlike traditional social media,
              it puts location at the heart of content and discovery, making every place a connection point.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600">
              <a href="#download-eurikaa">
 <img src="/AppStoreBadge.svg" alt="Download on the App Store" className="w-40 h-auto" />
              </a>
              <a href="#download-eurikaa">
 <img src="/GooglePlayBadge.png" alt="Get it on Google Play" className="w-40 h-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Statement */}
      <section className="problem-solution-section py-16 sm:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Bringing Your Stories to Life
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We enjoy sharing our experiences by taking pictures and short videos, and posting our stories for our friends, family, and followers.
            However, one essential element is missing to truly bring these stories to life: <strong className="text-blue-600">Precise Location.</strong>
          </p>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-600">
            Introducing Eurikaa: Your World, Precisely Mapped.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every post is linked to a precise GPS location. Why is precise location important?
            It elevates an image into a destination, builds personal connections by enabling viewers to envision themselves in that moment,
            and transforms a post into an invitation, enabling others to follow in your footsteps.
          </p>
        </div>
      </section>

      {/* Feature Showcases */}
      <section className="feature-showcase-section py-16 sm:py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800">
            Discover the Power of <span className="text-blue-600">Eurikaa</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                    
            {/* Feature 1: Precise Location Tagging */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <MapPin className="w-12 h-12 text-purple-600 mb-4" />
              
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Every Post, A Precise Destination.</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Every post is linked to a precise GPS location. Share your exact spot and let others discover the world through your eyes.
                Turn your photos and videos into findable experiences.
              </p>
              <img
                src="https://placehold.co/400x225/e9d5ff/333333?text=Precise+Map+View"
                alt="Precise Map View"
                className="rounded-lg shadow-md mx-auto"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x225/cccccc/333333?text=Image+Not+Found')}
              />
            </div>

            {/* Feature 2: For Mobile Vendors */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <BarChart className="w-12 h-12 text-purple-600 mb-4" />
              
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Connect With Customers, Where You Are.</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Drive more customers to your location by notifying followers where you are or will be. Make it easy for customers to find you daily,
                see current offerings, and get updates on specials.
              </p>
              <img
                src="https://placehold.co/400x225/a5b4fc/333333?text=Mobile+Vendor+Scenario"
                alt="Mobile Vendor Scenario"
                className="rounded-lg shadow-md mx-auto"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x225/cccccc/333333?text=Image+Not+Found')}
              />
            </div>

            {/* Feature 3: For Explorers */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
              
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Discover Places, Share Your Journey.</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Share your adventures with precision, turning ordinary posts into immersive stories tied to exact locations.
                Discover hidden gems and connect with like-minded individuals.
              </p>
              <img
                src="https://placehold.co/400x225/818cf8/333333?text=Explorer+Adventure"
                alt="Explorer Adventure"
                className="rounded-lg shadow-md mx-auto"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x225/cccccc/333333?text=Image+Not+Found')}
              />
            </div>


            {/* Feature 4: For Travel Influencers */}
            <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Share Adventures, Monetize Discoveries.</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Empower your travel stories with exact locations. Give your followers a richer, more immersive experience and enable them to follow in your footsteps.
                Unlock new monetization opportunities.
              </p>
              <img
                src="https://placehold.co/400x225/c4b5fd/333333?text=Travel+Influencer+Lifestyle"
                alt="Travel Influencer Lifestyle"
                className="rounded-lg shadow-md mx-auto"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x225/cccccc/333333?text=Image+Not+Found')}
              />
            </div>

            
          </div>

          {/* Key App Functionalities Sub-section */}
          <div className="mt-16 pt-10 border-t border-gray-300">
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">More Unique Features</h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-700">
              {
                [
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

      {/* Social Proof & Credibility Builders */}
      <section className="social-proof-section py-16 sm:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Join a Growing Community</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Eurikaa is tapping into a vibrant market of millions of travel influencers, mobile vendors,
            and everyday explorers seeking authentic, location-based experiences.
          </p>
          {/* Placeholder for Testimonials */}
          <div className="italic text-gray-500 mb-6">
            <p>"Hear from our early adopters soon!"</p>
            <p>"See what Eurikaa users will be saying..."</p>
          </div>
          {/* Placeholder for "As Seen In" / Partner Logos */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Future Partners & Collaborators</h3>
            <div className="flex justify-center items-center space-x-6 grayscale opacity-75">
              <img src="https://placehold.co/120x60/cccccc/333333?text=Partner+1" alt="Partner Logo 1" className="h-10 sm:h-12" />
              <img src="https://placehold.co/120x60/cccccc/333333?text=Partner+2" alt="Partner Logo 2" className="h-10 sm:h-12" />
              <img src="https://placehold.co/120x60/cccccc/333333?text=Partner+3" alt="Partner Logo 3" className="h-10 sm:h-12" />
            </div>
            <p className="text-sm text-gray-500 mt-2">(Partnering with food truck associations and more!)</p>
          </div>
        </div>
      </section>

      {/* Reinforcing Calls-to-Action (CTAs) */}
      <section className="cta-section py-16 sm:py-24 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Explore with Eurikaa?</h2>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed">
            Download Eurikaa today and start turning your posts into destinations.
            Connect with the world in a whole new way.
          </p>
           <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#download-eurikaa-final" // Replace with actual App Store link
            >
 <img src="/AppStoreBadge.svg" alt="Download on the App Store" className="w-40 h-auto" />            </a>
            <a
              href="#download-eurikaa-final" // Replace with actual Google Play link
            >
              <img src="GooglePlayBadge.png" alt="Get it on Google Play" className="w-40 h-auto" />
            </a>
          </div>
        </div>
      </section>

      

     
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 sm:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Eurikaa / Parallel Zero */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Eurikaa by Parallel Zero</h3>
              <p className="text-sm leading-relaxed">
                Revolutionizing how people connect with places, turning every shared experience into a discoverable destination.
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold">Founders:</p>
                <p className="text-xs">Timothy Hill (CEO), Shawn Branstetter (CPO), Randa Fahmy (CTO)</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#hero" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                {/* Add About Us page link if it exists */}
                <li><a href="mailto:info@eurikaa.com" className="hover:text-blue-400 transition-colors">Contact Us (info@eurikaa.com)</a></li>
              </ul>
            </div>

            {/* Legal & App Badges */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Get the App</h3>
              <div className="flex space-x-3 mb-4">
                 <a href="#app-store-footer">
 <img src="/AppStoreBadge.svg" alt="Download on the App Store" className="h-10 rounded" />
                 </a>
                 <a href="#google-play-footer">
 <img src="/GooglePlayBadge.png" alt="Get it on Google Play" className="h-10 rounded" />
                 </a>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 mt-4">Legal</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links Placeholder */}
          <div className="text-center border-t border-gray-700 pt-8">
            <p className="text-sm mb-3">Follow us on social media (links coming soon!)</p>
            {/* <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-400"><MessageCircle className="w-6 h-6" /></a> Placeholder Icon
            </div>
            */}
            <p className="text-xs mt-4">
              &copy; {new Date().getFullYear()} Parallel Zero. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
       {/* Basic CSS for animations - could be in a global CSS file */}
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


import Image from 'next/image';
import { MapPin, Users, BarChart, Lightbulb, Sparkles } from 'lucide-react';

const FeatureShowcase: React.FC = () => {
 return (
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
 <Image
 src="https://placehold.co/400x225/e9d5ff/333333?text=Precise+Map+View"
 alt="Precise Map View"
 width={400}
 height={225}
 className="rounded-lg shadow-md mx-auto"
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
 <Image
 src="https://placehold.co/400x225/a5b4fc/333333?text=Mobile+Vendor+Scenario"
 alt="Mobile Vendor Scenario"
 width={400}
 height={225}
 className="rounded-lg shadow-md mx-auto"
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
 <Image
 src="https://placehold.co/400x225/818cf8/333333?text=Explorer+Adventure"
 alt="Explorer Adventure"
 width={400}
 height={225}
 className="rounded-lg shadow-md mx-auto"
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
 <Image
 src="https://placehold.co/400x225/c4b5fd/333333?text=Travel+Influencer+Lifestyle"
 alt="Travel Influencer Lifestyle"
 width={400}
 height={225}
 className="rounded-lg shadow-md mx-auto"
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
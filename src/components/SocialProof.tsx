import Image from 'next/image';

const SocialProof: React.FC = () => {
  return (
    <section className="social-proof-section py-16 sm:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Join a Growing Community</h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Eurikaa is tapping into a vibrant market of millions of travel influencers, mobile vendors,
          and everyday explorers seeking authentic, location-based experiences.
        </p>
        {/* Placeholder for Testimonials */}
        <div className="italic text-gray-500 mb-6">
          <p>&quot;Hear from our early adopters soon!&quot;</p>
          <p>&quot;See what Eurikaa users will be saying...&quot;</p>
        </div>
        {/* Placeholder for "As Seen In" / Partner Logos */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Future Partners & Collaborators</h3>
          <div className="flex justify-center items-center space-x-6 grayscale opacity-75">
            <Image
              src="https://placehold.co/120x60/cccccc/333333?text=Partner+1"
              alt="Partner Logo 1"
              width={120} // Estimated width
              height={48} // Estimated height for h-10 sm:h-12
            />
            <Image
              src="https://placehold.co/120x60/cccccc/333333?text=Partner+2"
              alt="Partner Logo 2"
              width={120} // Estimated width
              height={48} // Estimated height for h-10 sm:h-12
            />
            <Image
              src="https://placehold.co/120x60/cccccc/333333?text=Partner+3"
              alt="Partner Logo 3"
              width={120} // Estimated width
              height={48} // Estimated height for h-10 sm:h-12
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">(Partnering with food truck associations and more!)</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
import Image from 'next/image';

const SocialProof: React.FC = () => {
  return (
    <section className="social-proof-section py-16 sm:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Join a Growing Community</h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Eurikaa is tapping into a vibrant market of millions of , travel influencers,
          and everyday explorers seeking authentic, location-based experiences.
        </p>
        {/* Placeholder for Testimonials */}
        <div className="italic text-gray-500 mb-6">
          <p>&quot;Hear from our early adopters soon!&quot;</p>
          <p>&quot;See what Eurikaa users will be saying...&quot;</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
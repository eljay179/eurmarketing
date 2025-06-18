import Image from 'next/image';

const CtaSection: React.FC = () => {
  return (
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
            <Image
              src="/AppStoreBadge.svg"
              alt="Download on the App Store"
              style={{ height: 'auto' }}
              width={160}
              height={48}
            />
          </a>
          <a
            href="#download-eurikaa-final" // Replace with actual Google Play link
          >
            <Image
              src="/GooglePlayBadge.png"
              alt="Get it on Google Play"
              width={160}
              height={48}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
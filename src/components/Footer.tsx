import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 sm:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Eurikaa / Parallel Zero */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">eurikaa by Parallel Zero</h3>
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
                <Image
                  src="/AppStoreBadge.svg"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  className="rounded"
                  style={{ height: 'auto' }}
                />
              </a>
              <a href="#google-play-footer">
                <Image
                  src="/GooglePlayBadge.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="rounded"
                />
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
  );
};

export default Footer;
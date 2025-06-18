import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/Eurikaa Horizontal Dark.png"
            alt="Eurikaa Logo"
            width={150} // Adjust width and height as needed
            height={40} // Adjust width and height as needed
          />
        </div>
        {/* Add navigation links here if needed */}
        {/* <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-800 hover:text-blue-600">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-blue-600">Features</a></li>
          <li><a href="#" className="text-gray-800 hover:text-blue-600">Contact</a></li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
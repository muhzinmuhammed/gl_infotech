import { useState } from 'react';
import { ChevronRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';
import Banner from '../assets/banner.png';
import cardImage1 from '../assets/Path.png';
import cardImage2 from '../assets/Group4.png';
import cardImage3 from '../assets/Group 6.png';
import cardImage4 from '../assets/Group 8.png';
import camel from '../assets/camel.png';
import dubaiBuild from '../assets/dubai_sky.png';
import projectImage1 from '../assets/difc_2.png';
import projectImage2 from '../assets/Arabian_Flat.png';
import projectImage3 from '../assets/the-edge-image.png';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-transparent shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <img className="h-10 w-auto" src={Logo} alt="Logo" />
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About Us', 'Products', 'Services', 'Projects', 'Contact Us'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 px-1 pt-1 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-500 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {/* Mobile Navigation Links */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              {['Home', 'About Us', 'Products', 'Services', 'Projects', 'Contact Us'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-700 hover:text-indigo-500 border-b border-gray-200 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-serif leading-tight">
            Lorem Ipsum is<br />
            Lorem Ipsum Lorem<br />
            Lorem
          </h1>
          <p className="mt-6 text-xl text-gray-300">Beat the Heat</p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              More about services
              <ChevronRight className="ml-3 -mr-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[cardImage1, cardImage2, cardImage3, cardImage4].map((img, index) => (
              <div key={index} className="bg-white shadow rounded-lg">
                <div className="p-5 flex items-center">
                  <img className="h-12 w-12 flex-shrink-0" src={img} alt="Feature icon" />
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Lorem ipsum</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking at its layout.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    Know more &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                It is a long establish<br />
                fact that a reader<br />
                It is a long
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  More about company
                  <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={camel} alt="About 1" className="rounded-lg shadow-lg" />
              <img src={dubaiBuild} alt="About 2" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[projectImage1, projectImage2, projectImage3].map((img, index) => (
              <div key={index} className="relative">
                <img src={img} alt={`Project ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
                {index === 1 && (
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-xl font-semibold text-white">Is simply dummy text of the printing</h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Is simply dummy text of the printing and typesetting. Is simply dummy text of the printing and
                      typesetting.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img className="h-8 w-8" src={Logo} alt="Company logo" />
              <p className="mt-4 text-base text-gray-300">
                Is simply dummy text of the printing and typesetting. Is simply dummy text of the printing and
                typesetting.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase">Corporate Office</h3>
              <p className="mt-4 text-base text-gray-300">Is simply dummy text of the printing and typesetting</p>
              <p className="mt-4 text-base text-gray-300">+1 23 456 7890</p>
            </div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-white">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

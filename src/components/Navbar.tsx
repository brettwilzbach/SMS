import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src="/SMS Logo.jpg" alt="SMS - Soft Men Skills" className="h-28" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-800 font-medium">Home</Link>
            <Link to="/tradesmen-partners" className="text-gray-700 hover:text-blue-800 font-medium">Tradesmen Partners</Link>
            <img src="/Milton.jpg" alt="Milton, MA" className="h-8 w-8 rounded-full" title="Based in Milton, MA" />
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-3 py-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/tradesmen-partners" 
                className="text-gray-700 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Tradesmen Partners
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

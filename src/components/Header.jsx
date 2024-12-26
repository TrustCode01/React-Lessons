import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/glad-tiding-logo.png'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  {path: '/sermons', label: 'Sermons'},
  { path: '/events', label: 'Events' },
  { path: '/contact', label: 'Contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-purple-800">
            <img src={Logo} alt="Glad Tidings Fellowship" className='w-[160px] md:w-[200px]' />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link 
                key={path}
                to={path} 
                className="text-blue-700 hover:text-purple-800  transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-gray-700 hover:text-purple-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
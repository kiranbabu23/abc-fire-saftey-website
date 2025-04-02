import { useState } from "react";
import { Link } from "wouter";

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return path === currentPath;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-primary font-bold text-2xl">
                <span className="text-primary">ABC</span> Fire Security
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className={`font-medium transition-all ${isActive("/") ? "text-primary" : "text-neutral-400 hover:text-primary"}`}>
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className={`font-medium transition-all ${isActive("/services") ? "text-primary" : "text-neutral-400 hover:text-primary"}`}>
                Services
              </a>
            </Link>
            <Link href="/contact">
              <a className={`font-medium transition-all ${isActive("/contact") ? "text-primary" : "text-neutral-400 hover:text-primary"}`}>
                Contact
              </a>
            </Link>
            <Link href="/booking">
              <a className={`font-medium transition-all ${isActive("/booking") ? "text-primary" : "text-neutral-400 hover:text-primary"}`}>
                Book Inspection
              </a>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-neutral-400 hover:text-primary"
              aria-label="Open mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-3">
            <Link href="/">
              <a 
                className={`font-medium transition-all py-2 ${isActive("/") ? "text-primary" : "text-neutral-400 hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/services">
              <a 
                className={`font-medium transition-all py-2 ${isActive("/services") ? "text-primary" : "text-neutral-400 hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
            </Link>
            <Link href="/contact">
              <a 
                className={`font-medium transition-all py-2 ${isActive("/contact") ? "text-primary" : "text-neutral-400 hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </Link>
            <Link href="/booking">
              <a 
                className={`font-medium transition-all py-2 ${isActive("/booking") ? "text-primary" : "text-neutral-400 hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Inspection
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    toast({
      title: "Login Feature",
      description: "Login functionality will be implemented in the next version.",
    });
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-resume-primary font-bold text-xl">SkillForge</span>
              <span className="text-resume-secondary font-bold">Resume</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-700 hover:text-resume-primary px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/templates" className="text-gray-700 hover:text-resume-primary px-3 py-2 rounded-md text-sm font-medium">
              Templates
            </Link>
            <Link to="/builder" className="text-gray-700 hover:text-resume-primary px-3 py-2 rounded-md text-sm font-medium">
              Resume Builder
            </Link>
            <Button variant="outline" onClick={handleLoginClick} className="ml-4">
              Login
            </Button>
            <Button onClick={handleLoginClick} className="ml-2 bg-resume-primary hover:bg-resume-secondary">
              Sign Up
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-resume-primary hover:bg-gray-50">
              Home
            </Link>
            <Link to="/templates" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-resume-primary hover:bg-gray-50">
              Templates
            </Link>
            <Link to="/builder" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-resume-primary hover:bg-gray-50">
              Resume Builder
            </Link>
            <Button variant="outline" onClick={handleLoginClick} className="w-full mt-4">
              Login
            </Button>
            <Button onClick={handleLoginClick} className="w-full mt-2 bg-resume-primary hover:bg-resume-secondary">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

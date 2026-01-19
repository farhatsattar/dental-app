"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaTooth, FaInfoCircle, FaPhone, FaCalendarCheck } from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-dental-primary text-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className={`flex items-center text-xl font-bold ${scrolled ? 'text-dental-primary' : 'text-white'}`}>
            <FaTooth className={`mr-2 ${scrolled ? 'text-dental-primary' : 'text-white'}`} />
            Dental Surgery Clinic
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:flex-row md:space-x-8">
            <Link href="/" className={`transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-dental-primary' : 'text-white hover:text-teal-200'}`}>
              Home
            </Link>
            <Link href="/about" className={`transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-dental-primary' : 'text-white hover:text-teal-200'}`}>
              About
            </Link>
            <Link href="/contact" className={`transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-dental-primary' : 'text-white hover:text-teal-200'}`}>
              Contact
            </Link>
            <Link href="/appointment" className={`btn btn-primary px-4 py-2 text-sm ${scrolled ? 'bg-dental-primary hover:bg-dental-primary-dark text-white' : ''}`}>
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${scrolled ? 'text-gray-700 focus:ring-dental-primary' : 'text-white focus:ring-white'}`}
            >
              {isOpen ? (
                <IoMdClose className="h-6 w-6" />
              ) : (
                <IoIosMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className={`md:hidden px-4 pt-2 pb-4 space-y-1 ${scrolled ? 'bg-gray-50' : 'bg-dental-primary'}`}>
          <Link href="/" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-teal-700'}`}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-teal-700'}`}>
            About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-teal-700'}`}>
            Contact
          </Link>
          <Link
            href="/appointment"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-center ${scrolled ? 'bg-dental-primary text-white hover:bg-dental-primary-dark' : 'bg-white text-dental-primary hover:bg-gray-100'}`}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}


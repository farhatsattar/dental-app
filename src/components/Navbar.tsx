"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaTooth, FaInfoCircle, FaPhone, FaCalendarCheck } from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="bg-teal-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🔹 Logo */}
          <Link href="/" className="flex items-center text-xl font-bold">
            <FaTooth className="h-7 w-7 text-white mr-2" />
            Dental Surgery Clinic
          </Link>

          {/* 🔹 Desktop Menu */}
          
          <div className={`${isOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row md:space-x-8`}>
            <Link href="/" className="hover:text-teal-200 transition">Home</Link>
            <Link href="/about" className="hover:text-teal-200 transition">About</Link>
            <Link href="/contact" className="hover:text-teal-200 transition">Contact</Link>
            <Link href="/appointment" className="hover:text-teal-200 transition">Appointment</Link>
          </div>

          {/* 🔹 Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isOpen ? (
                <IoMdClose className="h-7 w-7" />
              ) : (
                <IoIosMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-700 px-4 py-3 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-teal-200">
            <FaTooth className="inline mr-2" /> Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-teal-200">
            <FaInfoCircle className="inline mr-2" /> About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-teal-200">
            <FaPhone className="inline mr-2" /> Contact
          </Link>
          <Link href="/appointment" onClick={() => setIsOpen(false)} className="block hover:text-teal-200">
            <FaCalendarCheck className="inline mr-2" /> Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}

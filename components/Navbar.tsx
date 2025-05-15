"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { Button } from '@/components/ui/buttonone'
import { RainbowButton } from '@/components/ui/rainbow-button'

// A custom component to fetch and display GitHub stars
const GitHubStars = () => {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/Pebbling-ai/pebble')
      .then(response => response.json())
      .then(data => {
        setStars(data.stargazers_count)
      })
      .catch(error => console.error('Error fetching star count:', error))
  }, [])

  return (
    <Link
      href="https://github.com/Pebbling-ai/pebble"
      className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-md px-2 py-1 hover:border-primary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* GitHub Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-foreground"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.824 1.102.824 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      <span>{stars !== null ? stars : '0'}</span>
    </Link>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="py-2 fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 max-w-6xl w-[95%] flex items-center justify-center gap-6"
    >
      {/* Logo Pill */}
      
        <Link href="/" className="flex items-center space-x-1 sm:space-x-2 group">
          <Image src={"/logo.png"} alt="Logo" width={40} height={40} className="h-8 w-8 rounded-full" />
          <span className="text-sm sm:text-base font-bold text-black whitespace-nowrap">Pebbling AI</span>
        </Link>
      

      {/* Navigation Pill */}
      <div className="rounded-full bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/50 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl py-3.5 px-6 flex-grow-0 w-auto">
        <nav className="flex items-center justify-center space-x-6">
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-purple-900"
          >
            Articles
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-purple-900"
          >
            Security
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-purple-900"
          >
            Info & Log
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-purple-900"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-purple-900"
          >
            Community
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-purple-900"
          >
            Status
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-purple-900"
          >
            Pricing
          </Link>
        </nav>
      </div>

      {/* Buttons Pill */}
      <div className=" py-2 px-4 flex-shrink-0">
        <div className="hidden md:flex items-center space-x-2 ">
          <Link href="#">
            <Button variant="outline" className="text-lg flex-none group relative  -ml-2 my-1 inline-flex items-center bg-clip-padding rounded-l-[20px] rounded-r-[8px] border h-8 pl-3 pr-[10px] bg-white/40 border-white/90 shadow hover:text-violet-600 hover:bg-violet-50/40 transition-colors duration-300  py-5">
              Sign In
            </Button>
          </Link>
          
          <Link href="#">
            <Button className="py-5 text-lg flex-none group relative  ml-5px -mr-2 my-1 h-8 pr-3 btn-xs btn-purple btn-border-dark border-none rounded-r-[20px] rounded-l-[8px] bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile Hamburger Button Pill */}
      <div className="md:hidden bg-white/10 backdrop-blur-md shadow-md rounded-full p-2">
        <button
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-1/2 -translate-x-1/2 top-16 w-[95%] max-w-6xl bg-white/10 backdrop-blur-md z-50 rounded-xl shadow-lg transition-all duration-300 ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">

          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-black py-2 text-center"
          >
            Articles
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-black py-2 text-center"
          >
            Security
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-black py-2 text-center"
          >
            Info & Log
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-black py-2 text-center"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-black py-2 text-center"
          >
            Community
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-black py-2 text-center"
          >
            Status
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-purple-900 py-2 text-center"
          >
            Pricing
          </Link>
          <Link href="#" className="w-full">
            <Button variant="outline" className="w-full border-gray-200 hover:border-gray-300 bg-white text-gray-700 hover:text-purple-900 rounded-full text-sm">
              Sign In
            </Button>
          </Link>
          
          <Link href="#" className="w-full">
            <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full text-sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

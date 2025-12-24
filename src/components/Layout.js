import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { companyDetails } from '../data/servicesData';
import '../styles/global.css';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Residential", link: "/residential" },
    { name: "Commercial", link: "/commercial" },
    { name: "Industrial", link: "/industrial" },
    { name: "School", link: "/school" },
    { name: "Hospital", link: "/hospital" },
    { name: "Import/Export", link: "/import-export" },
    // CHANGED: "Contact" -> "Contact Us"
    { name: "Contact Us", link: "/contact" },
  ];

  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }) {
        childImageSharp {
          gatsbyImageData(
            width: 60 
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  const logoImage = getImage(data.file);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      
      {/* HEADER SECTION */}
      <nav className="bg-acetech-blue text-white shadow-lg sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            
            {/* 1. LOGO & BRAND */}
            <Link to="/" className="flex items-center space-x-3 group z-50">
              {logoImage ? (
                <GatsbyImage 
                  image={logoImage} 
                  alt="Acetech Logo" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white rounded-full p-1" 
                />
              ) : (
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-acetech-orange border border-white/20">
                  AE
                </div>
              )}
              <span className="text-lg md:text-xl font-bold uppercase tracking-wider truncate max-w-[150px] md:max-w-none group-hover:text-acetech-orange transition-colors">
                Acetech
              </span>
            </Link>

            {/* 2. DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((item) => (
                // UPDATED CHECK: now checking for "Contact Us"
                item.name === "Contact Us" ? (
                    <Link 
                        key={item.name} 
                        to={item.link} 
                        className="bg-acetech-orange hover:bg-yellow-400 text-black font-bold px-5 py-2 rounded-full transition duration-300 shadow-md"
                    >
                        {item.name}
                    </Link>
                ) : (
                    <Link 
                        key={item.name} 
                        to={item.link} 
                        className="hover:text-acetech-orange transition duration-300 relative group"
                        activeClassName="text-acetech-orange"
                    >
                        {item.name}
                        <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-acetech-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                )
              ))}
            </div>

            {/* 3. MOBILE ACTIONS */}
            <div className="lg:hidden flex items-center gap-3">
                {/* CHANGED: Mobile button text updated */}
                <Link 
                    to="/contact" 
                    className="bg-acetech-orange hover:bg-yellow-400 text-black text-xs font-bold px-3 py-2 rounded shadow-sm flex items-center transition-colors"
                >
                    <span>Contact Us</span>
                </Link>

                <button 
                    className="focus:outline-none p-1" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-acetech-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
          </div>
        </div>

        {/* 4. MOBILE MENU DROPDOWN */}
        <div className={`lg:hidden bg-acetech-blue overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen py-4 opacity-100 shadow-inner border-t border-white/10" : "max-h-0 py-0 opacity-0"}`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.link} 
                className="block text-white text-lg border-b border-white/10 pb-2 hover:text-acetech-orange"
                activeClassName="text-acetech-orange font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6 text-white">
               {logoImage && <GatsbyImage image={logoImage} alt="Logo" className="w-8 h-8 grayscale opacity-80" />}
               <h3 className="text-xl font-bold">Acetech Infra Engineers</h3>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Your trusted partners for engineering excellence in residential, commercial, and industrial infrastructure development across Gurugram and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-acetech-orange">Contact Info</h3>
            <address className="not-italic space-y-3 text-sm">
              <p className="flex items-start">
                <span className="text-acetech-orange mr-2">📍</span>
                {companyDetails.address}
              </p>
              <p className="flex items-center">
                <span className="text-acetech-orange mr-2">📧</span>
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white transition">{companyDetails.email}</a>
              </p>
              <div className="flex items-start">
                <span className="text-acetech-orange mr-2">📞</span>
                <div className="flex flex-col">
                 {companyDetails.phone.map(p => (
                   <a href={`tel:${p}`} key={p} className="hover:text-white transition">{p}</a>
                 ))}
                </div>
              </div>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-acetech-orange">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map(item => (
                 <li key={item.name}><Link to={item.link} className="hover:text-acetech-orange transition block py-1">{item.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-950 mt-12 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 space-y-4 md:space-y-0">
                <p>© {new Date().getFullYear()} Acetech Infra Engineers. All rights reserved.</p>
                <p>Engineering a better tomorrow.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

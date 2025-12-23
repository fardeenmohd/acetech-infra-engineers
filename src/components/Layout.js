import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { companyDetails } from '../data/servicesData';
import '../styles/global.css';

const Layout = ({ children }) => {
  // 1. Fetch the logo image using GraphQL
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

  // 2. Get the image data helper
  const logoImage = getImage(data.file);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Header */}
      <nav className="bg-acetech-blue text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo and Brand Name Section */}
          <Link to="/" className="flex items-center space-x-3 group mb-4 md:mb-0">
            {/* 3. Display the Logo Image if found */}
            {logoImage ? (
              <GatsbyImage 
                image={logoImage} 
                alt="Acetech Infra Engineers Logo" 
                // Tailwind classes for size. Adjust 'w-12 h-12' if you need it bigger/smaller.
                className="w-12 h-12 object-contain transition-transform group-hover:scale-105" 
              />
            ) : (
              // Fallback placeholder if image isn't there yet
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center font-bold">
                AE
              </div>
            )}
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider group-hover:text-acetech-orange transition">
              Acetech Infra Engineers
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="space-x-6 text-sm md:text-base font-semibold">
            <Link to="/" className="hover:text-acetech-orange transition duration-300">Home</Link>
            <Link to="/contact" className="bg-acetech-orange hover:bg-orange-600 px-4 py-2 rounded transition duration-300">Contact Us</Link>
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
          {/* Footer Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-6 text-white">
               {/* Optional: Repeat logo in footer slightly smaller */}
               {logoImage && <GatsbyImage image={logoImage} alt="Logo" className="w-8 h-8 grayscale opacity-80" />}
               <h3 className="text-xl font-bold">Acetech Infra Engineers</h3>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Your trusted partners for engineering excellence in residential, commercial, and industrial infrastructure development across Gurugram and beyond.
            </p>
          </div>

          {/* Footer Column 2: Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-acetech-orange">Contact Info</h3>
            <address className="not-italic space-y-3 text-sm">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-acetech-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {companyDetails.address}
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-acetech-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white transition">{companyDetails.email}</a>
              </p>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-acetech-orange flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div className="flex flex-col">
                 {companyDetails.phone.map(p => (
                   <a href={`tel:${p}`} key={p} className="hover:text-white transition">{p}</a>
                 ))}
                </div>
              </div>
            </address>
          </div>

          {/* Footer Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-acetech-orange">Our Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/residential" className="hover:text-acetech-orange transition block py-1">Residential Construction</Link></li>
              <li><Link to="/commercial" className="hover:text-acetech-orange transition block py-1">Commercial Construction</Link></li>
              <li><Link to="/industrial" className="hover:text-acetech-orange transition block py-1">Industrial Construction</Link></li>
              <li><Link to="/school" className="hover:text-acetech-orange transition block py-1">School Infrastructure</Link></li>
              <li><Link to="/hospital" className="hover:text-acetech-orange transition block py-1">Hospital Projects</Link></li>
              <li><Link to="/import-export" className="hover:text-acetech-orange transition block py-1">Import/Export Division</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
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
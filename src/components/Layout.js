import React from 'react';
import { Link } from 'gatsby';
import { companyDetails } from '../data/servicesData';
import '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Header */}
      <nav className="bg-acetech-blue text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-2xl font-bold uppercase tracking-wider mb-4 md:mb-0">
            Acetech Infra Engineers
          </Link>
          <div className="space-x-6 text-sm md:text-base">
            <Link to="/" className="hover:text-acetech-orange transition">Home</Link>
            <Link to="/contact" className="hover:text-acetech-orange transition">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Acetech Infra Engineers</h3>
            <p className="text-sm">Building the future with precision across Residential, Commercial, and Industrial sectors.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p className="text-sm mb-2">{companyDetails.address}</p>
            <p className="text-sm mb-2">Email: {companyDetails.email}</p>
            <p className="text-sm">Phone: {companyDetails.phone.join(", ")}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/residential" className="hover:text-white">Residential</Link></li>
              <li><Link to="/commercial" className="hover:text-white">Commercial</Link></li>
              <li><Link to="/industrial" className="hover:text-white">Industrial</Link></li>
              <li><Link to="/import-export" className="hover:text-white">Import/Export</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-xs border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Acetech Infra Engineers. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
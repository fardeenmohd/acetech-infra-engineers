import React from 'react';
import Layout from './Layout';
import { Link } from 'gatsby';

const ServiceTemplate = ({ service }) => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-acetech-blue mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{service.heroText}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Description & Points */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Expertise</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-acetech-orange">
              <h3 className="font-bold text-xl mb-4">Technical Specifications:</h3>
              <ul className="space-y-3">
                {service.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-acetech-orange mr-2">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Call to Action Box */}
          <div className="bg-acetech-blue text-white p-10 rounded-xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
            <p className="mb-8 opacity-90">Ready to discuss your {service.title.toLowerCase()} needs in Gurugram?</p>
            <Link 
              to="/contact" 
              className="inline-block bg-acetech-orange hover:bg-orange-700 text-white font-bold py-3 px-8 rounded transition duration-300"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceTemplate;
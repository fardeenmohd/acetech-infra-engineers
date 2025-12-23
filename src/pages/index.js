import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { servicesData } from "../data/servicesData"

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-acetech-blue text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Building the Future in Gurugram</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Specialized in Residential, Commercial, Industrial, and Healthcare Infrastructure.
        </p>
        <Link to="/contact" className="bg-acetech-orange text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition">
          Get a Quote
        </Link>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Specializations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(servicesData).map((service) => (
            <Link to={service.slug} key={service.slug} className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition duration-300 h-full flex flex-col">
                <h3 className="text-xl font-bold text-acetech-blue mb-3 group-hover:text-acetech-orange">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.heroText}
                </p>
                <span className="text-acetech-orange font-semibold text-sm">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
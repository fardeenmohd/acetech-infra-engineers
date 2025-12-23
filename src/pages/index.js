import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { servicesData } from "../data/servicesData"

const IndexPage = ({ data }) => {
  // Get the hero image data
  const heroImage = getImage(data.file)

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden font-sans">
        {/* 1. The Background Image Layer */}
        <div className="absolute inset-0">
            {heroImage ? (
                <GatsbyImage 
                  image={heroImage} 
                  alt="Acetech Construction Site" 
                  className="h-full w-full object-cover" 
                  loading="eager" // Load this immediately as it's above the fold
                />
            ) : (
                // Fallback just in case image isn't found
                 <div className="h-full w-full bg-acetech-blue"></div>
            )}
           {/* 2. Dark Overlay Layer (crucial for text readability) */}
           <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* 3. The Content Layer (z-index puts it on top) */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
            {/* Small pre-title tag */}
            <span className="uppercase tracking-[0.2em] text-acetech-orange font-bold mb-4 text-sm md:text-base">
                Engineering Excellence
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                Building the Future <br className="hidden md:block"/> in Gurugram
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light drop-shadow-md">
            Your trusted partner for specialized Residential, Commercial, Industrial, and Healthcare infrastructure development.
            </p>
            <Link 
                to="/contact" 
                className="bg-acetech-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition transform hover:-translate-y-1 shadow-lg"
            >
            Start Your Project Now
            </Link>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Specialized Expertise</h2>
                <div className="w-20 h-1 bg-acetech-orange mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(servicesData).map((service) => (
                <Link to={service.slug} key={service.slug} className="group h-full">
                <div className="bg-white border-b-4 border-transparent hover:border-acetech-orange shadow-md hover:shadow-xl rounded-xl p-8 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                    {/* Subtle hover icon effect */}
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 text-gray-100 group-hover:text-blue-50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 transform rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                    </div>

                    <h3 className="text-xl font-bold text-acetech-blue mb-3 group-hover:text-acetech-orange relative z-10">
                    {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed relative z-10">
                    {service.heroText}
                    </p>
                    <span className="text-acetech-orange font-bold text-sm flex items-center relative z-10 group-hover:underline">
                        Explore Solutions 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                </div>
                </Link>
            ))}
            </div>
        </div>
      </div>
    </Layout>
  )
}

// GraphQL Query to find the image named "home-hero"
export const query = graphql`
  query {
    file(name: { eq: "home-hero" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          quality: 80
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
          layout: FULL_WIDTH
        )
      }
    }
  }
`

export default IndexPage
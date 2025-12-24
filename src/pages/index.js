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
      {/* 1. Hero Section: Changed 'h-[600px]' to 'relative w-full' to respect image ratio */}
      <div className="relative w-full text-white font-sans">
        
        {/* The Background Image Layer */}
        {/* We removed 'absolute' so this image now pushes the container open to its full height */}
        <div className="relative">
            {heroImage ? (
                <GatsbyImage 
                  image={heroImage} 
                  alt="Acetech Construction Site" 
                  // Removed 'object-cover' and 'h-full'. 
                  // 'block' removes tiny spacing at the bottom of images.
                  className="w-full h-auto block" 
                  loading="eager" 
                />
            ) : (
                 <div className="h-[500px] w-full bg-acetech-blue"></div>
            )}
           {/* Dark Overlay Layer - sits on top of the image */}
           <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* 2. The Content Layer - Positioned absolutely over the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="uppercase tracking-[0.2em] text-acetech-orange font-bold mb-2 md:mb-4 text-xs md:text-base">
                Engineering Excellence
            </span>
            {/* Added standard responsive text sizing */}
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-3 md:mb-6 leading-tight drop-shadow-lg">
                Building the Future <br className="hidden md:block"/> in Gurugram
            </h1>
            
            {/* Hidden on very small screens to ensure image isn't covered completely */}
            <p className="hidden md:block text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto opacity-90 font-light drop-shadow-md">
            Your trusted partner for specialized Residential, Commercial, Industrial, and Healthcare infrastructure development.
            </p>
            
            <Link 
                to="/contact" 
                className="bg-acetech-orange text-white px-6 py-2 md:px-10 md:py-4 rounded-full font-bold text-xs md:text-lg hover:bg-orange-600 transition transform hover:-translate-y-1 shadow-lg"
            >
            Start Your Project Now
            </Link>
        </div>
      </div>

      {/* 2. Video Showcase Section */}
      <div className="w-full bg-black relative">
        <video
          className="w-full h-[400px] md:h-[500px] object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
           <h2 className="text-3xl md:text-5xl text-white font-bold uppercase tracking-widest drop-shadow-xl mb-4">
             See Us In Action
           </h2>
           <div className="w-24 h-1 bg-acetech-orange mb-6"></div>
           <p className="text-gray-200 max-w-2xl text-lg drop-shadow-md">
             From heavy industrial foundations to delicate healthcare interiors, we deliver precision at every scale.
           </p>
        </div>
      </div>

      {/* 3. Services Grid Section */}
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
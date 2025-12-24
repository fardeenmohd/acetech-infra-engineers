import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { companyDetails } from "../data/servicesData"

const ContactPage = ({ data }) => {
  // Get the image data
  const contactImage = getImage(data.file)

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-acetech-blue">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Details + Image */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-700">Directors</h3>
                  <p className="text-gray-600">Syed Samsam Haider & Arif Raza</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Phone</h3>
                  {companyDetails.phone.map(p => (
                    <a href={`tel:${p}`} key={p} className="block text-acetech-orange hover:underline">{p}</a>
                  ))}
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Email</h3>
                  <a href={`mailto:${companyDetails.email}`} className="text-acetech-blue hover:underline">
                    {companyDetails.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Address</h3>
                  <p className="text-gray-600">{companyDetails.address}</p>
                </div>
              </div>
            </div>

            {/* The Image Section - Updated to prevent cropping */}
            <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
              {contactImage ? (
                <GatsbyImage 
                  image={contactImage} 
                  alt="Acetech Office or Team" 
                  // Removed 'h-64' and 'object-cover'
                  // Added 'h-auto' to let the image set its own height
                  className="w-full h-auto block"
                  objectFit="contain"
                />
              ) : (
                <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500">
                  Image not found (Save as src/images/contact.jpg)
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Functional Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-acetech-blue">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
            
            <form 
              action="https://formspree.io/f/mnjawzgq" 
              method="POST" 
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-700 font-bold mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-acetech-blue" 
                  placeholder="John Doe" 
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-bold mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-acetech-blue" 
                  placeholder="john@example.com" 
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-bold mb-2">Subject</label>
                <select 
                  name="subject"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-acetech-blue bg-white"
                >
                  <option value="Residential Query">Residential Construction</option>
                  <option value="Commercial Query">Commercial Construction</option>
                  <option value="Industrial Query">Industrial Construction</option>
                  <option value="School Query">School Infrastructure</option>
                  <option value="Hospital Query">Hospital Construction</option>
                  <option value="Import/Export Query">Import/Export Query</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  required
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-acetech-blue" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Hidden field for Subject Line customization in email */}
              <input type="hidden" name="_subject" value="New Contact from Acetech Website" />

              <button 
                type="submit" 
                className="bg-acetech-blue text-white px-6 py-4 rounded font-bold hover:bg-blue-800 w-full transition duration-300 uppercase tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  )
}

// Updated GraphQL Query
// Changed 'width: 800' to 'layout: FULL_WIDTH' for better resolution
export const query = graphql`
  query {
    file(name: { eq: "contact" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH 
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default ContactPage
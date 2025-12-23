import React from "react"
import Layout from "../components/Layout"
import { companyDetails } from "../data/servicesData"

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-acetech-blue">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-700">Directors</h3>
                <p>Syed Samsam Haider & Arif Raza</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Phone</h3>
                {companyDetails.phone.map(p => <p key={p} className="text-acetech-orange">{p}</p>)}
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Email</h3>
                <p>{companyDetails.email}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Address</h3>
                <p>{companyDetails.address}</p>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
            <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
            <textarea placeholder="Message" rows="4" className="w-full border p-3 rounded"></textarea>
            <button className="bg-acetech-blue text-white px-6 py-3 rounded font-bold hover:bg-blue-800 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
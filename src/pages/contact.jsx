import React from 'react'
import Navbar from '../compontent/navbar'
import ContactForm from '../compontent/contact-form'
import ContactBanner from '../compontent/contact-banner'
import Footer from '../compontent/footer'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <ContactBanner/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact

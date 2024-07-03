import React from 'react'
import '../asstes/css/contact.css'
import { Link } from 'react-router-dom'
const ContactForm = () => {
  return (
    <div>
      <section className='contact-form position-relative'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="contact-info text-white" >
                    <h3 className='sub-head' data-aos="fade-down" data-aos-offset="10">Contact Info</h3>
                    <p className='' data-aos="fade-up" data-aos-offset="10">Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                    <div className="row" data-aos="fade-up" data-aos-offset="10">
                        <div className="col-md-6 mb-2 mt-2">
                        <input type="text" className="form-control form-group" placeholder="Name" required />
                        </div>
                        <div className="col-md-6 mb-2 mt-2">
                        <input type="number" className="form-control form-group" placeholder="phone number" required />
                        </div>
                        <div className="col-md-12 mb-2 mt-2">
                        <input type="email" className="form-control form-group" placeholder="Email" required />
                        </div>
                        <div className="col-md-12 mb-2 mt-2">
                        <input type="text" className="form-control form-group" placeholder="Subject" required />
                        </div>
                        <div className="col-md-12 mb-2 mt-2">
                        <textarea type="text" className="form-control form-group" placeholder="Message" required />
                        </div>
                        <div className="col-12 mb-2 mt-2">
                            <button className='btn-submit mt-3 mb-3'>Sumbit</button>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1 "data-aos="fade-up" data-aos-offset="10">
                    <div className="adress-sec text-white">
                    <div className="row align-items-center">
                        <div className="col-sm-6 mb-3 mt-3">
                            <h6>Email</h6>
                           <Link to='mailto:contact@gmail.com'>
                             <h6>Cristal@gmail.com</h6>
                           </Link>
                        </div>
                        <div className="col-sm-6 mb-3 mt-3">
                            <h6>Email</h6>
                           <Link to='mailto:contact@gmail.com'>
                             <h6>cristal@gmail.com</h6>
                           </Link>
                        </div>
                        <div className="col-sm-6 mb-3 mt-3">
                            <h6>Phone</h6>
                            <h6><Link to='tel:999999999'>9999999999999</Link></h6>
                            <h6><Link to='tel:999999999'>9999999999999</Link></h6>
                        </div>
                        <div className="col-sm-6 mb-3 mt-3">
                            <h6>Phone</h6>
                            <Link to='tel:99999999'>
                              <h6>99999999999</h6>
                            </Link>
                            <Link to='tel:99999999'>
                              <h6>99999999999</h6>
                            </Link>
                        </div>
                        <div className="col-md-6 mb-3 mt-3">
                            <h6>Address</h6>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                        </div>
                        <div className="col-md-6 mb-3 mt-3">
                            <h6>Address</h6>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                        </div>
                        <div className="col-12">
                        <button className='btn-submit mb-3'>Live chat</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31319.54477587452!2d76.112054!3d11.117616000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6367a09827289%3A0xa5bab8b1f3018ca4!2sManjeri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1719680880249!5m2!1sen!2sin" width="100%" height="550"></iframe>
    </div>
  )
}

export default ContactForm

import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import New0 from '../asstes/images/img/2.jpg'
import New1 from '../asstes/images/img/5.jpg'
import New2 from '../asstes/images/img/7.jpg'
import New4 from '../asstes/images/img/8.jpg'
import New5 from '../asstes/images/img/9.jpg'
import New6 from '../asstes/images/img/10.jpg'
import New7 from '../asstes/images/img/2.jpg'
import New8 from '../asstes/images/img/12.jpg'
import New9 from '../asstes/images/img/13.jpg'
import '../asstes/css/new-arrivel.css'
import { Link } from 'react-router-dom';

const NewArrivales = () => {
  return (
    <div>
   <section className='new-arrivels'>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3 mt-3">
              <h2 className='text-center mb-3'>Shop by Gender</h2>
              <Tabs>
                <TabList  className="border-0 mb-4 p-0 text-center">
                  <Tab>Women's Jewellery</Tab>
                  <Tab>Men's Jewellery</Tab>
                  <Tab>Kid's Jewellery</Tab>
                </TabList>
                <TabPanel>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                      <Link to='./diamond'> <div className="card">
                          <img src={New0}lt="Gold" className='arrivels-img' />
                          <div className="card-cont">
                              <h6>Gold Ring</h6>
                          </div>
                      </div></Link>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                         <Link to="./gold">
                         <div className="card">
                              <img src={New1} alt="Gold" className='arrivels-img' />
                              <div className="card-cont">
                                  <h6>Gold Earring</h6>
                              </div>
                          </div>
                         </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                         <Link to='./ring'>
                         <div className="card">
                              <img src={New2}lt="Gold" className='arrivels-img' />
                              <div className="card-cont">
                                  <h6>Gold Chain</h6>
                              </div>
                          </div>
                         </Link>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <Link to='./diamond'>
                    <div className="card">
                          <img src={New4}lt="Gold" className='arrivels-img' />
                          <div className="card-cont">
                              <h6>Gold Chain </h6>
                          </div>
                      </div>
                    </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                         <Link to='./gold'>
                         <div className="card">
                              <img src={New5} alt="Gold" className='arrivels-img' />
                              <div className="card-cont">
                                  <h6>Gold Chain</h6>
                              </div>
                          </div>
                         </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                        <Link to='./ring'>
                        <div className="card">
                              <img src={New6}lt="Gold" className='arrivels-img' />
                              <div className="card-cont">
                                  <h6>Gold Ring</h6>
                              </div>
                          </div>
                        </Link>
                    </div>
                  </div>              
                </TabPanel>
                <TabPanel>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                     <Link to='gold'>
                     <div className="card">
                          <img src={New7}lt="Gold" className='arrivels-img' />
                          <div className="card-cont">
                              <h6>Gold Ring</h6>
                          </div>
                      </div>
                     </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                         <Link to='ring'>
                         <div className="card">
                              <img src={New8} alt="Gold" className='arrivels-img' />
                              <div className="card-cont">
                                  <h6>Gold Ring</h6>
                              </div>
                          </div>
                         </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                         <Link to='diamond'>
                         <div className="card">
                              <img src={New9}lt="Gold" className='arrivels-img' />
                              <div className="card-cont">
                                  <h6>Gold Ring</h6>
                              </div>
                          </div>
                         </Link>
                    </div>
                  </div>              
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewArrivales

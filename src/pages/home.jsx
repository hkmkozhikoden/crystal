import React from 'react'
import Banner from '../compontent/banner'
import Navbar from '../compontent/navbar'
import Catagory from '../compontent/catagory'
import NewArrivales from '../compontent/new-arrivels'
import HomeBride from '../compontent/homebride'
import DiamondGewellery from '../compontent/diamond-gewellery'
import Footer from '../compontent/footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
     <Banner/>
     <Catagory/>
     <NewArrivales/>
     <HomeBride/>
     <DiamondGewellery/>
     <Footer/>
    </div>
  )
}

export default Home

import React from 'react'
import DiamondBanner from '../compontent/diamond-banner'
import Navbar from '../compontent/navbar'
import RealtedDiamond from '../compontent/related-diamond'
import DiamondSingleView from '../compontent/diamond-single-view'
import Footer from '../compontent/footer'

const DiamondView = () => {
  return (
    <div>
        <Navbar/>
      <DiamondBanner/>
      <DiamondSingleView/>
      <RealtedDiamond/>
      <Footer/>
    </div>
  )
}

export default DiamondView

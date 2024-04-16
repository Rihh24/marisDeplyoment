import React from 'react'
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image2.png"


const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Deals</h1>
        <h1>For You</h1>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} />
      </div>
    </div>
  )
}

export default Offers

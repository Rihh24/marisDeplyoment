import React from 'react'
import "./NewsLetter.css"


const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers</h1>
      <p>Subscribe to stay Updated</p>
      <div>
        <input type='email' placeholder='Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter

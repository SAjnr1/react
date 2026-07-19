import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/next-icon.png'

const Hero = () => {
  return (
    <div className='hero container' >
        <div className="hero-text">
            <h1>We Produce And Provide Quality Food Goods</h1>
            <p>We transform fresh, locally grown tomatoes into delicious, high-quality food products that bring convenience, great taste, and healthy nutrition to every home.
            </p>
            <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
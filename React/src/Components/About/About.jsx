import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className="play-icon" />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Today</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <p>Et debitis ipsa magni fugit doloribus sint alias, itaque eligendi magnam explicabo temporibus commodi, ratione, quasi autem iure. </p>
            <p>Accusantium possimus aut magnam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae voluptatem similique mollitia, 
                aut dicta repellendus sint laudantium possimus impedit quam! Laboriosam
                dolorem recusandae aut quam animi vero odit earum.</p>
        </div>
    </div>
  )
}

export default About
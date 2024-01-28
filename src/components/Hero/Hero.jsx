import React from 'react'
import './Hero.css'
import btnImg from '../../assets/hireme.png'
import heroimage from '../../assets/hero.png'
import {Link} from 'react-scroll';
function Hero() {
  return (
    <section id="hero">
        {/* Left-Content */}
        <div className='introContent'>
            <span className="intro">Hello,</span>
            <span className="introText">I'm <span className="introName">Akash</span> <br/> Front-end Web Developer</span>
            <p className="introPara">Eager to leverage my creativity and coding skills to craft engaging<br/> digital experiences that seamlessly blend <br/>aesthetics with functionality.  </p>
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire me!</button></Link>
        </div>

        {/* Hero-Image */}
        <div>
        <img src={heroimage} alt="" className='heroImg'/>
        </div>
    </section>
  )
}

export default Hero
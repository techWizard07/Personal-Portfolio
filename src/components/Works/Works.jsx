import React from 'react'
import './Works.css'
import Pro1 from '../../assets/pro1.png';
import Pro2 from '../../assets/pro2.png';
import Pro3 from '../../assets/pro3.png';
import Pro4 from '../../assets/pro4.png';
import Pro5 from '../../assets/pro5.png';
import Pro6 from '../../assets/pro6.png';

function Works() {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">Crafting visually stunning and intuitive front-end solutions, my projects seamlessly blend creativity with functionality, providing users with an immersive and delightful web experience.</span>
        <br />
        <span className='clickImage'>Click the image to experience the App !</span>
            <div className="worksImgs">

                
            <a href="https://shopify-wizard.netlify.app/"><h1 className='techTitle'>E-commerce website</h1>
            <p className='techStack'>Tech-stack: <span className='techStackLang'>React-Tailwind</span></p><img src={Pro1} alt="" className="workImg" /></a>

            <a href="https://todo-wizard-js.netlify.app/"><h1 className='techTitle'>Todo App</h1>
            <p className='techStack'>Tech-stack: <span className='techStackLang'>React</span></p>
            <img src={Pro2} alt="" className="workImg" /></a>
            
            <a href="https://techwizard07.github.io/Zomato_Clone/"><h1 className='techTitle'>Zomato-clone</h1>
            <p className='techStack'>Tech-stack: <span className='techStackLang'>HTML-CSS</span></p><img src={Pro3} alt="" className="workImg" /></a>

              <a href="https://techwizard07.github.io/JS_Dragon_Game/"><h1 className='techTitle'>Dragon Game</h1>
            <p className='techStack'>Tech-stack: <span className='techStackLang'>HTML-CSS-JS</span></p><img src={Pro4} alt="" className="workImg" /></a>

                <a href="https://techwizard07.github.io/profile-card/"><h1 className='techTitle'>Profile Card</h1>
            <p className='techStack'>Tech-stack: <span className='techStackLang'>HTML-CSS</span></p><img src={Pro5} alt="" className="workImg" /></a>

                <a href="https://techwizard07.github.io/HICAS-invitation/"><h1 className='techTitle'>Conference Invitation</h1>
            <p className='techStack'>Tech-stack: <span className='techStackLang'>HTML-CSS</span></p><img src={Pro6} alt="" className="workImg" /></a>
            </div>
            <button className="ghub"><a href="https://github.com/techWizard07">Click to view Github</a></button>
        
    </section>
  )
}

export default Works
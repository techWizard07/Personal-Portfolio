import React from 'react';
import './Skill.css';
import UiDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/web-developing.png'

function Skill() {
  return (
    <section id="skills">
        <span className="skillTitle"> What I do</span>
        <br/>
        <span className="skillDesc">Passionate about creating visually stunning and intuitive user interfaces, I bring a fresh perspective and a solid foundation in front-end technologies such as HTML, CSS, and JavaScript. </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UiDesign} alt="" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2 className="skillbarHead">
                        Creative designing
                    </h2>
                    <p className="skillBarPara">
the artful synthesis of innovation and aesthetics to visually communicate ideas, evoke emotions, and solve problems.</p>

                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2 className="skillbarHead">
                        Web designing
                    </h2>
                    <p className="skillBarPara">crafting visually appealing and user-friendly digital interfaces to enhance the online user experience.</p>

                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2 className="skillbarHead">
                        web developing
                    </h2>
                    <p className="skillBarPara">focuses on coding and programming to create dynamic and interactive websites, ensuring seamless functionality and optimal user engagement.</p>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill
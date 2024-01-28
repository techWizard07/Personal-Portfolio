import React, { useRef } from 'react'
import './Contact.css'
import Instagram from '../../assets/instagram.png'
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_381rxgg', 'template_8ttambk', form.current, 'PbAblZENFg0CVXNj6')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("email sended sucessfully!")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
        <h1 className="contactPageTitle">
            Contact Me
        </h1>
        <span className="contactDese">please fill out below form to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Your name' className="name" name="your_name"/>
            <input type="text" placeholder='Your email' className="email" name="your_email"/>
            <textarea name="message" placeholder='Your message' rows="5" className="msg"></textarea>
            <button typr='submit' value='send'className="submitBtn">Submit</button>
            <div className="links">
                <a href="https://www.linkedin.com/in/akash122021/"><img src={Linkedin} alt="" className="link" /></a>
                <a href="https://github.com/techWizard07"><img src={Github} alt="" className="link" /></a>
                <a href="https://www.instagram.com/wizard__js/"><img src={Instagram} alt="" className="link"  />
</a>
            </div>
        </form>
    </section>
  )
}

export default Contact
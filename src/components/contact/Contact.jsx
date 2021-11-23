import emailjs from "emailjs-com";
import React from 'react';
import "./contact.css";
import profile from '../../assets/img/chiranjeeb.jpg'
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
  
} from "react-icons/fa";
function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6d5nfh8', 'template_op24ql8', e.target, 'user_Ti06uU9jhcvBBg5EQWXbP')
            .then((result) => {
                alert("Your Message Sent Successfully. Please Check your mail id. Have a Great Day 😃");
                e.target.reset();
            }, (error) => {
                alert("Sorry😞 your message is not Sent Successfully due to some Techical Error. Please Drop your message in Chiranjeebnayak.37@gmail.com. Have a Great Day 😃");
                console.log(error.text);
            });
        
    }
    
  return (
    <>
      <div className="contact">
        <div className="row">
          <div className="profile">
            <div className="image">
              <img src={profile} alt="ProfileImage" />
              <h2>Chiranjeeb Nayak</h2>
              <p>Fullstack Developer</p>
            </div>
            
            <div className="follow">
              <div className="icons">
                <a href="https://www.facebook.com/chiranjeebnayak.371"><FaFacebookSquare className="facebook"/></a>
                <a href="https://github.com/ChiranjeebNayak"><FaGithub  className="github"/></a>
                <a href="https://www.instagram.com/chiranjeebnayak.371/"><FaInstagramSquare className="instagram" /></a>
                <a href="https://www.linkedin.com/in/chiranjeeb-nayak-b6218b182/"><FaLinkedin  className="linkedin"/></a>
                <a href="https://www.youtube.com/channel/UCXUkUF9D1c2lugsF_iQ9N_g"><FaYoutubeSquare  className="youtube"/></a>
              </div>
            </div>
          </div>
          <div className="feedback">
              <div className="title">
                  Contact Us
              </div>
          <form onSubmit={sendEmail}>
                    <div className="input_feedback">
                        <div>
                            <input type="text" className="form-control" placeholder="Name" name="name" autoComplete="off" />
                        </div>
                        <div>
                            <input type="email" className="form-control" placeholder="Email Address" name="email" autoComplete="off" />
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="Subject" name="subject" autoComplete="off" />
                        </div>
                        <div>
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                        </div>
                        <div>
                            <button type="submit"> Send Message</button>
                        </div>
                    </div>
                </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

import React from 'react';
import {useRef} from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

import emailjs from '@emailjs/browser';

function Payment() {
    // title
    useEffect(()=>{
      document.title='Payment Section';
      });


    // contact-us 
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_i507blj', 'template_vbe2ygm', form.current, '8I_xO_gChaqRasE-D')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    // contact-us end

  // form reset
  const handleReset = () => {
    form.current.reset();
  };

 // form reset end
    return (
<section id='contact-us' >
          <div className="contai-ner">
          <h1 className='contact-title'>Contact With Us For Buying Course</h1>
              <div className="content">
                <div className="left-side">
                  <div className="address details">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="topic">Address</div>
                    <div className="text-one">Naraynganj Sadar,</div>
                    <div className="text-two">Naraynganj 1400</div>
                  </div>
                  <div className="phone details">
                    {/* <i className="fas fa-phone-alt"></i> */}
                    <i class="bi bi-whatsapp"></i>
                    <div className="topic">Whatsapp</div>
                    <div className="text-one">+880 1881490188</div>
                    {/* <div className="text-two">01*********8</div> */}
                  </div>
                  <div className="email details">
                    <i className="fas fa-envelope"></i>
                    <div className="topic">Email</div>
                    <div className="text-one">mithilakona@gmail.com</div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="topic-text">Send us a message</div>
                  <p>If you are interested in purchasing this course or have any questions related to the content, feel free to send me a message.I'm here to assist you with any inquiries about the course material or the buying process.</p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="input-box">
                    <input type="text" name="from_name" placeholder="Enter Course Name You want to enroll"/>
                  </div>
                  <div className="input-box">
                    <input type="email" name="from_name" placeholder="Enter your email"/>
                  </div>
                  <div className="input-box message-box">
                  <textarea placeholder='Send us your massage with your approprite contact information by using which we can contact you further' name="message" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className="button">
                    <input type="submit" value="Send" />
                    <input type="reset" value="Reset" onClick={handleReset} />
                  </div>
                </form>
              </div>
              </div>
            </div>
          </section>
    );
  }
  
  export default Payment;
  
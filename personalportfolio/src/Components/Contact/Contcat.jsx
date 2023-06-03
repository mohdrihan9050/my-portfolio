import './Contact.css'
import React from 'react';
import emailjs from '@emailjs/browser';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import { useRef } from 'react';

const Contact =()=>{
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1d3xw51', 'template_wtweok3', form.current, 'TJZioM5_xu0R2HDv6')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div className="container-fluid " id='contact'>
            <div className="row mt-4 m-2">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-2 ">
                    <div data-aos="fade-right" className='cont'>
                    <span  style={{color:'var(--gray)' ,fontSize:'2.5rem'}}>Get in <span style={{color:'var(--orange)' ,fontSize:'2.5rem'}}> touch</span></span><br/>
                    <span>If you want to know more about me or my work, or if you would just like to say hello, send me a message.</span>
                    </div>
                    <div data-aos="fade-up" className="mail mt-3" style={{color:'var(--orange)'}} >  
                        <h4>Email</h4>
                        <MailOutlineIcon  style={{color:'var(--gray)' ,fontSize:'24px'}}/>
                        <a style={{color:'var(--gray)'}} href="mailto:project.rihan@gmail.com">project.rihan@gmail.com</a>
                    </div>

                    <div  data-aos="fade-up"className="call mt-3"style={{color:'var(--orange)'}} >
                        <h4>Phone no.</h4>
                        <CallIcon className='c-icon' style={{color:'var(--gray)' ,fontSize:'24px'}}/>
                        <a style={{color:'var(--gray)'}} href="tel:8958229050">+91 8958229050</a>
                    </div>
                    <div className="blur-1" style={{top:'480%'}}></div>
                    <div className="blur-2" style={{top:'550%'}}></div>
                    
                </div>

                <div className="cont col-lg-6 col-md-6 col-sm-12 col-12">
                    <form data-aos="zoom-in" className='mt-4 form-wrapper'  ref={form} onSubmit={sendEmail}>
                    
                    <input className="box-size form-control pb-2" name="user_name" type="text" placeholder="Name" />  <br/><br/>
                
                    <input className="box-size form-control pb-2" type='email' name="user_email" placeholder="email"/><br/><br/>

                    <textarea className='box-size pt-2 form-control' name="message" placeholder=' write your text'/><br/><br/>

                    <button className='button n-button center' type="submit">Send Message</button>  
                    </form>
                
                </div>
            </div>
        </div>
    )
}
export default Contact;

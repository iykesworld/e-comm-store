import React, { useEffect } from 'react'
import './Contact.css'
import Pageheader from '../components/pageheader/Pageheader'

const details = [
    {
        icon: "ri-map-pin-line",
        title: "Office Address",
        subtitle: "45B Texas Rd, Off West Coast London",
    },
    {
        icon: "ri-phone-line",
        title: "Phone Number",
        subtitle: "01-345-98-345",
    },
    {
        icon: "ri-mail-line",
        title: "Send Email",
        subtitle: "email@contact.com",
    },
    {
        icon: "ri-window-line",
        title: "Our Website",
        subtitle: "www.ourwebsite.com",
    },
]

const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    <>
    <Pageheader title="Contact Page" currentPage ="Contact"/>
    <div className='contact'>
        <h3>GET IN TOUCH WITH US</h3>
        <h2>We’re Always Eager To Hear From You!</h2>
        <div className="contact-body">
            <div className="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.64601913817!2d7.472392542285315!3d9.0905469722741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a42a5e3f47d%3A0xa5b2f06d94fb9ecb!2sMaitama%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1729602196171!5m2!1sen!2sng"  
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title='Responsive Google Map'
            ></iframe>
            </div>
            <div className="contact-details">
                {
                    details.map((data, index)=>{
                        return <div key={index} className="contact-details-container">
                            <div className="contact-icon">
                                <i className={data.icon}></i>
                            </div>
                            <div className="contact-info">
                                <h5>{data.title}</h5>
                                <span>{data.subtitle}</span>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className="contact-inputs">
            <h2>Fill The Form So We Can Get To Know 
            You And Your Needs Better</h2>
            <form action="" className='contact-inputs-details'>
                <div className="contact-input-wrapper">
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
                </div>
                <div className="contact-input-wrapper">
                <input type="text" placeholder='Mobile Number' />
                <input type="text" placeholder='Your Subject' />
                </div>
                <textarea name="" id="" placeholder='Your Message'></textarea>
                <button className='contact-buttons'>Send Message</button>
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
import React from 'react'
import './Contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';



  


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bw76srj', 'template_p79eddd', form.current,'B-RpkzBWFhR6hX_DI')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your email has been sent successfully!');
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the email. Please try again later.');
        },
      );
  };
  return (
    <div className='sm:w-full  lg:w-[50vw] lg:h-[30vw] sm:h-[105vw] lg:pl-[12vw] '>
        <div className='sm:pl-[8vw] lg:pl-[6vw] sm:mb-[5vw] lg:mb-[2vw]'>
            <h3 className='sm:text-[6vw] lg:text-[2vw] font-bold uppercase'>Contact Us</h3>
        </div>
        <div >
            <form ref={form} onSubmit={sendEmail} className='sm:flex sm:w-[90vw] lg:w-[30vw]  sm:ml-[5vw] sm:flex-col sm:justify-center sm:items-center sm:gap-[4vw] lg:gap-[1.5vw]' action="">
                <input className='custom-shadow lg:h-[3.5vw] capitalize  sm:w-full sm:h-[12vw] sm:pl-[4vw] placeholder:sm:text-[#000000] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw]  outline-none' required type="text" name="name" placeholder='Your Name' />
                <input className='custom-shadow lg:h-[3.5vw]  sm:w-full sm:h-[12vw] sm:pl-[4vw] placeholder:sm:text-[#000000] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw]  outline-none' required type="number" name="Phone number" placeholder='Phone Number' />
                <input className='custom-shadow lg:h-[3.5vw]  sm:w-full sm:h-[12vw] sm:pl-[4vw] placeholder:sm:text-[#000000] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw]  outline-none' required type="email" name="email" placeholder='Email' />
                <textarea className='custom-shadow lg:h-[5.5vw] lg:pt-[0.5vw]  sm:w-full sm:h-[25vw] sm:pl-[4vw] sm:pt-[4vw] placeholder:sm:text-[#000000] sm:placeholder:pt-[6vw] sm:placeholder:pl-[2vw] lg:placeholder:pl-[0.01vw] lg:placeholder:pt-[0.1vw]   outline-none' name="message" placeholder='Message' required></textarea>
                <button className='custom-shadow sm:w-[25vw]  lg:w-[6vw] lg:h-[2vw]  bg-[#f07b27]  sm:text-[#ffff] sm:text-[3.4vw] lg:text-[1.1vw] rounded sm:h-[10vw] uppercase font-bold  outline-none' type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
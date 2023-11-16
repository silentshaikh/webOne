import React from 'react'
import './Contact.css';
function Contact(props) {
  return (
    <>
     <div className="formBox" style={{padding: props.padd}}>
     <h1>Contact Page</h1>
    <form action="" className='formCont' >
      <label htmlFor="">Name</label>
      <input type="text" name="" id="" autoComplete='off' required placeholder='Enter Your Name' />
      <label htmlFor="">Email</label>
      <input type="email" name="" id="" placeholder='Enter Your Email' />
      <label htmlFor="">Message</label>
      <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
      <button>Submit</button>
    </form>
     </div>
    </>
  )
}

export default Contact

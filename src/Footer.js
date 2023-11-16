import React from 'react';
import './Footer.css';
import {BsInstagram} from 'react-icons/bs';
import {PiYoutubeLogoDuotone} from 'react-icons/pi';
import {BsFacebook} from 'react-icons/bs';
import { Divider } from 'antd';
function Footer() {
  return (
    <>
    <footer>
    <div className='footCont'>
    <div className="footOne">
    <div className="boxOne">
      <h5>ABDUL MOIZ</h5>
      <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptates rem nesciunt et laboriosam magnam numquam ipsam obcaecati quibusdam!</p>
    </div>
    <div className="boxOne two" style={{paddingTop:'5px',}}>
      <h5>Subscribe to get Update</h5>
      <form action="" className='formFoot'>
        <input type="email" name="" id="" required placeholder='Your Email' />
        <button>Subscribe</button>
      </form>
    </div>
    <div className="boxThree">
        <h3>Follow</h3>
        <div className="icon">
          <BsInstagram className='ins'/>
          <PiYoutubeLogoDuotone className='you'/>
          <BsFacebook className='fac'/>
        </div>
      </div>
    </div>
     </div>
     <Divider/>
     <p style={{textAlign:'center',paddingBottom:'5px',}}>©️ 2023 <strong style={{color:'#81ecec',}}>Abdul Moiz</strong> | All Right Reserved</p>
     </footer>
     </>
  )
}

export default Footer

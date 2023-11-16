import React from 'react';
import './HomeOne.css';
import { useNavigate } from 'react-router-dom';
function HomeOne(props) {
    let navig = useNavigate();
  return (
    <div className='hCont'>
      <div className="box1">
    <h5>Hello,</h5>
    <h1>ABDUL MOIZ</h1>
    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus, nostrum recusandae voluptas iure earum.</p>
    <button onClick={() => navig('/contact') }>Hire me</button>
      </div>
      <div className="boxTwo">
    <img src={props.img} alt="imgHero" />
      </div>
    </div>
  )
}

export default HomeOne;

import React from 'react';
import { servicApi } from './serviceApi';
import { Card } from 'antd';
import './Services.css';
function Services(props) {
  return (
    <>
    <h1 style={{padding: props.padd}}>Our Services</h1>
    <div className='servCont'>
     {servicApi.map((element,index) => {
      return ( <div className="box" key={index}>
      <Card className='card' hoverable style={{width: 300,}}
    cover={<img alt="example" src={element.img} />}>
  <p>{element.para}</p>
  <button>Read More..</button>
  </Card>
      </div>);
     })}
    </div>
    </>
  )
}

export default Services;

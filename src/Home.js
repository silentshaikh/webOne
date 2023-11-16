import React from 'react';
import HomeOne from './HomeOne';
import hImage from './721af4a898856cda8e464cdbff8d854f.jpg';
import Services from './Services';
import Contact from './Contact';
function Home() {
  return (
    <>
      {/* <h1>Home</h1> */}
      <HomeOne img={hImage}/>
      <Services padd='15px'/>
      <Contact padd='25px'/>
    </>
  )
}

export default Home

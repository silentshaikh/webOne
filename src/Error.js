import React from 'react'
import './Error.css';
import { useNavigate } from 'react-router-dom';
function Error() {
    let navig = useNavigate();
  return (
    <div className='error'>
      <h1>404</h1>
      <h2>Page not Found</h2>
      <button onClick={() => navig('/')}>Go Back</button>
    </div>
  )
}

export default Error;

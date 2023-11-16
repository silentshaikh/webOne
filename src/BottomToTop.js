import React,{useState,useEffect} from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import './BottomToTop.css';
import { FloatButton } from 'antd';
function BottomToTop() {
    const [scrlShow,upscrolShow] = useState(false);
    const goTop = () => {
        window.scroll({top:0,behavior:'smooth'})
    }
    const clickScroll = () => {
        let windScrl = document.body.scrollTop || document.documentElement.scrollTop;
        // windScrl > 250 ? upscrolShow(true) : upscrolShow(false);
        if(windScrl > 200){
            upscrolShow(true)
        }else{
            upscrolShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',clickScroll);
        return () => window.removeEventListener('scroll');
    },[])

  return ( 
    scrlShow && <BsFillArrowUpCircleFill className='top' onClick={goTop}/>
    // <FloatButton.BackTop/>
     );
}

export default BottomToTop

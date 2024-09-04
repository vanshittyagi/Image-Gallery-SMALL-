import React, { useState } from 'react'
import './Total.css'
const Total = () => {
    const [bigimg, setBigimg] = useState(null);

    const onpicClick = (src) => {
        setBigimg(src);
    }
    const oncrossclick = () => {
        setBigimg(null);
    }
  return (
    <div className='total'>
      <div className="texty"><h1>Click on Images to See it properly</h1></div>
        {bigimg && 
        <div>
            <img className='BIG' src={`assets/${bigimg}`} alt="Enlarged" />
            <img onClick={oncrossclick} className='cross' src="cross.svg" alt="" />
        </div> }
        <div className="images">
            {['photo1.avif', 'photo2.avif', 'photo3.avif', 'photo4.avif', 'photo5.avif', 'photo6.avif', 'photo7.avif', 'photo8.avif', 'photo9.avif'].map(src => (
                <img
                key={src}
                onClick={() => {onpicClick(src)}}
                className='picss'
                src={`assets/${src}`} alt="" />
            )) }
      </div>
    </div>
    
        )
}

export default Total

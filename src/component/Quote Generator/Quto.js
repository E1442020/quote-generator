import React from 'react';
import './QutoGenerator.css';
export default function Quto(props) {
  return (
   <>
   <div className="quto-container">
    <div className='quote-content'><h4>{props.content}</h4></div>
    <div className='quote-author'><p>{props.authorName}</p></div>
   </div>
   </>
  )
}

import React, { useEffect, useState } from 'react';
import Quto from './Quto';
import './QutoGenerator.css';

export default function QuoteGenerator() {
    const [quote,setQuote] =useState({});

    const fetchData = async () => {
        await fetch("https://api.quotable.io/random")
              .then((response) => response.json())
              .then((data) =>{setQuote(data);
                console.log(quote)}
              );
        
    }
     
    useEffect(()=>{
       fetchData()
       
    },[])
  return (
    <>
    <div className='quote-generator-container'>
        
        <Quto content={quote.content}  authorName={quote.author} key={quote._id}/>
        <div className='generate-btn'><button onClick={()=>fetchData()}>Generate another quote</button></div>
        
    </div>
    </>
  )
}

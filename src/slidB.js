import React, { useState, useEffect } from 'react';
import './App.css';
import FlipClock from 'x-react-flipclock';
import SlideA from "./App"




function SlideB() {

    const [Slide_A, setSlide_A] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setSlide_A(true);
      }, 5000);
  
      return () => clearTimeout(timeout);
    }, []);
  
    // Redirect to SlvsausB component after 1 minute
    if (Slide_A) {
      return <SlideA />;
    }
   


  return (
    <div className='MalibanfirstImgEng'>
<div className='clockMaliban'>
        <FlipClock
          type="countdown"  
          count_to="2023-11-11 24:00:00"
          units={[
            {
              sep: '',
              type: 'days',
              title: '',
            },
            {
              sep: ':',
              type: 'hours',
              title: '',
            },
            {
              sep: ':',
              type: 'minutes',
              title: '',
            },
            {
              sep: ':',
              type: 'seconds',
              title: '',
            },
          ]}
        />
      </div>
    </div>
   
  );
}

export default SlideB;

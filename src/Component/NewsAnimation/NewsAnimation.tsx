import React from 'react';
import Lottie from 'lottie-react';
import Newsanimation from './NewsAnimation.json';

function YourComponent() {

  return (
    <div>
      <Lottie
        animationData={Newsanimation}
        loop = {false}
        autoplay= {true}     
      />
    </div>
  );
}

export default YourComponent;

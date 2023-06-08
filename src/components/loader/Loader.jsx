import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

function Loader() {
  return (
    <div className=''>
      <RotatingLines Color='grey' strokeWidth='3' animationDuration='0.75' width='96' visible />
    </div>
  );
}

export default Loader;

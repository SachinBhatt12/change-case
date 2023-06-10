import React from 'react';
import Corousel from './Corousel/Corousel';

function CustomerReview() {
  return (
    <div className='text-center ' id='customerReviews'>
      <h1 className='text-4xl'>What Customers Say About Us</h1>
      <div className='corousel'>
        <Corousel />
      </div>
    </div>
  );
}

export default CustomerReview;

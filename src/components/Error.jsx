import React from 'react';
import ErrorPage from '../assets/ErrorPage.png';

function Error() {
  return (
    <div className='bg-white w-screen h-screen'>
      <h1>Oops, Something wrong here</h1>
      <p>404 error, page not found </p>
      <img src={ErrorPage} alt='Error page ' />
    </div>
  );
}

export default Error;

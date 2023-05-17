/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

function Location() {
  return (
    <>
      <h5 className='pickupformheading'>Location</h5>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='py-2'>
          <label htmlFor='flat'>Flat/House no./Apartment</label>
          <br />
          <input className='inputCommonCss w-full' type='text' name='flat' id='flat' />
        </div>

        <div className='py-2'>
          <label htmlFor='area'>Area/Street/Sector/Village</label>
          <br />
          <input className='inputCommonCss w-full' type='text' name='area' id='area' />
        </div>
        <div className='py-2'>
          <label htmlFor='landmark'>Landmark</label>
          <br />
          <input className='inputCommonCss w-full' type='text' name='landmark' id='landmark' />
        </div>
        <div className='py-2'>
          <label htmlFor='pincode'>Pincode</label>
          <br />
          <input type='number' className='inputCommonCss w-full' name='pincode' id='pincode' />
        </div>
        <div className='py-2'>
          <label htmlFor='city'>Town/City</label>
          <br />
          <input className='inputCommonCss w-full' type='text' name='city' id='city' />
        </div>
        <div className='py-2'>
          <label htmlFor='state'>State</label>
          <br />
          <input className='inputCommonCss w-full' type='text' name='state' id='state' />
        </div>
      </div>
    </>
  );
}

export default Location;

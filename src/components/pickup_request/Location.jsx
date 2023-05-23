/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Location({ formData = {}, handleformChange }) {
  const onhandleChange = (event) => {
    const { name, value } = event.target;
    handleformChange((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
      <h5 className='pickupformheading'>Location</h5>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='py-2'>
          <label htmlFor='flat'>Flat/House no./Apartment</label>
          <br />
          <input className='inputCommonCss w-full' type='text' name='flat_number' onChange={onhandleChange} value={formData.flat_number} id='flat' />
        </div>

        <div className='py-2'>
          <label htmlFor='area'>Area/Street/Sector/Village</label>
          <br />
          <input className='inputCommonCss w-full' type='text' name='area' onChange={onhandleChange} value={formData.area} id='area' />
        </div>
        <div className='py-2'>
          <label htmlFor='landmark'>Landmark</label>
          <br />
          <input className='inputCommonCss w-full' type='text' name='landmark' onChange={onhandleChange} value={formData.landmark} id='landmark' />
        </div>
        <div className='py-2'>
          <label htmlFor='pincode'>Pincode</label>
          <br />
          <input type='number' className='inputCommonCss w-full' name='pincode' onChange={onhandleChange} value={formData.pincode} id='pincode' />
        </div>
        <div className='py-2'>
          <label htmlFor='city'>Town/City</label>
          <br />
          <input className='inputCommonCss w-full' type='text' name='city' onChange={onhandleChange} value={formData.city} id='city' />
        </div>
        <div className='py-2'>
          <label htmlFor='state'>State</label>
          <br />
          <input className='inputCommonCss w-full' type='text' name='state' onChange={onhandleChange} value={formData.state} id='state' />
        </div>
      </div>
    </>
  );
}

export default Location;

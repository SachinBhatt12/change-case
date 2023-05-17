/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import Location from './Location';
import QuantityTable from './QuantityTable';
import DateOfPickup from './DateOfPickup';
import TimeSlots from './TimeSlots';

function PickupRequest() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedCheckboxes([...selectedCheckboxes, name]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== name));
    }
  };

  return (
    <div className='py-20'>
      <div className='heading'>
        <h1 className='text-center text-3xl font-bold'>Pickup Request</h1>
      </div>
      <div className='m-auto mt-10 w-11/12 text-xl border-2 p-5 shadow-lg '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <label htmlFor='name' className='font-semibold text-xl'>
            Name:
            <span>johny richard</span>
          </label>
          <label htmlFor='email' className='font-semibold text-xl'>
            Email-Id:
            <span>johny.richard@gmail.com</span>
          </label>
          <label htmlFor='mobile' className='font-semibold text-xl'>
            Mobile Number:
            <span>+91 9876543210</span>
          </label>
        </div>

        <br />
        <hr />
        <br />
        <form action=''>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className=''>
              <DateOfPickup />
            </div>
            <div className=''>
              <TimeSlots />
            </div>
          </div>

          <br />
          <hr />
          <br />
          <Location />
          <br />
          <hr />
          <br />
          <h4 className=' font-bold py-5'>Categories</h4>
          <div className='checkboxes grid grid-cols-2'>
            <label htmlFor='newspaper' className='mx-4'>
              <input type='checkbox' onChange={handleCheckboxChange} name='Newspaper' id='newspaper' />
              Newspaper
            </label>
            <label htmlFor='Books' className='mx-4'>
              <input type='checkbox' name='Books' onChange={handleCheckboxChange} id='Books' />
              Books
            </label>
            <label htmlFor='Cardboard' className='mx-4'>
              <input type='checkbox' onChange={handleCheckboxChange} name='Cardboard' id='Cardboard' />
              Cardboard
            </label>
            <label htmlFor='Glass' className='mx-4'>
              <input type='checkbox' onChange={handleCheckboxChange} name='Glass' id='Glass' />
              Glass
            </label>
            <label htmlFor='Iron' className='mx-4'>
              <input type='checkbox' name='Iron' onChange={handleCheckboxChange} id='Iron' />
              Iron
            </label>
            <label htmlFor='Plastic_Bottles' className='mx-4'>
              <input type='checkbox' onChange={handleCheckboxChange} name='Plastic_Bottles' id='Plastic_Bottles' />
              Plastic and Bottles
            </label>
          </div>
          <br />
          <hr />
          <br />
          <QuantityTable selectedCheckboxes={selectedCheckboxes} />
          <div className='button justify-center items-center '>
            <button type='submit' className=' primaryButton '>
              {' '}
              Confirm Pickup
              {' '}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PickupRequest;

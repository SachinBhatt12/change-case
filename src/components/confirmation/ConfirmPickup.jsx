import React from 'react';
import { NavLink } from 'react-router-dom';
import ConfirmPick from '../../assets/confirm_pickup.png';
import Backbtn from '../BackBtn';

function ConfirmPickup() {
  return (
    <div className='pt-14 scroll-smooth'>
      <div className='bg-teal-100   '>
        <div className='container flex justify-around'>
          <div className='py-10 px-20 justify-center'>
            <Backbtn />
            <h1 className='font-semibold px-20 text-4xl'>Yehh ! Pickup is confirmed</h1>
            <p className='px-20 py-5 text-xl'>Thankyou, for Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <NavLink to='/'>
              <button type='submit' className=' p-2  px-10 mt-10 mx-20 hover:bg-green-500 hover:text-white hover:border-white self-center border-green-600 border-2'>
                Go to Home page
              </button>
            </NavLink>
          </div>
          <div className='py-10 justify-end'>
            <img src={ConfirmPick} alt='' />
          </div>
        </div>
      </div>
      <div className='bg-gray-400' />
    </div>
  );
}

export default ConfirmPickup;

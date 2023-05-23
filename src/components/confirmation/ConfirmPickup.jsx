import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { NavLink, useNavigate } from 'react-router-dom';
import ConfirmPick from '../../assets/confirm_pickup.png';

function ConfirmPickup() {
  const navigate = useNavigate();
  return (
    <div className='pt-14 scroll-smooth'>
      <div className='bg-teal-100   '>
        <div className='container flex justify-around'>
          <div className='py-10 px-20 justify-center'>
            <RiArrowGoBackFill className='w-10 h-10 cursor-pointer' onClick={() => navigate(-1)} />
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

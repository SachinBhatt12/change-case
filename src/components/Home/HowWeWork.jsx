import React from 'react';
import schedulepickup from '../../assets/schedule_a_pick_up.svg';
import addresspickup from '../../assets/pickup_at_address.svg';
import receivePayment from '../../assets/recieve_payment.svg';

function HowWeWork() {
  return (
    <div className='bg-gray-600 text-white my-3 py-10 md:py-16 lg:py-20'>
      <h1 className='text-center text-3xl pt-4'>How we work</h1>
      <h3 className='text-center py-2 pb-4'>Kabadi Jee wil help to know true worth of your scrap</h3>

      <div className='flex flex-col md:flex-row justify-center md:space-x-8 p-4 lg:p-16 '>
        <div className='bg-white rounded-xl flex-1 mb-8 md:mb-0'>
          <div className='mx-auto w-52 md:w-80'>
            <div className='rounded-full w-7 text-white m-4 bg-green-500 border-green-400 border-3'>
              <p className='text-center text-xl'>1</p>
            </div>
            <img src={schedulepickup} alt='schedule a pickup' className='w-full h-48 object-contain' />
            <h3 className='text-center text-black'>Schedule Pickup</h3>
          </div>
        </div>
        <div className='bg-white rounded-xl flex-1 mb-8 md:mb-0'>
          <div className='mx-auto w-52 md:w-80'>
            <div className='rounded-full w-7 text-white m-4 bg-green-500 border-3'>
              <p className='text-center text-xl'>2</p>
            </div>
            <img src={addresspickup} alt='schedule a pickup' className='w-full h-48 object-contain' />
            <h3 className='text-center text-black'>Pickup at your address</h3>
          </div>
        </div>
        <div className='bg-white rounded-xl flex-1'>
          <div className='mx-auto w-52 md:w-80'>
            <div className='rounded-full w-7 text-white m-4 bg-green-500 border-green-400 border-3'>
              <p className='text-center text-xl'>3</p>
            </div>
            <img src={receivePayment} alt='schedule a pickup' className='w-full h-48 object-contain' />
            <h3 className='text-center text-black'>Receive Payment</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;

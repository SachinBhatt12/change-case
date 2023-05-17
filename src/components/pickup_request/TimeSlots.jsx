import React from 'react';

const timeSlotArray = ['10:00 AM to 12:00 PM', '12:00 PM to 02:00 PM', '02:00 PM to 04:00 PM', '04:00 PM to 06:00 PM'];

function TimeSlots() {
  return (
    <>
      <h1 className='pickupformheading pb-5'>Pickup Time</h1>
      <div className='grid grid-cols-1 gap-x-4 md:grid-cols-3 md:gap-x-6 lg:grid-cols-3 lg:gap-x-6'>
        {timeSlotArray.map((slot, index) => (
          <div className='bg-gradient-to-b from-green-300 w-52 px-1 rounded-2xl flex' key={index}>
            <div>
              <button type='submit' className='p-1'>
                {slot}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TimeSlots;

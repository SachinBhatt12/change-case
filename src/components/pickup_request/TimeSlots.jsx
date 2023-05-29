import React from 'react';

const timeSlotArray = ['10:00 AM ', '01:00 AM', '12:00 PM', '01:00 PM', '02:00 PM ', '03:00 PM', '04:00 PM', '05:00 PM', ' 06:00 PM'];

function TimeSlots({ onTimeChange }) {
  const handleTimeChange = (timeSlot) => {
    onTimeChange(timeSlot);
  };

  return (
    <>
      <h1 className='pickupformheading pb-5'>Pickup Time</h1>
      <div className='grid grid-cols-1 gap-x-4 md:grid-cols-3 md:gap-x-6 lg:grid-cols-3 lg:gap-x-6'>
        {timeSlotArray.map((slot, index) => (
          <div className=' cursor-pointer bg-gradient-to-b from-green-300 w-20 px-1 rounded-2xl flex' key={index}>
            <div>
              <button type='button' className='p-1' onClick={() => handleTimeChange(slot)}>
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

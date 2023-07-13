import React, { useState, useEffect } from 'react';

function TimeSlots({ onTimeChange, selectedDate }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeSlotArray, setTimeSlotArray] = useState([]);

  useEffect(() => {
    const getTimeSlots = () => {
      const timeSlots = [];
      const currentDate = new Date();

      // Set the starting hour
      const startHour = 10;

      // Set the ending hour
      const endHour = 18;

      // Set the time slot duration in minutes
      const timeSlotDuration = 60;

      let currentHour = currentDate.getHours();
      let currentMinute = currentDate.getMinutes();

      // Adjust the current hour and minute if the current time is after the last available time slot
      if (currentHour > endHour || (currentHour === endHour && currentMinute >= 0)) {
        currentHour = startHour;
        currentMinute = 0;
      }

      // Calculate the total number of time slots
      const totalSlots = ((endHour - startHour) * 60) / timeSlotDuration;

      // Loop to generate time slots
      for (let i = 0; i < totalSlots; i += 1) {
        const hour = startHour + Math.floor((i * timeSlotDuration) / 60);
        const minute = (i * timeSlotDuration) % 60;

        const slotDate = new Date(selectedDate);
        slotDate.setHours(hour);
        slotDate.setMinutes(minute);

        if (slotDate > currentDate) {
          // Format the hour and minute with leading zeros
          const formattedHour = hour.toString().padStart(2, '0');
          const formattedMinute = minute.toString().padStart(2, '0');

          // Create the time slot string in the desired format
          const timeSlot = `${formattedHour}:${formattedMinute}`;

          // Add the time slot to the array
          timeSlots.push(timeSlot);
        }
      }

      return timeSlots;
    };

    setTimeSlotArray(getTimeSlots());
  }, [selectedDate]);

  const handleTimeChange = (timeSlot) => {
    setSelectedTime(timeSlot);
    onTimeChange(timeSlot);
  };

  return (
    <>
      <h1 className='pickupformheading pb-5'>Pickup Time</h1>
      <div className='grid grid-cols-3 gap-x-4 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-6'>
        {timeSlotArray.map((slot, index) => (
          <div
            className={`my-2 cursor-pointer rounded-2xl flex ${
              selectedTime === slot ? 'bg-gradient-to-b from-green-500' : 'bg-slate-200'
            }`}
            key={index}
          >
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

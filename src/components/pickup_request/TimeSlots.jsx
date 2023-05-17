import React, { useState } from 'react';

const timeSlotArray = ['10:00 AM to 12:00 PM', '12:00 PM to 02:00 PM', '02:00 PM to 04:00 PM', '04:00 PM to 06:00 PM'];

const TimeSlots = () => {
  const startTime = '10:00am';
  const [endTime, setEndTime] = useState('12:00pm');

  const timeRange = (start, end) => {
    const startHour = parseInt(start.split(':')[0], 10);
    const endHour = parseInt(end.split(':')[0], 10);
    const slots = [];

    for (let hour = startHour; hour < endHour && hour <= 18; hour += 2) {
      const timeSlot = `${hour}:00${hour < 12 ? 'am' : 'pm'} to ${hour + 2}:00${hour + 2 < 12 ? 'am' : 'pm'}`;

      slots.push(
        <div key={timeSlot} className="py-1 flex flex-col items-center">
          {timeSlot}
        </div>
      );
    }

    return slots;
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  return (
    <>
      <h1 className="pickupformheading pb-5">Pickup Time</h1>
      <div className="grid grid-cols-1 gap-x-4 md:grid-cols-3 md:gap-x-6 lg:grid-cols-3 lg:gap-x-6">
        {timeSlotArray.map((slot, index) => (
          <div className="bg-gradient-to-b from-green-300 w-52 px-1 rounded-2xl flex" key={index}>
            <div>
              <button className="p-1">{slot}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimeSlots;

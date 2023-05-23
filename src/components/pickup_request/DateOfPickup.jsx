import React, { useEffect, useState } from 'react';

function DateOfPickup({ handleDateChange }) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const today = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const options = {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    const formattedDates = [];

    for (let i = 0; i < 7; i += 1) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const formattedDate = date.toLocaleDateString('en-US', options);
      const [, , , dateValue] = formattedDate.match(/(\w{3}), (\w{3}) (\d{1,2}),/);

      formattedDates.push({ weekday: days[date.getDay()], dateValue });
    }

    setDates(formattedDates);
  }, []);

  const handleDateClick = (date) => {
    const formattedDate = `${date.dateValue}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
    handleDateChange(formattedDate);
  };

  const handleDateKeyDown = (event, date) => {
    if (event.key === 'Enter') {
      handleDateChange(date);
    }
  };

  return (
    <>
      <h1 className='pickupformheading'>Date Of Pickup</h1>
      <div className='grid grid-cols-3 gap-4 md:flex md:gap-1 lg:flex lg:gap-1'>
        {dates.map((date, index) => (
          <div
            key={index}
            className='w-20 border-2 bg-gradient-to-b from-green-300 rounded-lg my-3 mx-2 p-4'
            tabIndex={0}
            onClick={() => handleDateClick(date)}
            onKeyDown={(event) => handleDateKeyDown(event, date)}
            role='button'
          >
            <h4 className='text-center font-semibold'>{date.weekday}</h4>
            <h4 className='text-center'>{date.dateValue}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default DateOfPickup;

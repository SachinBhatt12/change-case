import React, { useEffect, useState } from 'react';

function DateOfPickup() {
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

      if (date.getMonth() !== today.getMonth()) {
        options.month = 'long'; // Update month to retrieve next month's date
      }

      const matchResult = formattedDate.match(/(\w{3}), (\w{3}) (\d{1,2}),/);

      if (matchResult !== null) {
        const weekday = matchResult[1];
        const dateValue = matchResult[3];

        formattedDates.push({ weekday, dateValue });
      }
    }

    setDates(formattedDates);
  }, []);

  return (
    <div className='flex'>
      {dates.map((date, index) => (
        <div key={index} className='w-20 border-2 cursor-pointer bg-gradient-to-b from-green-300 rounded-lg my-3 mx-2 p-4'>
          <h4 className='text-center font-semibold'>{date.weekday}</h4>
          <h4 className='text-center'>{date.dateValue}</h4>
        </div>
      ))}
    </div>
  );
}

export default DateOfPickup;

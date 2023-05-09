import React, { useState } from "react";

const timeSlotArray = [
  "10:00 AM to 12:00 PM",
  "12:00 PM to 02:00 PM",
  "02:00 PM to 04:00 PM",
  "04:00 PM to 06:00 PM",
];

const TimeSlots = () => {
  const startTime = "10:00am";
  const [endTime, setEndTime] = useState("12:00pm");

  const timeRange = (start, end) => {
    const startHour = parseInt(start.split(":")[0], 10);
    const endHour = parseInt(end.split(":")[0], 10);
    const slots = [];

    for (let hour = startHour; hour < endHour && hour <= 18; hour += 2) {
      const timeSlot = `${hour}:00${hour < 12 ? "am" : "pm"} to ${hour + 2}:00${
        hour + 2 < 12 ? "am" : "pm"
      }`;

      slots.push(
        <div key={timeSlot} className="py-2 flex flex-col items-center">
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
    <div className="border-2 rounded-2xl text-center w-full md:w-48 bg-gradient-to-b from-green-300 flex">
      {timeSlotArray.map((slot, index) => {
        return (
          <div className="flex-1" key={index}>
            <button className="w-48">
              {slot}
            </button>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default TimeSlots;

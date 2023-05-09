import React, { useState } from "react";

import Location from "./Location";
import QuantityTable from "./QuantityTable";
import DateOfPickup from "./DateOfPickup";
import TimeSlots from "./TimeSlots";

function PickupRequest() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedCheckboxes([...selectedCheckboxes, name]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== name));
    }
  };

  return (
    <>
      <div className="py-20">
        <div className="heading">
          <h1 className="text-center text-3xl font-bold">Pickup Request</h1>
        </div>
        <div className="m-auto mt-10 w-11/12 text-xl border-2 p-5 shadow-lg ">
          <form action="">
            <h1>Date Of Pickup</h1>
            <div className="flex w-1/2">
              <div className="">
                <DateOfPickup />
              </div>
              <div className="">
              <TimeSlots />
              </div>
            </div>
            <Location />
            <hr />
            <h4 className=" font-bold py-5">Categories</h4>
            <div className="checkboxes grid grid-cols-2">
              <label className="px-2">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  name="Newspaper"
                  id=""
                />
                Newspaper
              </label>
              <label className="px-2">
                <input
                  type="checkbox"
                  name="Books"
                  onChange={handleCheckboxChange}
                  id=""
                />
                Books
              </label>
              <label className="px-2">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  name="Cardboard"
                  id=""
                />
                Cardboard
              </label>
              <label className="px-2">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  name="Glass"
                  id=""
                />
                Glass
              </label>
              <label className="px-2">
                <input
                  type="checkbox"
                  name="Iron"
                  onChange={handleCheckboxChange}
                  id=""
                />
                Iron
              </label>
              <label className="px-2">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  name="Plastic_Bottles"
                  id=""
                />
                Plastic and Bottles
              </label>
            </div>
            <hr />
            <QuantityTable selectedCheckboxes={selectedCheckboxes} />
            <div className="button items-center ">
              <button type="submit" className="col-span-2 primaryButton ">
                {" "}
                Confirm Pickup{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PickupRequest;

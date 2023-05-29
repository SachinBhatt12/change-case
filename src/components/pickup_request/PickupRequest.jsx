/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Location from './Location';
import QuantityTable from './QuantityTable';
import DateOfPickup from './DateOfPickup';
import TimeSlots from './TimeSlots';
import { fetchScrap } from '../../redux/features/scraprateSlice';
import { initialPickupState, orderPickup } from '../../redux/features/pickupSlice';
import UserInfo from './UserInfo';

function PickupRequest() {
  const [formData, setFormData] = useState(initialPickupState);

  const handleformChange = (updateFormData) => {
    setFormData(updateFormData);
  };

  const dispatch = useDispatch();
  const { data: scrapData } = useSelector((state) => state.scrapDetails);
  const checkboxData = scrapData?.data;
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleCheckClick = (event, item) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedCheckboxes([...selectedCheckboxes, item]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((selectedItem) => selectedItem !== item));
    }
  };
  const handleFormChange = (form) => {
    formData.flat_number = form.flat_number;
    formData.area = form.area;
    formData.landmark = form.landmark;
    formData.city = form.city;
    formData.state = form.state;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    formData.pickup_date = date;
  };
  const onTimeChange = (time) => {
    formData.pickup_time = time;
  };
  const handleQuantityChange = (itemId, quantity) => {
    const updatedFormData = {
      ...formData,
      pickup_request_items: formData.pickup_request_items.map((item) => {
        if (item.item_id === itemId) {
          return { ...item, weight: quantity };
        }
        return item;
      }),
    };
    setFormData(updatedFormData);
    handleFormChange(updatedFormData); // Updated function call
  };
  console.log(formData);

  const handleSubmit = (Data) => {
    console.log(Data);
    dispatch(orderPickup(Data));
  };

  useEffect(() => {
    dispatch(fetchScrap())?.then((response) => response);
  }, [dispatch]);
  return (
    <div className='py-20 scroll-smooth'>
      <div className='heading'>
        <h1 className='text-center text-3xl font-bold'>Pickup Request</h1>
      </div>
      <div className='m-auto mt-10 w-11/12 text-xl border-2 p-5 shadow-lg` '>
        <UserInfo />
        <br />
        <hr />
        <br />
        <form onSubmit={handleSubmit(formData)}>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className=''>
              <DateOfPickup handleDateChange={handleDateChange} />
            </div>
            <div className=''>
              <TimeSlots onTimeChange={onTimeChange} />
            </div>
          </div>

          <br />
          <hr />
          <br />
          <Location handleformChange={handleformChange} />

          <br />
          <hr />
          <br />
          <h4 className=' font-bold py-5'>Categories</h4>
          <div className='checkboxes grid grid-cols-2'>
            {checkboxData?.map((item) => (
              <label key={item?.id} htmlFor={item?.item_name} className='mx-4'>
                <input type='checkbox' onChange={(event) => handleCheckClick(event, item)} name={item?.item_name} id={item?.item_name} />
                {item?.item_name}
              </label>
            ))}
          </div>
          <br />
          <hr />
          <br />
          <QuantityTable selectedCheckboxes={selectedCheckboxes} handleFormChange={handleQuantityChange} />

          <div className='button justify-center items-center '>
            <NavLink to='/confirmpickup'>
              <button type='submit' className=' primaryButton '>
                {' '}
                Confirm Pickup
                {' '}
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PickupRequest;

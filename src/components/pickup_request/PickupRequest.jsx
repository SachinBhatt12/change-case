/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Location from './Location';
import QuantityTable from './QuantityTable';
import 'react-toastify/dist/ReactToastify.css';
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
  const navigate = useNavigate();
  const { data: scrapData } = useSelector((state) => state.scrapDetails);
  const checkboxData = scrapData?.data;
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCheckClick = (event, item) => {
    const { checked } = event.target;
    if (checked) {
  
      setSelectedCheckboxes([...selectedCheckboxes, item]);
        console.log("oiuy",selectedCheckboxes);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((selectedItem) => selectedItem !== item));
    }
  };

  // const handleFormChange = (form) => {
  //   formData.flat_number = form.flat_number;
  //   formData.area = form.area;
  //   formData.landmark = form.landmark;
  //   formData.city = form.city;
  //   formData.state = form.state;
  // };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    formData.pickup_date = date;
  };
  const onTimeChange = (time) => {
    formData.pickup_time = time;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    formData.user = localStorage.getItem('userid');
    dispatch(orderPickup(formData)).then((response) => {
      const pickupResponseData = response?.payload;
      if (pickupResponseData?.status === 201) {
        toast.success('Pickup Request Added Successfully');
        navigate('/confirmpickup', { state: { pickupData: pickupResponseData?.data } });
      } else {
        toast.error('Something went wrong');
      }
    });
  };
  const handleQuantityChange = (updatedItems) => {
    setFormData((prevState) => ({
      ...prevState,
      pickup_request_items:[...prevState.pickup_request_items, ...updatedItems],
    }));
  };

  useEffect(() => {
    dispatch(fetchScrap())?.then((response) => response);
  }, [dispatch]);

  return (
    <div className="py-20 scroll-smooth">
      <div className="heading">
        <h1 className="text-center text-3xl font-bold">Pickup Request</h1>
      </div>
      <div className="m-auto mt-10 w-11/12 text-xl border-2 p-5 shadow-lg` ">
        <UserInfo />
        <br />
        <hr />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1 2xl:grid-cols-2">
            <div className="">
              <DateOfPickup handleDateChange={handleDateChange} />
            </div>
            <div className="">
              <TimeSlots onTimeChange={onTimeChange} selectedDate={selectedDate} />
            </div>
          </div>

          <br />
          <hr />
          <br />
          <Location handleformChange={handleformChange} />

          <br />
          <hr />
          <br />
          <h4 className=" font-bold py-5">Categories</h4>
          <div className="checkboxes grid grid-cols-2">
            {checkboxData?.map((item) => (
              <label key={item?.id} htmlFor={item?.item_name} className="mx-5 flex gap-3">
                <input type="checkbox" onChange={(event) => handleCheckClick(event, item)} name={item?.item_name} id={item?.item_name} /> {item?.item_name}
              </label>
            ))}
          </div>
          <br />
          <hr />
          <br />

          <QuantityTable selectedCheckboxes={selectedCheckboxes} onQuantityChange={handleQuantityChange} />

          <div className="button justify-center items-center ">
            <button type="submit" className=" primaryButton ">
              {' '}
              Confirm Pickup{' '}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PickupRequest;

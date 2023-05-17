import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import confirm_pickup from '../../assets/confirm_pickup.png';

function ConfirmPickup() {
  return (
    <>
      <div className="pt-14 ">
        <div className="bg-teal-100 flex justify-between ">
          <div className="container p-20 justify-start">
            <RiArrowGoBackFill className="w-10 h-5" />
          </div>
          <div className="py-10 justify-center">
            <h1 className="font-semibold text-4xl">Yehh ! Pickup is confirmed</h1>
            <p>Thankyou, for Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
          </div>
          <div className="container py-10 justify-end">
            <img src={confirm_pickup} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmPickup;

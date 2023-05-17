import React from 'react';
import household from '../../assets/household.svg';
import HouseholdElement from '../../assets/household_element.svg';

function ServiceForHouseHold() {
  return (
    <div className='' id='household'>
      <h1 className='text-5xl text-center my-10'>Our Services for Household & Cooperates</h1>
      <div className='text-white flex justify-evenly bg-gray-500'>
        <div className='container pt-10 px-20 flex justify-around '>
          <div className='image self-end '>
            <img src={household} alt='' />
          </div>
          <br />
          <div className='content relative'>
            <div className='img absolute -top-5 -right-32'>
              <img src={HouseholdElement} alt='household element' />
            </div>
            <div className='subcontent pt-20 '>
              <h2 className='text-end text-4xl'>HouseHolds</h2>
              <p className='text-end w-96'>Why step out to get rid of your scrap, when you can book scrap pickup service from the comfort and convenience of your home</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceForHouseHold;

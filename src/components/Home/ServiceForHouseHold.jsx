/* eslint-disable react/no-unescaped-entities */
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
              <p className='text-end w-96'>
                Any item that is left over or wasted after doing routine domestic tasks is referred to as household scrap. This can include outdated clothing, damaged furniture, discarded electronics,
                and other non-essential household items. It's crucial to properly dispose of household scrap in order to protect the environment and maintain public safety and health. We " Kabadi Jee
                ” will help you in minimizing your household scrap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceForHouseHold;

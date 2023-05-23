/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
// import { initialPickupState } from '../../redux/features/pickupSlice';

function QuantityTable({ selectedCheckboxes, onFormChange }) {
  const selectedItems = selectedCheckboxes;
  const [formData, setFormData] = useState([]);

  // const handleQuantityChange = (itemId, quantity) => {
  //   const updatedFormData = formData.filter((item) => item.id !== itemId); // Remove the item if it already exists
  //   updatedFormData.push({ id: itemId, quantity }); // Add the item with the updated quantity
  //   setFormData(updatedFormData);
  //   props.onFormChange({ pickup_request_items: updatedFormData }); // Pass the updated form data to the parent component
  // };
  const handleQuantityChange = (itemId, quantity) => {
    onFormChange(itemId, quantity);
  };

  return (
    <table className='w-full'>
      <thead className='border-2'>
        <tr className='px-10'>
          <th>Categories</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody className='w-full'>
        {selectedItems?.map((checkedValue) => (
          <tr key={checkedValue.id}>
            <td className='text-center'>{checkedValue.item_name}</td>
            <td className='text-center'>{checkedValue.rate}</td>
            <td>
              <select
                className='block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'
                name='quantity'
                value={formData.find((item) => item.id === checkedValue.id)?.quantity || ''}
                onChange={(e) => handleQuantityChange(checkedValue.id, e.target.value)}
              >
                <option value=''>Select Quantity</option>
                <option value='<500g'>less than 500g</option>
                <option value='500g-5kg'>500g-5kg</option>
                <option value='>5kg'>greater than 5kg</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default QuantityTable;

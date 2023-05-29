/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

function QuantityTable({ selectedCheckboxes }) {
  const selectedItems = selectedCheckboxes;
  const [formData, setFormData] = useState({
    pickup_request_items: [],
  });

  const handleQuantityChange = (itemId, quantity) => {
    const updatedFormData = formData.pickup_request_items.map((item) => {
      if (item.item_id === itemId) {
        return { ...item, weight: quantity };
      }
      return item;
    });

    setFormData((prevState) => ({
      ...prevState,
      pickup_request_items: updatedFormData,
    }));
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
        {selectedItems?.map((checkedValue) => {
          const selectedItem = formData.pickup_request_items.find((item) => item.id === checkedValue.id);
          const selectedQuantity = selectedItem ? selectedItem.quantity : '';

          return (
            <tr key={checkedValue.id}>
              <td className='text-center'>{checkedValue.item_name}</td>
              <td className='text-center'>{checkedValue.rate}</td>
              <td>
                <select
                  className='block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'
                  name='quantity'
                  defaultValue={selectedQuantity} // Use defaultValue instead of value
                  onChange={(e) => handleQuantityChange(checkedValue.id, e.target.value)}
                >
                  <option value=''>Select Quantity</option>
                  <option value='<500g'>less than 500g</option>
                  <option value='500g-5kg'>500g-5kg</option>
                  <option value='>5kg'>greater than 5kg</option>
                </select>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default QuantityTable;

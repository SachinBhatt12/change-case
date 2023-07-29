/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';

function QuantityTable({ selectedCheckboxes, onQuantityChange }) {
  console.log("SElect",selectedCheckboxes)
  const selectedItems = selectedCheckboxes;
  const [formData, setFormData] = useState({
    pickup_request_items: [],
  });

  const handleQuantityChange = (itemId, quantity) => {
    const updatedItems = [...formData.pickup_request_items];
    const selectedItemIndex = updatedItems.findIndex((item) => item.item_id === itemId);

    if (selectedItemIndex !== -1) {
      updatedItems[selectedItemIndex].weight = quantity;
    } else {
      updatedItems.push({ item_id: itemId, weight: quantity });
    }

    onQuantityChange(updatedItems);
  };
  useEffect(() => {
    onQuantityChange(formData.pickup_request_items);
  }, [formData.pickup_request_items]);
  return (
    <table className='w-full'>
      <thead className='border-2'>
        <tr className='px-10'>
          <th>Categories</th>
          <th>Price</th>
          <th>Quantity (in kgs)</th>
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
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='30'>30</option>
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

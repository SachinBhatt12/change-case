import React from "react";

function QuantityTable(props) {
  return (
    <>
      <table className="w-full">
        <thead className="border-2">
          <tr className="px-10">
            <th>Categories</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {props.selectedCheckboxes.map((checkedValue, index) => {
            return (
              <tr key={index}>
                <td className="text-center">{checkedValue}</td>
                <td></td>
                <td>
                  <select
                    className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                    name=""
                    id=""
                  >
                    <option value="<500g"> less than 500g</option>
                    <option value="<500g">500g-5kg</option>
                    <option value="<500g">greater than 5kg</option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default QuantityTable;

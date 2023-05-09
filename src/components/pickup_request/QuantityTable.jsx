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
                <td>{checkedValue}</td>
                <td></td>
                <td>
                  <select name="" id="">
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

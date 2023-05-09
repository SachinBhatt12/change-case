import React from "react";
import we_are_the_best from "../../assets/we_are_the_best.svg";
import element from "../../assets/element.svg";
const checkboxes = [
  { label: "Best Price" },
  { label: "Digital weighing process" },
  { label: "Hassle free pickup" },
  { label: "9 AM to 7 PM support helpline" },
  { label: "Best Price" },
  { label: "Digital weighing process" },
];

function WhyWeAreBest() {
  return (
    <>
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-5 sm:p-20"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
         >
          <div className="w-full h-72 sm:h-auto">
            <img
              src={we_are_the_best}
              className="mx-auto h-full"
              alt="why we are the best"
            />
          </div>
          <div className=" flex flex-col justify-center">
            <div className="self-end">
              <img src={element} alt="star design image" />
            </div>
            <h1 className="text-center text-2xl">Why we are the best</h1>
            <p className="py-5 text-md">
              Suppose end get boy warrant general natural. Delightful met
              sufficient projection ask. Decisively everything principles if
              preference do impression of. Preserved oh so difficult repulsive
              on in household. In what do miss time be. Valley as be appear
              cannot so by. Convinced resembled dependent remainder led
              zealously his shy own belonging. Always length letter adieus add
              number moment she. Promise few compass six several old offices
              removal parties fat. Concluded rapturous it intention perfectly
              daughters is as.
            </p>
            <div className="checkboxes w-full sm:w-80">
              {checkboxes.map((checkbox, index) => {
                return (
                  <label
                    key={index}
                    htmlFor={`checkbox-${index}`}
                    className="inline-flex items-center pr-5 text-sm font-medium text-gray-700"
                  >
                    <input
                      id={`checkbox-${index}`}
                      type="checkbox"
                      defaultChecked={true}
                      className="form-checkbox h-6 w-6 px-10 text-accent-green rounded-md"
                    />
                    <span className="ml-2 px-5 text-xl">{checkbox.label}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyWeAreBest;
import React from "react";
import we_are_the_best from "../../assets/we_are_the_best.svg";
import element from "../../assets/element.svg";
import check from "../../assets/check.png";

const checkboxes = [
  { label: "Best Price" },
  { label: "Digital weighing process" },
  { label: "Hassle-free pickup" },
  { label: "9 AM to 7 PM support helpline" },
  { label: "Best Price" },
  { label: "Digital weighing process" },
];

function WhyWeAreBest() {
  return (
    <div className="container" id="whyUs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-5 sm:p-20">
        <div className="w-full h-72 sm:h-auto">
          <img
            src={we_are_the_best}
            className="mx-auto h-full"
            alt="why we are the best"
          />
        </div>
        <div className="flex flex-col justify-between relative">
          <div className="self-end md:self-auto absolute right-2 -top-5">
            <img src={element} alt="star design image" />
          </div>
          <h1 className="text-center md:text-left text-4xl font-semibold">
            Why we are the best
          </h1>
          <p className="py-5 text-md">
            Suppose end get boy warrant general natural. Delightful met
            sufficient projection ask. Decisively everything principles if
            preference do impression of. Preserved oh so difficult repulsive on
            in household. In what do miss time be. Valley as be appear cannot so
            by. Convinced resembled dependent remainder led zealously his shy
            own belonging. Always length letter adieus add number moment she.
            Promise few compass six several old offices removal parties fat.
            Concluded rapturous it intention perfectly daughters is as.
          </p>
          <div className="checkboxes w-full md:w-80">
            {checkboxes.map((checkbox, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={check} className="py-1" alt="" />
                <span className="text-xl">{checkbox.label}</span>
              </div>
            ))}
          </div>
          <div className="button pt-8">
            <button className="px-44 py-2 border-2 border-blue-500 text-blue-500 hover:text-white hover:border-white hover:bg-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWeAreBest;

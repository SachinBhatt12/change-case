import React from "react";
import Status from "./Status";
import sideImage from "../../assets/illutratin.svg";

function HeroBar() {
  return (
    <>
      <div className="flex flex-col py-16 lg:flex-row lg:space-x-4">
  <div className="w-full lg:w-4/12 lg:pt-40 lg:ml-32">
    <h1 className="text-2xl text-center lg:text-left py-2 my-10">
      Small Actions, Big Impact:
      <br />
      <span className="text-green-500 text-4xl">Recycle with Us</span>
    </h1>
    <div className="flex justify-center lg:justify-start lg:mt-6 lg:p-3">
      <div className="text-start py-8 h-full flex flex-wrap gap-2 ">
        <Status />
      </div>
    </div>
  </div>
  <div className="w-full lg:w-auto">
    <img src={sideImage} alt="" className="pt-40 w-full lg:h-auto" />
  </div>
</div>

    </>
  );
}

export default HeroBar;
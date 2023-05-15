import React from "react";
import cooprate_element from "../../assets/cooprate_element.svg";
import cooperate from "../../assets/cooprate.svg";
function Cooperate() {
  return (
    <>
      <div className="bg-teal-50">
        <div className="container p-10 flex relative flex-col md:flex-row items-center justify-center">
          <div className="image md:px-10 absolute left-10 top-10">
            <img src={cooprate_element} alt="" className="w-[100%]" />
          </div>
          <div className="content text-center md:text-left pt-10 md:pt-0 md:pl-20">
            <h1 className="text-5xl">Cooperates</h1>
            <p className="text-md pt-4 md:w-80">
              Why step out to get rid of your scrap, when you can book scrap
              pickup service from the comfort and convenience of your home
            </p>
          </div>
          <div className="pl-0 md:pl-40 pt-10 md:pt-0">
            <img src={cooperate} alt="cooperate image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cooperate;
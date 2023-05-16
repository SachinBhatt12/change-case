import React from "react";
import UsefulLinks from "./Links.json";

function Links() {
  return (
    <>
      <div className="text-white text-2xl w-28 mx-52">
        <h1>Links</h1>
        {UsefulLinks?.map((link, index) => {
          return (
            <ul key={index} className="text-lg">
              <li className="pt-3 cursor-pointer">{link.label}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Links;
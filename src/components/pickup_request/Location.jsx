import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
function Location() {
    const [latitude,setLatitude]=useState("");
    const [longitude,setLongitude]=useState("");

    const getlocation = ()=>{
 // navigator.geolocation.getCurrentPosition((position)=>{
        //     // console.log(position);
        //     setLatitude(position.coords.latitude);
        //     setLongitude(position.coords.longitude);
        axios.get('https://ipapi.co/json')
        .then((Response)=>{
            console.log(Response);
        }).catch(err=>{
            console.log(err);
        })
    // })
    }
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <label htmlFor="name" className="col-span-2">
          Name :{" "}
        </label>
        <h5 className="col-span-2 text-xl">Location</h5>
        <div className="py-2">
          <label htmlFor="">Flat/House no./Appartment</label>
          <input className="inputCommonCss" type="text" name="" id="" />
        </div>
        <div className="py-2">
          <label htmlFor="">Area/Street/Sector/Village</label>
          <input className="inputCommonCss" type="text" name="" id="" />
        </div>
        <div className="py-2">
          <label htmlFor="">Landmark</label>
          <input className="inputCommonCss" type="text" name="" id="" />
        </div>
        <div className="py-2">
          <label htmlFor="">Pincode</label>
          <input type="number" className="inputCommonCss" name="" id="" />
        </div>
        <div className="py-2">
          <label htmlFor="">Town/City</label>
          <input className="inputCommonCss" type="" name="" id="" />
        </div>
        <div className="py-2">
          <label htmlFor="">State</label>
          <input className="inputCommonCss" type="text" name="" id="" />
        </div>
        {/* <div className="py-2">
          <label htmlFor="">Use Your Current Location</label>
          <button onClick={getlocation} className="bg-white rounded border-2 p-1 ml-2">
            <BiCurrentLocation />
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Location;

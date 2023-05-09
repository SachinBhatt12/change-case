import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import recyclerLogo from "../../assets/Logo.png";
import { FaRegUserCircle, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div>
        <header className=" px-14 fixed drop-shadow-xl w-full mainBgCard">
          <div className="p-2 flex justify-between">
            <NavLink to="/">
              <div className="logo flex items-center ">
                <img
                  src={recyclerLogo}
                  alt="companyLogo"
                  className="w-40 h-12"
                />
              </div>
            </NavLink>
            <div className="flex justify between">
              <ul className={`md:flex md:items-center sm:transform origin-top transition-all duration-2000 ease-linear md:w-auto w-full ${isMenuOpen ? '' : 'hidden'}`}>
                <NavLink to="/">
                  <li className="m-2 text-xl pl-4 items-center ">Home</li>
                </NavLink>
                <NavLink to="/">
                  <li className="m-2 text-xl pl-4 items-center ">Why Us</li>
                </NavLink>
                <NavLink to="/">
                  <li className="m-2 text-xl pl-4 items-center ">Services</li>
                </NavLink>
                <NavLink to="/">
                  <li className="m-2 text-xl pl-4 items-center ">Reviews</li>
                </NavLink>
                <NavLink to="/">
                  <li className="m-2 text-xl pl-4 items-center ">Our Story</li>
                </NavLink>
                <NavLink to="/scraprates">
                  <li className="m-2 text-xl pl-4 items-center ">
                    Scrap Rates
                  </li>
                </NavLink>

           
              </ul>
              {/* Hamburger menu start */}
              <div className="md:hidden flex justify-end">
                <button onClick={toggleMenu}>
                  {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
                </button>
              </div>
              {/* Hamburger menu end */}
              <button className="border-2 flex justify-end p-2 rounded-lg">
                  <FaRegUserCircle />
                  Login
                </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navigation;

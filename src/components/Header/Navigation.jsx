import React, { useState } from "react";
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import recyclerLogo from "../../assets/logo.png";
import { FaTimes } from "react-icons/fa";
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
                  className="w-44 h-10"
                />
              </div>
            </NavLink>
            <div className="flex justify between">
              <ul className={`md:flex md:items-center sm:transform origin-top transition-all duration-2000 ease-linear md:w-auto w-full ${isMenuOpen ? '' : 'hidden'}`}>
                <NavHashLink to="/">
                  <li className="m-2 text-xl pl-4 items-center ">Home</li>
                </NavHashLink>
                <NavHashLink to="/">
                  <li className="m-2 text-xl pl-4 items-center ">Why Us</li>
                </NavHashLink>
                <NavHashLink to="/">
                  <li className="m-2 text-xl pl-4 items-center ">Services</li>
                </NavHashLink>
                <NavHashLink to="/">
                  <li className="m-2 text-xl pl-4 items-center ">Reviews</li>
                </NavHashLink>
                <NavHashLink to="/">
                  <li className="m-2 text-xl pl-4 items-center ">Our Story</li>
                </NavHashLink>
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
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navigation;

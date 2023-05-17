import React from 'react';
import footerimg from '../../assets/footer illlustration.svg';
import recyclerLogo from '../../assets/dark_theme_logo.svg';
import SocialHandle from './SocialHandle';
import Links from './Links';
import ContactUs from './ContactUs';

function SiteFooter() {
  return (
    <>
      <div className="bg-gray-500">
        <div className="container mx-auto py-20 flex flex-col items-center justify-around text-center sm:flex-row sm:text-left">
          <div className="mb-10 sm:mb-0 sm:mr-20">
            <img src={recyclerLogo} alt="companyLogo" className="text-white w-40 h-12 mb-5 sm:mb-0" />
            <address className="py-5 text-white text-lg">
              57/B-block, tower town,
              <br /> Vishvaas nagar, Delhi 110045
            </address>
            <img src={footerimg} alt="footerimg" className="h-32 sm:h-48" />
          </div>
          <div className="mb-10 sm:mb-0">
            <div className="links">
              <Links />
            </div>
          </div>
          <div className="mb-10 sm:mb-0">
            <ContactUs />
          </div>
        </div>
        <hr />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-white p-10 py-2 text-lg">
            Copywrite <span className="text-3xl">&copy;</span> 2023, All Rights are Reserved with Pando Indian Software Consultant
          </p>
          <div className="p-5">
            <SocialHandle />
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteFooter;

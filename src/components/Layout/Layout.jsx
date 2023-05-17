import React from 'react';
import Header from '../Header/Navigation';
import { Outlet } from 'react-router-dom';
import SiteFooter from '../footer/SiteFooter';

export const Layout = () => {
  return (
    <div>
      <header className="-pt-9 w-full">
        <Header />
      </header>
      <main className=" h-full min-h-screen">
        <div className="">
          <Outlet />
        </div>
      </main>
      <footer>
        <SiteFooter />
      </footer>
    </div>
  );
};

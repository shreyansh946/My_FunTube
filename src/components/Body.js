// components/Body.js
import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex'> {/* Adjust grid layout as needed */}
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Body;

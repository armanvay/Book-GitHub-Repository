import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayOut = () => {
    return (
        <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayOut;
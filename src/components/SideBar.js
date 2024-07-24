// components/SideBar.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;


    return (
        <div className='p-5 shadow-lg w-48 bg-gray-100'> {/* Added background color for contrast */}
            <ul className='space-y-2'>
                <li className='hover:bg-gray-200 p-2 rounded font-bold cursor-pointer'>
                    <Link to="/">Home</Link></li>
                <li className='hover:bg-gray-200 p-2 rounded'>Sports</li>
                <li className='hover:bg-gray-200 p-2 rounded'>Gaming</li>
                <li className='hover:bg-gray-200 p-2 rounded'>Movies</li>
            </ul>

            <h1 className='font-bold pt-5 cursor-pointer'>Subscription</h1>
            <ul className='space-y-2'>
                <li className='hover:bg-gray-200 p-2 rounded'>Music</li>
                <li className='hover:bg-gray-200 p-2 rounded'>Sports</li>
                <li className='hover:bg-gray-200 p-2 rounded'>Gaming</li>
                <li className='hover:bg-gray-200 p-2 rounded'>Movies</li>
            </ul>

            <h1 className='font-bold pt-5 cursor-pointer'>WatchList</h1>
            <ul className='space-y-2'>
                <li className='hover:bg-gray-200 p-2 rounded'>Music</li>
                <li className='hover:bg-gray-200 p-2 rounded'>Sports</li>
                <li className='hover:bg-gray-200 p-2 rounded'>Gaming</li>
                <li className='hover:bg-gray-200 p-2 rounded'>Movies</li>
            </ul>
        </div>
    );
}

export default SideBar;

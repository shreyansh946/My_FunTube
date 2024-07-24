// components/Heads.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';
import { Youtube_Search_Api } from '../Utils/Constant.js';
import { cacheResults } from '../Utils/SearchSlice.js';

const Heads = () => {
    const dispatch = useDispatch();
    const [SearchQuerry, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[SearchQuerry]) {
                setSuggestions(searchCache[SearchQuerry]);
            }
            else {
                getsearchSuggestion()
            }

        }, 200);

        return () => {
            clearTimeout(timer);
        }

    }, [SearchQuerry]);

   // components/Heads.js
const getsearchSuggestion = async () => {
    try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${SearchQuerry}`;
        const response = await fetch(proxyUrl + targetUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();
        const json = JSON.parse(text);

        setSuggestions(json[1]);
        dispatch(cacheResults({ [SearchQuerry]: json[1] }));
    } catch (error) {
        console.error('Failed to fetch suggestions:', error);
    }
};


    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
            <div className="flex col-span-1 cursor-pointer">
                <img
                    onClick={toggleMenuHandler}
                    className='h-12'
                    src='https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png'
                    alt='menu'
                />
                <a href='/'>
                    <img
                        className='h-12 mx-2'
                        src='https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg'
                        alt='youtube-logo'
                    />
                </a>
            </div>
            <div className='col-span-10 px-10'>
                <div>
                    <input
                        type='text'
                        className='w-1/2 border border-gray-400 p-2 rounded-l-full'
                        value={SearchQuerry}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}

                    />
                    <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
                        Search
                    </button>
                </div>

                {showSuggestions && (<div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg">
                    <ul>
                        {
                            suggestions.map((s) => (
                                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>
                            ))
                        }
                    </ul>
                </div>)}


            </div>
            <div className='col-span-1'>
                <img
                    className='h-12'
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                    alt='user-icon'
                />
            </div>
        </div>
    );
}

export default Heads;

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CloseMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CloseMenu());
    })

    return (
        <div className="flex flex-col w-full">
            <div className="px-5 flex">
                <div >
                    <iframe width="1000"
                        height="600"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" ></iframe>
                </div>
            <div className='w-full'>
                <LiveChat />
            </div>
            </div>
            <CommentContainer />
        </div>
    )
}

export default WatchPage
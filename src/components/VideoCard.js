import React from 'react';

const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) {
    return (
      <div className='p-2 m-2 w-72 shadow-lg border border-red-500'>
        <p className='text-red-500'>Error loading video data</p>
      </div>
    );
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className="rounded-lg" alt='thumbnail' src={thumbnails?.medium?.url || ''} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount ? `${statistics.viewCount} Views` : 'Views data not available'}</li>
      </ul>
    </div>
  );
}

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-700">
      <VideoCard info={info} />
    </div>
  );
}

export default VideoCard;

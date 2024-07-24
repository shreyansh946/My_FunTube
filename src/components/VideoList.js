import React, { useEffect, useState } from 'react';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { Youtube_Api } from '../Utils/Constant';

const categories = [
  'All',
  'Music',
  'Gaming',
  'News',
  'Movies',
  'Sports'
];

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(Youtube_Api);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVideos(data.items);
        setFilteredVideos(data.items); // Initialize with all videos
      } catch (error) {
        setError('Failed to fetch videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredVideos(videos);
    } else {
      // Filter based on category if available, otherwise modify logic
      setFilteredVideos(videos.filter(video => video.snippet.title.toLowerCase().includes(category.toLowerCase())));
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex mb-4'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 mx-1 border rounded  ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='flex flex-wrap justify-center'>
        {loading && <p className="w-full text-center text-gray-500">Loading videos...</p>}
        {error && <p className="w-full text-center text-red-500">{error}</p>}
        {filteredVideos[0] && <AdVideoCard info={filteredVideos[0]} />}
        {filteredVideos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default VideoList;

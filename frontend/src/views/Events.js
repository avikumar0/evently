import React, { useState, useEffect } from 'react';
import { FaHeart, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import eventData from '../data/event.json';

function MyEvents() {
  const [likedEvents, setLikedEvents] = useState([]);

  useEffect(() => {
    // Filter liked events from eventData
    const filteredEvents = eventData.filter(event => event.is_liked);
    setLikedEvents(filteredEvents);
  }, []);

  const formatTime = (time) => {
    const hour = parseInt(time.split(':')[0]);
    let formattedTime = '';
    if (hour === 0) {
      formattedTime = '12 AM';
    } else if (hour === 12) {
      formattedTime = '12 PM';
    } else if (hour < 12) {
      formattedTime = `${hour} AM`;
    } else {
      formattedTime = `${hour - 12} PM`;
    }
    return formattedTime;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">My Liked Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {likedEvents.map(event => (
            <div key={event.id} className="rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:scale-105">
              <img
                src={`http://localhost:8000/${event.image}`}
                className="w-full h-64 object-cover object-center hover:opacity-75 transition duration-300 "
                alt={event.event_name}
              />
              <div className="p-6 bg-white">
                <h5 className="text-xl font-semibold mb-2">{event.event_name}</h5>
                <p className="text-gray-700 mb-2 flex items-center"><FaCalendarAlt className="mr-2" />{event.date}</p>
                <p className="text-gray-700 mb-2 flex items-center"><FaClock className="mr-2" />{formatTime(event.time)}</p> {/* Use formatTime function */}
                <p className="text-gray-700 mb-4 flex items-center"><FaMapMarkerAlt className="mr-2" />{event.location}</p>
                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-full mr-2 hover:bg-blue-600 transition duration-300">Details</button>
                  <button className={`px-4 py-2 ${event.is_liked ? 'bg-red-500' : 'bg-blue-500'} text-white rounded-full hover:bg-opacity-75 transition duration-300`}>
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>© Company 2023-2024</p>
      </footer>
    </div>
  );
}

export default MyEvents;

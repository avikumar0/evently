import React, { useState, useEffect } from 'react';
import useAxios from '../utils/useAxios';
import { FaHeart } from 'react-icons/fa';

function MyEvents() {
  const axiosInstance = useAxios();
  const [likedEvents, setLikedEvents] = useState([]);

  useEffect(() => {
    // Fetch liked events from the Django backend API based on IDs stored in local storage
    const likedEventsIds = JSON.parse(localStorage.getItem('likedEvents')) || [];
    axiosInstance.get('http://localhost:8000/api/events/', {
      params: { ids: likedEventsIds.join(',') }
    })
      .then(response => {
        setLikedEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching liked events:', error.response.data);
      });
  }, []);

  const handleLike = (eventId) => {
    // Update the liked status of the event
    const updatedEvents = likedEvents.map(event => {
      if (event.id === eventId) {
        return { ...event, isLiked: !event.isLiked };
      }
      return event;
    });
    setLikedEvents(updatedEvents);

    // You can also make a POST request to update the liked status in the backend
  };

  return (
    <div>
      <main role="main" style={{ marginTop: 55 }}>
        <div className="container">
          <h1 className="display-3">My Liked Events</h1>
          <div className="row">
            {likedEvents.map(event => (
              <div key={event.id} className="col-md-4 mb-4 mt-3">
                <div className="card">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={`http://127.0.0.1:8000/${event.image}`}
                      className="card-img-top"
                      alt={event.event_name}
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                  </div>
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title">{event.event_name}</h5>
                      <p className="card-text">Date: {event.date}</p>
                      <p className="card-text">Time: {event.time}</p>
                      <p className="card-text">Location: {event.location}</p>
                    </div>
                    <div className="d-flex ">
                      <button className="btn btn-primary mr-2">Details</button>
                      <button className={`btn ${event.isLiked ? 'btn-danger' : 'btn-primary'}`} onClick={() => handleLike(event.id)}>
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="container">
        <p>© Company 2023-2024</p>
      </footer>
    </div>
  );
}

export default MyEvents;

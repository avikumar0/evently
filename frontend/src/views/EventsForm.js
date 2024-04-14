import React, { useState } from 'react';
import useAxios from '../utils/useAxios';

function EventsForm() {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const axiosInstance = useAxios(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare form data
    const formData = new FormData();
    formData.append('event_name', eventName);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('location', location);
    formData.append('image', image);
  
    try {
      const response = await axiosInstance.post('/events/', formData); // Use axiosInstance for authorized request
      console.log('Event created:', response.data);
      // Reset form fields after successful submission
      setEventName('');
      setDate('');
      setTime('');
      setLocation('');
      setImage(null);
    } catch (error) {
      console.error('Error creating event:', error.response.data); // Log error response data
    }
  };
  

  return (
    <div className="container" style={{ marginTop: '50px' }}> {/* Added inline style marginTop here */}
      <h2 className="mb-4">Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">Event Name:</label>
          <input type="text" className="form-control" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time:</label>
          <input type="time" className="form-control" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location:</label>
          <input type="text" className="form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image:</label>
          <input type="file" className="form-control-file" id="image" onChange={(e) => setImage(e.target.files[0])} required />
        </div>
        <button type="submit" className="btn btn-primary">Create Event</button>
      </form>
    </div>
  );
}

export default EventsForm;

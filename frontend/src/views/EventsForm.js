import React, { useState } from 'react';

function EventsForm() {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (no backend interaction for now)
    console.log("Form submitted:", { eventName, date, time, location, image });
    // Reset form fields after submission
    setEventName('');
    setDate('');
    setTime('');
    setLocation('');
    setImage(null);
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="eventName" className="block text-gray-700 font-bold mb-2">Event Name:</label>
          <input
            type="text"
            id="eventName"
            className="form-input mt-1 block w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            placeholder="Enter event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date:</label>
          <input
            type="date"
            id="date"
            className="form-input mt-1 block w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Time:</label>
          <input
            type="time"
            id="time"
            className="form-input mt-1 block w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location:</label>
          <input
            type="text"
            id="location"
            className="form-input mt-1 block w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image:</label>
          <input
            type="file"
            id="image"
            className="form-input mt-1 block w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Create Event</button>
      </form>
    </div>
  );
}

export default EventsForm;

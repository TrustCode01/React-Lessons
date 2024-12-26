import React, { useState } from 'react';

const EventComponent = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    venue: '',
    date: '',
    time: '',
    images: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewEvent({ ...newEvent, images: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, newEvent]);
    setNewEvent({
      title: '',
      description: '',
      venue: '',
      date: '',
      time: '',
      images: []
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="venue"
          placeholder="Event Venue"
          value={newEvent.venue}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="time"
          name="time"
          value={newEvent.time}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="file"
          name="images"
          multiple
          onChange={handleFileChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Event
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Past Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded bg-gray-50">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.venue}</p>
            <p>{event.date} at {event.time}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
              {event.images.map((image, idx) => (
                <img key={idx} src={URL.createObjectURL(image)} alt={`Event ${index} Image ${idx}`} className="w-full h-auto rounded" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventComponent;

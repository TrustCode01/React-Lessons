import React, { useState } from 'react';
import './EventComponent.css'; // Import CSS for styling

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
    <div className="event-component">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="venue"
          placeholder="Event Venue"
          value={newEvent.venue}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="time"
          value={newEvent.time}
          onChange={handleInputChange}
          required
        />
        <input
          type="file"
          name="images"
          multiple
          onChange={handleFileChange}
          required
        />
        <button type="submit">Add Event</button>
      </form>

      <h2>Past Events</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.venue}</p>
            <p>{event.date} at {event.time}</p>
            <div className="image-gallery">
              {event.images.map((image, idx) => (
                <img key={idx} src={URL.createObjectURL(image)} alt={`Event ${index} Image ${idx}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventComponent;

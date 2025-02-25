import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import "/src/assets/css/home/pastEvents.css";

const PastEvents = () => {
  const eventTypes = [
    {
      type: "Hackathon Events",
      images: [
        "/home/mainBg.png",
        "/home/hackathon1.png",
        "/home/hackathon2.png",
        "/home/hackathon3.png",
      ],
    },
    {
      type: "Workshop Events",
      images: [
        "/home/workshop1.png",
        "/home/workshop2.png",
        "/home/workshop3.png",
      ],
    },
    {
      type: "Conference Events",
      images: [
        "/home/conference1.png",
        "/home/conference2.png",
        "/home/conference3.png",
      ],
    },
    {
      type: "Networking Events",
      images: [
        "/home/networking1.png",
        "/home/networking2.png",
        "/home/networking3.png",
      ],
    },
  ];

  // State to track the selected event type and image index
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle event type selection
  const handleEventSelect = (index) => {
    setSelectedEventIndex(index);
    setCurrentImageIndex(0); // Reset to first image when changing event type
  };

  // Navigate to next image
  const handleNextImage = () => {
    const maxIndex = eventTypes[selectedEventIndex].images.length - 1;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous image
  const handlePrevImage = () => {
    const maxIndex = eventTypes[selectedEventIndex].images.length - 1;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Get the current image source
  const currentImageSrc =
    eventTypes[selectedEventIndex].images[currentImageIndex];

  const navigate = useNavigate();
  return (
    <>
      <div className="past-events-container">
        {/* Left section - Event listing */}
        <div className="event-listing">
          <h2 className="event-title">Past Events</h2>

          <div className="event-items">
            {/* Map through the event types */}
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className={`event-box ${
                  index === selectedEventIndex ? "featured-event" : ""
                }`}
                onClick={() => handleEventSelect(index)}
                style={{ cursor: "pointer" }}
              >
                <p className="event-text">{event.type}</p>
              </div>
            ))}
          </div>

          {/* Call to action button */}
          <div className="cta-button">
            <button className="cta-btn" onClick={() => navigate("/events")}>
              See our active events
              <ArrowUpRight size={30} />
            </button>
          </div>
        </div>

        {/* Right section - Image with navigation */}
        <div className="image-container">
          <img
            src={currentImageSrc}
            alt={`${eventTypes[selectedEventIndex].type} Photo`}
            className="eventPhotos"
          />

          {/* Navigation controls */}
          <button className="nav-btn left" onClick={handlePrevImage}>
            <ChevronLeft size={20} />
          </button>
          <button className="nav-btn right" onClick={handleNextImage}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default PastEvents;

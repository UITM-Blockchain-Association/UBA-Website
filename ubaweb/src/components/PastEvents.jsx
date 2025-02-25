import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import "/src/assets/css/pastEvents.css";

const PastEvents = () => {
  const eventTypes = [
    {
      type: "Hackathon Events",
      images: [
        "/mainBg.png",
        "/hackathon1.png",
        "/hackathon2.png",
        "/hackathon3.png",
      ],
    },
    {
      type: "Workshop Events",
      images: ["/workshop1.png", "/workshop2.png", "/workshop3.png"],
    },
    {
      type: "Conference Events",
      images: ["/conference1.png", "/conference2.png", "/conference3.png"],
    },
    {
      type: "Networking Events",
      images: ["/networking1.png", "/networking2.png", "/networking3.png"],
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

          {/* <div className="event-items">
            <div className="event-box featured-event">
              <p className="event-text">Hackathon Events</p>
            </div>
            <div className="event-box">
              <p className="event-text">Hackathon Events</p>
            </div>
            <div className="event-box">
              <p className="event-text">Hackathon Events</p>
            </div>
            <div className="event-box">
              <p className="event-text">Hackathon Events</p>
            </div>
          </div> */}
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

import React, { useState } from "react";
import "./EventPage.css";
import img1 from "../components/image/sdgcampaign.jpg";
import img2 from "../components/image/sdgquiz.jpg";
import img3 from "../components/image/compliment wall.jpg";

function EventPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleExplore = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="event-page-container">
      <h1 className="title">PAST EVENTS OF SPARK</h1>
      <div className="events-container">
        <div className="event-card">
          <img src={img1} alt="CAMPAIGN ON SDG" className="event-image" />
          <p className="event-date">6th November 2024</p>
          <h2 className="event-title">CAMPAIGN ON SDG</h2>
          <p className="event-description" style={{ textAlign: "left" }}>
            An SDG awareness campaign was conducted through classroom visits,
            engaging students in discussions about the SDG and encouraging...
          </p>
          <button
            className="explore-button"
            onClick={() =>
              handleExplore({
                date: "6th November 2024",
                title: "CAMPAIGN ON SDG",
                description:
                  "An SDG awareness campaign was conducted through classroom visits, engaging students in discussions about the SDG and encouraging them to contribute toward a sustainable future.",
                image: img1,
              })
            }
          >
            Explore
          </button>
        </div>

        <div className="event-card">
          <img src={img2} alt="SDG QUIZ" className="event-image" />
          <p className="event-date">7th November 2024</p>
          <h2 className="event-title">SDG QUIZ</h2>
          <p className="event-description" style={{ textAlign: "left" }}>
            An engaging on-campus quiz was conducted to raise awareness of the
            Sustainable Development Goals (SDGs) among students, fostering...
          </p>
          <button
            className="explore-button"
            onClick={() =>
              handleExplore({
                date: "7th November 2024",
                title: "SDG QUIZ",
                description:
                  "An engaging on-campus quiz was conducted to raise awareness of the Sustainable Development Goals (SDGs) among students, fostering knowledge and commitment to global sustainability.",
                image: img2,
              })
            }
          >
            Explore
          </button>
        </div>

        <div className="event-card">
          <img src={img3} alt="COMPLIMENT WALL" className="event-image" />
          <p className="event-date">7th November 2024</p>
          <h2 className="event-title">COMPLIMENT WALL</h2>
          <p className="event-description" style={{ textAlign: "left" }}>
            We set up a 'compliment wall' to spread positivity and encourage
            kindness, inspiring students to share uplifting messages with one
            another...
          </p>
          <button
            className="explore-button"
            onClick={() =>
              handleExplore({
                date: "7th November 2024",
                title: "COMPLIMENT WALL",
                description:
                  "We set up a 'compliment wall' to spread positivity and encourage kindness, inspiring students to share uplifting messages with one another.",
                image: img3,
              })
            }
          >
            Explore
          </button>
        </div>
      </div>

      {selectedEvent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-body">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="modal-image"
              />
              <div className="modal-details">
                <p className="modal-date">{selectedEvent.date}</p>
                <h2 className="modal-title">{selectedEvent.title}</h2>
                <p className="modal-description">{selectedEvent.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventPage;

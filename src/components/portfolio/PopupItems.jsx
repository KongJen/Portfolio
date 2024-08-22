import React from "react";

const PopupItems = ({ project, onClose }) => {
  if (!project) return null;

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert(
        "Sorry, there's no additional information available for this project at the moment."
      );
    }
  };

  return (
    <div className="popup-backdrop">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <div className="popup-container">
          <h3>{project.title}</h3>
          <div className="popup-image-container">
            <img
              src={project.image}
              alt={project.title}
              className="popup-image"
            />
          </div>
          <p>{project.description}</p>
          <div className="popup-buttons">
            {project.figma && (
              <button
                className="popup-button"
                onClick={() => handleLinkClick(project.figma)}
              >
                Figma
              </button>
            )}
            {project.github && (
              <button
                className="popup-button"
                onClick={() => handleLinkClick(project.github)}
              >
                GitHub
              </button>
            )}
            {project.web && (
              <button
                className="popup-button"
                onClick={() => handleLinkClick(project.web)}
              >
                Web
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupItems;

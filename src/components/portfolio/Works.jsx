import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import PopupItems from "./PopupItems";

const Works = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [clickedProject, setClickedProject] = useState(null);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  const handleMoreClick = (id) => {
    const project = projectsData.find((p) => p.id === id);
    setClickedProject(project);
  };

  const handleClosePopup = () => {
    setClickedProject(null);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return (
            <WorkItems
              item={item}
              key={item.id}
              onMoreClick={handleMoreClick}
            />
          );
        })}
      </div>

      {clickedProject && (
        <PopupItems project={clickedProject} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Works;

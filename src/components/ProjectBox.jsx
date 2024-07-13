import React from "react";
import '../components/styles/ProjectBox.css';

const ProjectBox = ({ title, description, imgSrc, imgAlt, projLink }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img src={imgSrc} alt={imgAlt} className="object-contain" />
            <strong>{title}</strong>
          </div>
        </div>
        <div className="front">

          <div className="img">
            <div className="circle">
            </div>
            <div className="circle" id="right">
            </div>
            <div className="circle" id="bottom">
            </div>
          </div>

          <div className="front-content">
            <a
              href={projLink}
              target="_blank"
              rel="noopener noreferrer"
            ><small className="badge">View Project</small></a>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{title}</strong>
                </p>
              </div>
              <p className="card-footer">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;

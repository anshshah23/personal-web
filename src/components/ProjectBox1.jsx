import React from "react";
import '../components/styles/ProjectBox.css';

const ProjectBox = ({ title, description, imgSrc, imgAlt, projLink }) => {
    return (
        <div class="card">
            <div class="content">
                <div class="back">
                    <div class="back-content">
                        <a href={projLink}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={imgSrc} alt={imgAlt} className="w-64 h-64 object-contain" />
                        </a>
                        <strong>{title}</strong>
                    </div>
                </div>
                <div class="front">

                    <div class="img">
                        <div class="circle">
                        </div>
                        <div class="circle" id="right">
                        </div>
                        <div class="circle" id="bottom">
                        </div>
                    </div>

                    <div class="front-content">
                        <small class="badge">Pasta</small>
                        <div class="description">
                            <div class="title">
                                <p class="title">
                                    <strong>Spaguetti Bolognese</strong>
                                </p>
                                <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                            </div>
                            <p class="card-footer">
                                30 Mins &nbsp; | &nbsp; 1 Serving
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectBox;

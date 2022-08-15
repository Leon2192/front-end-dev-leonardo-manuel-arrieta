import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.instagram.com/leon_arrieta/">
                <InstagramIcon />
              </a>
              <a href="https://github.com/Leon2192">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/leonardo-manuel-arrieta/">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com/Leonard51150343">
                <TwitterIcon />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              ¡Hola! Mi nombre es Leonardo Manuel Arrieta
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  steps={[
                    "Front-end Dev 🔥",
                    1000,
                    "React Js 💻",
                    1000,
                    "Angular Js 💻",
                    1000,
                    "Next Js 💻",
                    1000,
                    "React Native 📱",
                    1000,
                    "Expo 📱",
                    1000,
                    "Node Js 💻",
                    1000,
                    "HTML 💻",
                    1000,
                    "CSS 💻",
                    1000,
                    "Javascript 💻",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h1>
              <span className="profile-role-tagline">
                FRONT-END DEVELOPER Junior
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#proyectos">
              <button className="button-view-more">Ver proyectos</button>
            </a>
            <a
              href="CV-LeonardoManuelArrieta.pdf"
              download="Leonardo Arrieta CV-LeonardoManuelArrieta.pdf"
            >
              <button className="button-download-cv">Descargar CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

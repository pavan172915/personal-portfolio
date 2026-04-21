import React from "react";
import "./Profile.css"
// import Typical from "react-typical";
import { TypeAnimation } from 'react-type-animation';
import ScrollService from "../../../Utils/ScrollService";
import chandu from "../../../assets/Home/chandu.png"

const Profile = (props) => {

  console.log(chandu)
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.instagram.com/">
                <i className="fa fa-google-plus-square"></i>
              </a>
              
              <a href="https://www.instagram.com/">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello I'm <span className="highlighted-text">Pavan</span>
            </span>
          </div>
          <div className="prfoile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <TypeAnimation
  sequence={[
    'Go-lang Developer', 1000,
    'React/Angular Developer', 1000,
    'AWS/GCP Cloud Engineer', 1000,
  ]}
  speed={50}
  repeat={Infinity}
  style={{ color: '#ffffff' }}
/>
                {/* <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Node js Lover",
                    1000,
                    "React/React Native Developer",
                    1000,
                    "Angular",
                    1000,
                  ]}
                /> */}
              </h1>
              <span className="profile-role-tagline">
                Knack of learning new technologies and improving in them!
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={()=>ScrollService.scrollHandler.scrollToHireMe()}>{""} 
            Hire Me {"   "}</button>
            <a href="PAVAN.pdf" download="Pavan_CV.pdf">
              <button className="btn highlighted-btn">Preview Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background" style={{ 
  backgroundImage: `url(${chandu})`,
            }} ></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

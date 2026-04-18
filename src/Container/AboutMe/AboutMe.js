import React,{useEffect} from "react";
import ScreenHeading from "../../Utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utils/ScrollService";
import Animations from "../../Utils/Animations";
import "./Aboutme.css";
const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) {
      return;
    }  
    Animations.animations.fadeInScreen(props.id);
  };
  useEffect(() => {
    const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    // Cleanup on unmount to prevent memory leaks
    return () => fadeInSubscription.unsubscribe();
  }, []);


  const SCREEN_CONSTANTS = {
    description:
      "Full Stack Developer with a background knowledge of MERN stack",
    highlights: {
      bullets: [
        "Full Stack Web and Mobile Developer",
        "Interactive Front-End as part the design",
        "React and React-Native",
        "Redux for State Management",
        "Building REST API",
        "Managing DataBase",
      ],
      heading: "Here Are A Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((bullet, i) => {
      return (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{bullet}</span>
        </div>
      );
    });
  };
  return (   
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title="About Me" subheading="Why Choose Me?" />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn" onClick={()=>ScrollService.scrollHandler.scrollToHireMe()}>
                {""}
                Hire Me {"   "}
              </button>
              <a href="PAVAN.pdf" download="Pavan_CV.pdf">
                <button className="btn highlighted-btn">Preview Resume</button>
              </a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

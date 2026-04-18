import React, { useState,useEffect } from "react";
import ScrollService from "../../Utils/ScrollService";
import ScreenHeading from "../../Utils/ScreenHeading/ScreenHeading";
import Animations from "../../Utils/Animations";
import "./Resume.css";

const ResumeHeading = (props) => {
  return (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : "hello"}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
    </div>
  );
};

const Resume = (props) => {
  const [selectedBulletIndex, setSelelctedBulletIndex] = useState(0);
  const [carouselOffStyle, setCarouselOffStyle] = useState({});
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

  
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Personal Projects", logoSrc: "projects.svg" },
    { label: "Personal Interests", logoSrc: "interests.svg" },
  ];
  const programmingSkillsDetails = [
    { skill: "Golang", ratingPercent: "70%" },
    { skill: "Angular", ratingPercent: "80%" },
    { skill: "React", ratingPercent: "80%" },
    { skill: "Java", ratingPercent: "60%" },
    { skill: "React Native", ratingPercent: "50%" },
    { skill: "AWS/GCP cloud", ratingPercent: "70%" },

  ];
  const projectsDetails = [
    {
      title: "Personal Portifolio Website",
      duration: { fromDate: "2020", toDate: 2021 },
      description:
        "A personal portifolio website to show case all my details and projects at one place",
      subheading: "Technologies Used: React js and Bootstrap",
    },
    {
      title: "Community food saver mobile application",
      duration: { fromDate: "2021", toDate: 2022 },
      description:
        "A simple easy to use mobile application where a group of people in communtiy can upload leftover food to the application for all to see and purchase if needed.",
      subheading: "Technologies Used: React native,node js",
    },
    {
      title: "Interactive Chat Bot",
      duration: { fromDate: "2018", toDate: 2020 },
      description:
        "An interactive chat bot using google's dialogflow primarly used to submit query requests for any agency to reduce man hours.",
      subheading: "Technologies Used: React js, Google's Dialogflow",
    },
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Keshav Memorial Institute Of Technology,Hyderabad"}
        subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
        fromDate={"2018"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Narayana Junior College"}
        subHeading={"Math Physics Chemistry"}
        fromDate={"2016"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Bhashyam Public School"}
        fromDate={"2010"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"OpenText Technologies,India"}
          subHeading={"Associate Software Developer"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercent}}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subheading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];
  const carouselHandler = (index) => {
    let offsetHeight = 360;
    let newCarouselOffset = {
      style: {
        transform: "translateY(" + index * offsetHeight * -1 + "px)",
      },
    };
    setCarouselOffStyle(newCarouselOffset);
    setSelelctedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => {
       return (
        <div
          onClick={() => carouselHandler(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`)}
            alt="Oops!! NO internet!"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      );
    });
  };
  const getResumeScreen = () => {
    return (
      <div style={carouselOffStyle.style} className="resume-details-carousal">
        {resumeDetails.map((detail) => detail)}
      </div>
    );
  };
  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title="Resume" subheading="Breif Formal Details" />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

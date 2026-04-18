import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../Utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utils/ScrollService";
// import Typical from "react-typical";
import Animations from "../../Utils/Animations";
import "./ContactMe.css";


const ContactMe = (props) => {
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


  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleMail = (event) => {
    setMail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  const submitForm = async (event) => {
    event.preventDefault();
    console.log('EVENT',event)
    try {
      let data = {
        name,
        mail,
        message,
      };
      setBool(true);
      console.log(data);
      const res = await axios.post(`/contact`, data);
      console.log("III",res);
      if (name.length === 0 || mail.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg); 
        toast.success(res.data.msg);
        setBool(false);
      }
    } catch (error) {
      console.log("Skipped try");
      console.log(error);
      setBanner(error)
      toast.error(error)
      setBool(false)
    }
  };
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading="Let's Keep In Touch" title="Contact Me" />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {""}
            {/* <Typical
              loop={Infinity}
              steps={[
                "Get In Touch 📧",
                1000,
                "Drop A Mail Stating Your Reason ✅✅",
                1000,
                "Keep Learning 😎",
                1000,
              ]}
            /> */}
            Let's Keep In Touch!!
          </h2>
          <a href="https://www.instagram.com/">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here 👉</h4>
            <img src={imgBack} alt="img not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />
            <label htmlFor="email">E-Mail</label>
            <input type="email" onChange={handleMail} value={mail} />
            <label htmlFor="Message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />
            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="no internet" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

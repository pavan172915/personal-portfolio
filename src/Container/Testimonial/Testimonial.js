import React,{ useEffect } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../Utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utils/ScrollService";
import Animations from "../../Utils/Animations";
import react1 from '../../../src/img/Testimonial/REACT1.png'
import socket from '../../../src/img/Testimonial/socket.png'
import node from '../../../src/img/Testimonial/node.png'
import dialgoflow from '../../../src/img/Testimonial/dialogflow.png'

import "./Testimonial.css"
const Testimonial = (props) => {
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
  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:1,
        },
        1000:{
            items:3,
        },
    }
  };
  return (
    <div>
      <ScreenHeading
        title="My Projects"
        subHeading="Breif Overview Of My Projects"
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            {/* <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Developed a chatbot for a Internet Service provider to meet the basic user needs in resolving basic queries raised by the user
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={dialgoflow} alt="No Internet" />
                    <h5>Pavan Yanamadala</h5>
                    <p>Google's Dialogflow</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Developed a simple Weather application,by which user can learn about his or her city's weather using the city's name
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={node} alt="No Internet" />
                    <h5>Pavan Yanamadala</h5>
                    <p>Node JS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Developed a group chat application where multiple users can join using a room-id and chat among themselves
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={socket} alt="No Internet" />
                    <h5>Pavan Yanamadala</h5>
                    <p>Socket.io</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Developed a fashion inventory management system, where the  owner can manage sales and count of all his products
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={react1} alt="No Internet" />
                    <h5>Pavan Yanamadala</h5>
                    <p>React JS</p>
                  </div>
                </div>
              </div>
            </OwlCarousel> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

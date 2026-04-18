import Home from "../Container/Home/Home";
import AboutMe from "../Container/AboutMe/AboutMe";
import Resume from "../Container/Resume/Resume";
import Testimonial from "../Container/Testimonial/Testimonial";
import ContactMe from "../Container/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    comp: Home,
  },
  {
    screen_name: "AboutMe",
    comp: AboutMe,
  },
  {
    screen_name: "Resume",
    comp: Resume,
  },
  {
    screen_name: "Testimonial",
    comp: Testimonial,
  },
  {
    screen_name: "Contact Me",
    comp: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) {
    return -1;
  }
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) {
      return i;
    }
  }
  return -1;
};

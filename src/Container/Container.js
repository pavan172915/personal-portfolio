import React from "react";
import { TOTAL_SCREENS } from "../Utils/CommonUtils";

const Container = () => {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((scrn) => {
      // ✅ Assign to a capitalized variable first
      const ScreenComponent = scrn.comp;
      return (
        <ScreenComponent
          screenName={scrn.screen_name}
          key={scrn.screen_name}
          id={scrn.screen_name}
        />
      );
    });
  };

  return <div className="portifolio-container">{mapAllScreens()}</div>;
};

export default Container;
import React from "react";
import { Box } from "grommet";
import { Hpe } from "grommet-icons";
import "bootstrap/dist/css/bootstrap.css";
import "../About/about.css";

const AboutComponent = () => {
  return (
    <div className="aboutComponent container">
      <div>
        <Hpe color="plain" size="large" />
      </div>
      <div className="about-hpe">
          <p>HPE is the global edge-to-cloud company built to 
              transform your business. How? By helping you connect, 
              protect, analyze, and act on all your data and applications 
              wherever they live, from edge to cloud, so you can turn insights 
              into outcomes at the speed required to thrive in today’s 
              complex world.</p>
      </div>
    </div>
  );
};

export default AboutComponent;

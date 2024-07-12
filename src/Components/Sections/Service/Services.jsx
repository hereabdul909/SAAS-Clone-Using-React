import React, { useState } from "react";
import { Sec } from "./StyledServices";
import { FcSettings } from "react-icons/fc";
import { PiLightbulbDuotone } from "react-icons/pi";
import { FaGgCircle } from "react-icons/fa6";

function Services() {
  const [currentImage, setCurrentImage] = useState(null);

  const Slides = {
    img1:
      "https://cdn.wewantsaas.com/images/staffAugmentation/services/why-work-with-wws/Get-Connected-To-A-Pre-Vetted-Sales-Team.svg",
    img2:
      "https://cdn.wewantsaas.com/images/staffAugmentation/services/why-work-with-wws/Stay-Updated-With-The-Status-Of-Your-Projects.svg",
    img3:
      "https://cdn.wewantsaas.com/images/staffAugmentation/services/why-work-with-wws/Get-the-Attention-You-Need-Beyond-Deployment.svg",
    img4:
      "https://cdn.wewantsaas.com/images/staffAugmentation/services/why-work-with-wws/Complete-Team-Deployment-Within-72-92-Hours.svg",
  };
  return (
    <Sec>
      <div className="container">
        <h1>Why Select Our Services?</h1>
        <div className="img-cards">
          {currentImage && <img src={currentImage} alt="Picture" />}
          <div className="boxes">
            <div
              className="box"
              onMouseEnter={() => setCurrentImage(Slides.img1)}
            >
              <div>
                <FaGgCircle className="icon" />
              </div>
              <div>
                <h3>Convenient Pre-Vetted Team Access</h3>
                <p>
                  At We Want SaaS, we prioritise your convenience and the
                  on-time completion of your projects, which is why our HR
                  experts will connect you to a pre-verified software
                  development team quickly.
                </p>
              </div>
            </div>
            <div
              className="box"
              onMouseEnter={() => setCurrentImage(Slides.img2)}
            >
              <div>
                <FcSettings className="icon" />
              </div>
              <div>
                <h3>Accurate Task Management Service</h3>
                <p>
                  The best part about working with us? You get your own project
                  manager, who will be responsible for managing your assigned
                  team and keeping track of the worked hours while keeping you
                  in the loop.
                </p>
              </div>
            </div>
            <div
              className="box"
              onMouseEnter={() => setCurrentImage(Slides.img3)}
            >
              <div>
                <PiLightbulbDuotone className="icon" />
              </div>
              <div>
                <h3>Excellent Post-Deployment Solutions</h3>
                <p>
                  Our dedication to your SaaS business stays consistent even
                  after deployment. We will perform continuous, in-depth audits
                  to prep your SaaS product for a successful and competitive
                  market launch.
                </p>
              </div>
            </div>
            <div
              className="box"
              onMouseEnter={() => setCurrentImage(Slides.img4)}
            >
              <div>
                <PiLightbulbDuotone className="icon" />
              </div>
              <div>
                <h3>Get An Assembled Team Within 72-92 hrs</h3>
                <p>
                  Our HR staff will make sure that your SaaS software team gets
                  deployed within a time period of only 72 to 92 hours so that
                  your project can be initiated and completed before the given
                  task deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sec>
  );
}

export default Services;

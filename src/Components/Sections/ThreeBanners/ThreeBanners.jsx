import React from "react";
import { Sec } from "./StyledThreeBanner";
import { FcCellPhone, FcVoicePresentation } from "react-icons/fc";
import { GoArrowRight } from "react-icons/go";

function ThreeBanners() {
  return (
    <Sec>
      <div className="container-xxl">
        <div className="banners">
          <div className="banner first">
            <div className="text">
              <h1>
                Book A <span className="text-primary">Call</span>
              </h1>
              <p>
                Take the very first step towards SaaS excellence by connecting
                with one of our representatives over a brief virtual meeting –
                for absolutely free!
              </p>
            </div>
            <div className="icon">
              <FcCellPhone />
            </div>
          </div>
          <div className="banner bg-dark text-white">
            <div className="text">
              <h1>
                Book A <span className="text-primary">Call</span>
              </h1>
              <p>
                Take the very first step towards SaaS excellence by connecting
                with one of our representatives over a brief virtual meeting –
                for absolutely free!
              </p>
            </div>
            <div className="icon">
              <FcVoicePresentation />
            </div>
          </div>
        </div>
        <div className="third-banner">
          <div className="shape"></div>
          <div className="shape-two"></div>
          <h3>SUbscribe to WeWantSaaS</h3>
          <div className="sub">
            <input type="text" />
            <GoArrowRight className="go" />
          </div>
        </div>
      </div>
    </Sec>
  );
}

export default ThreeBanners;

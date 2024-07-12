import React from "react";
import { Sec } from "./StyledExpert";

function Expert() {
  return (
    <Sec className="container-xxl">
      <div className="experts-banner">
        <div className="img">
          <img
            src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/experts/main-image.svg"
            alt="Picture"
          />
        </div>
        <div className="content">
          <h1>
            The Experts We Offer In Key <span>Programming Tech</span>
          </h1>
          <div className="banners">
            <div className="banner">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/experts/icons/MVP-developers.svg"
                alt="Picture"
              />
              <div>
                <h3>MVP Developers</h3>
                <p>
                  Gather user feedback and test concept validity with MVP
                  (Minimum Viable Product) developers.
                </p>
              </div>
            </div>
            <div className="banner">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/experts/icons/backend-developers.svg"
                alt="Picture"
              />
              <div>
                <h3>Back-end Developers</h3>
                <p>
                  Maintain good health and functionality of your software with
                  the help of back-end developers.
                </p>
              </div>
            </div>
            <div className="banner">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/experts/icons/database-developer.svg"
                alt="Picture"
              />
              <div>
                <h3>Database Developers</h3>
                <p>
                  Construct, design, and implement new databases or modify your
                  existing ones on demand
                </p>
              </div>
            </div>
            <div className="banner">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/experts/icons/integration-experts.svg"
                alt="Picture"
              />
              <div>
                <h3>Integration Experts</h3>
                <p>
                  Incorporate third-party solutions into your main software
                  product with integration specialists.
                </p>
              </div>
            </div>
            <div className="banner">
              <img
                src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/experts/icons/API-developers.svg"
                alt="Picture"
              />
              <div>
                <h3>API Professionals</h3>
                <p>
                  Encourage teamwork, and communication, and maximize
                  productivity with the help of API developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sec>
  );
}

export default Expert;

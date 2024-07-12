import React from "react";
import styled from "styled-components";
const Sec = styled.section`
  margin-top: 1rem;
  margin-bottom: 1rem;

  h1 {
    text-align: center;
    span {
      color: royalblue;
    }
  }
  .boxes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    @media (max-width: 1000px) {
      flex-direction: column;
      padding: 40px;
    }
    .box {
      display: flex;
      border-left: 8px solid royalblue;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      padding: 30px;
      margin: 5px;
      transition: all 0.3s ease;
      @media (max-width: 1000px) {
        margin-top: 3rem;
      }
      @media (max-width: 800px) {
        flex-direction: column;
        text-align: center;
        padding: 5px;
      }
      cursor: pointer;
      &:hover {
        background-color: royalblue;
        border-radius: 10px;
        color: white;
        transform: scale(1.1);
      }
      h2 {
        padding: 5px;
        @media (max-width: 800px) {
          padding: 2px;
        }
      }
      p {
        padding: 10px;
        @media (max-width: 800px) {
          padding: 5px;
        }
      }
      img {
        width: 200px;
        border-radius: 10px;
        @media (max-width: 800px) {
          width: 150px;
        }
      }
    }
  }
`;
function Providers() {
  return (
    <Sec className="container-xxl">
      <h1>
        The Services <span>We Provide</span>
      </h1>
      <div className="boxes">
        <div className="box">
          <div>
            <img
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/our-services/short-term.svg"
              alt="Services"
            />
          </div>
          <div>
            <h2>Short-Term Software Development Team</h2>
            <p>
              This service offered by We Want SaaS is perfect for you if you
              have small to medium-sized software development projects that need
              to be completed within 1-6 months.
            </p>
          </div>
        </div>
        <div className="box">
          <div>
            <img
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/our-services/long-term.svg"
              alt="Services"
            />
          </div>
          <div>
            <h2>Long-Term Software Development Team</h2>
            <p>
              For software development tasks that are bigger and need regular
              attention from specialists for over 6 months, then go for our
              long-term development team-building service.
            </p>
          </div>
        </div>
      </div>
    </Sec>
  );
}

export default Providers;

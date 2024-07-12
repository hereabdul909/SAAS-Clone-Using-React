import React from "react";
import styled from "styled-components";
const Sec = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }
  .text {
    width: 50%;
    @media (max-width: 1000px) {
      width: 100%;
    }
    h1 {
      font-weight: bold;
    }
  }
  .img {
    width: 50%;
    @media (max-width: 1000px) {
      margin-top: 2rem;
      width: 100%;
    }
  }
`;
function Overview() {
  return (
    <Sec className="container-xxl">
      <div className="text">
        <h1>SaaS Software Development Overview</h1>
        <p>
          For any SaaS business, having functional and visually pleasing
          software is key to winning and keeping customers. This is an area that
          requires special attention from a team of software development
          professionals. We Want SaaS is available to serve you with the best
          SaaSy software team acquisition solutions.From simple website
          development to complex app creation tasks, your acquired SaaS software
          development team will work together with your in-house team to take
          your SaaS brand to the top of its market.
        </p>
      </div>
      <div className="img">
        <img
          src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/SaaS-Software-Development-Overview.svg"
          alt="SD"
        />
      </div>
    </Sec>
  );
}

export default Overview;

import React from "react";
import styled from "styled-components";
const Sec = styled.section`
  background-color: black;
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
  padding-top: 5rem;
  padding-bottom: 3rem;
  overflow: hidden;
  h1{
    @media (max-width: 750px) {
      font-size: 1.3rem;
      padding: 8px;
      }
  }
  p{
    @media (max-width: 750px) {
      font-size: .8rem;
      padding: 0 8px;
      }
  }
  button {
    border: none;
    padding: 10px;
    font-weight: 700;
    border-radius: 5px;
    transition: all 0.3s ease;
    &:hover {
      background-color: royalblue;
      color: white;
    }
  }
  .one-cir {
    position: absolute;
    opacity: 1;
    left: -20px;
    top: 40px;
    transform: rotate(180deg);
    width: 130px;
  }
  .two-cir {
    position: absolute;
    opacity: 1;
    left: 0;
    top: 10px;
    transform: rotate(180deg);
  }
  .three-cir {
    position: absolute;
    opacity: 1;
    right: 0;
    top: -10px;
    transform: rotate(-60deg);
    width: 130px;
  }
  .four-cir {
    position: absolute;
    opacity: 1;
    right: 0;
    top: -20px;
    transform: rotate(-60deg);
  }
`;

function BlackFluid() {
  return (
    <Sec>
      <img
        className="one-cir"
        src="https://cdn.wewantsaas.com/landing-page/images/landing-page/Ellipse-81.webp"
        alt="Picture"
      />
      <img
        className="two-cir"
        src="https://cdn.wewantsaas.com/landing-page/images/landing-page/Ellipse-81.webp"
        alt="Picture"
      />
      <img
        className="three-cir"
        src="https://cdn.wewantsaas.com/landing-page/images/landing-page/Ellipse-81.webp"
        alt="Picture"
      />
      <img
        className="four-cir"
        src="https://cdn.wewantsaas.com/landing-page/images/landing-page/Ellipse-81.webp"
        alt="Picture"
      />
      <h1>Enhance the Creativity, Motivation, Talent, & Work</h1>
      <h1>Ethic of Your Software Team</h1>
      <p>
        The quality of your business software can make or break your SaaS
        company. Let us help you make it in the industry.
      </p>
      <button> Lets Get Stated</button>
    </Sec>
  );
}

export default BlackFluid;

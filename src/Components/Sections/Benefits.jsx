import React from "react";
import styled from "styled-components";
const Sec = styled.section`
  margin-top: 5rem;
  padding-bottom: 3rem;
  position: relative;
  width: 100%;
  overflow: hidden;
  .boxes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 3rem;
    @media (max-width: 800px) {
        grid-template-columns: repeat(1,1fr);
        text-align: center;
      }
    .box {
      box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding: 10px;
      position: relative;
      transition:  all .3s;
      cursor: pointer;
      &:hover{
        color: white;
      }
      &::before{
        content: "";
        width: 0px;
        height: 100%;
        background-color: royalblue;
        border-radius: 10px;
        position: absolute;
        left:0 ;
        top: 0;
        z-index: -1;
        transition: .6s all;
      }
      &:hover::before{
        width: 100%;
        color: white;
      }
    
      img {
        width: 80px;
      }
    }
  }
  .right-bowl {
    position: absolute;
    right: -700px;
    width: 900px;
    z-index: -1;
    @media (max-width: 500px) {
       display: none;
      }
  }
  .left-bowl {
    top: 0;
    position: absolute;
    left: 0;
    width: 900px;
    z-index: -1;
    left: -700px;
    @media (max-width: 500px) {
        display: none;
      }
  }
`;

function Benefits() {
  return (
    <Sec>
      <img
        className="right-bowl"
        src="https://cdn.wewantsaas.com/images/SVG/side2.svg"
        alt="Picture"
      />
      <img
        className="left-bowl"
        src="https://cdn.wewantsaas.com/images/SVG/side1.svg"
        alt="Picture"
      />
      <div className="container">
        <h2 className="text-center">
          What Are The Benefits Of{" "}
          <span className="text-primary">
            Custom SaaS Software Development??
          </span>
        </h2>
        <p className="text-center">
          The following are the primary benefits of hiring a custom SaaS
          software development team for your SaaS business:
        </p>
        <div className="boxes">
          <div className="box">
            <img
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/benifits/inviting-online-presence.svg"
              alt="Picture"
            />
            <h2>Inviting Online Presence </h2>
            <p>
              Build an internet presence that attracts your targeted audience
              towards your SaaS brand.
            </p>
          </div>
          <div className="box">
            <img
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/benifits/great-costumer-service.svg"
              alt="Picture"
            />
            <h2>Great Customer Service </h2>
            <p>
              Respond to queries and meet the needs of your customers on time
              with quality software.
            </p>
          </div>
          <div className="box">
            <img
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/benifits/carefully-personlized.svg"
              alt="Picture"
            />
            <h2>Inviting Online Presence</h2>
            <p>
              BGet software that’s been carefully customized to your SaaS brand
              and its target audience.
            </p>
          </div>
          <div className="box">
            <img
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/benifits/easy-to-scale-&-integrate.svg"
              alt="Picture"
            />
            <h2>Easy to Scale & Integrate </h2>
            <p>
              Get software that’s incredibly easy to scale with time and
              integrate with other solutions.
            </p>
          </div>
          <div className="box">
            <img
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/benifits/automate-mundane-tasks.svg"
              alt="Picture"
            />
            <h2>Automate Mundane Tasks</h2>
            <p>
              Well-developed software will allow your SaaS company to automate
              its monotonous tasks
            </p>
          </div>
          <div className="box">
            <img
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/benifits/eliminate-the-need-of-revisions.svg"
              alt="Picture"
            />
            <h2>Save Time, Labor, & Money </h2>
            <p>
              A well-developed piece of software will save you time, labor, and
              money in the long run.
            </p>
          </div>
        </div>
      </div>
    </Sec>
  );
}

export default Benefits;

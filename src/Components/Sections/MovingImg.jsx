import React from "react";
import styled from "styled-components";
const Sec = styled.section`
  margin-top: 5rem;
  margin-bottom: 5rem;
  .moving-slides {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .Headline {
      display: flex;
      justify-content: center;
      overflow: hidden;
      width: 100%;
      .left {
        width: 800px;
        height: 100px;
        animation: moveLeft 20s linear infinite;
        @media (max-width: 750px) {
          width: 600px;
          height: 50px;
        }
      }
      .right {
        width: 800px;
        height: 100px;
        animation: moveRight 20s linear infinite;
        @media (max-width: 750px) {
          width: 600px;
          height: 50px;
        }
      }
    }
  }
  @keyframes moveLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes moveRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
function MovingImg() {
  return (
    <Sec className="container-xxl">
      <div className="moving-slides">
        <div className="Headline">
          <div>
            <img
              className="right"
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/stacks-we-use-01.png"
              alt="Picture"
            />
          </div>
          <div>
            <img
              className="right"
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/stacks-we-use-01.png"
              alt="Picture"
            />
          </div>
        </div>
        <div className="Headline">
          <div>
            <img
              className="left"
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/stacks-we-use-02.png"
              alt="Picture"
            />
          </div>
          <div>
            <img
              className="left"
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/stacks-we-use-02.png"
              alt="Picture"
            />
          </div>
        </div>
        <div className="Headline">
          <div>
            <img
              className="left"
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/stacks-we-use-04.png"
              alt="Picture"
            />
          </div>
          <div>
            <img
              className="left"
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/stacks-we-use-04.png"
              alt="Picture"
            />
          </div>
        </div>
        <div className="Headline">
          <div>
            <img
              className="right"
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/stacks-we-use-02.png"
              alt="Picture"
            />
          </div>
          <div>
            <img
              className="right"
              src="https://cdn.wewantsaas.com/images/staffAugmentation/services/software-development/stacks/stacks-we-use-02.png"
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </Sec>
  );
}
export default MovingImg;

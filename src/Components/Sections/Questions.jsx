import React, { useState } from "react";
import styled from "styled-components";
import Faq from "./FAQ.webp";
const Sec = styled.section`
  background-image: url(${Faq});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
  h1 {
    padding-top: 5rem;
  }
  .ring {
    position: absolute;
    width: 120px;
    top: 20px;
    animation: rotate 5s linear infinite;
    left: 20px;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .accordion {
    margin-top: 3rem;

    .item {
      background-color: white;
      border-radius: 10px;
      margin-bottom: 1rem;
      padding: 1rem;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        span {
          font-size: 1.5rem;
          font-weight: 600;
          transition: all 0.3s;
        }
      }
      .content {
        margin-top: 0.5rem;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease-out;
      }
      .show {
        height: auto;
        max-height: 500px;
        transition: max-height 0.4s ease-in;
      }
    }
  }
`;

function Questions() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      question:
        "How will We Want SaaS select the right developers for my project?",
      anwser:
        "The We Want SaaS HR team will handpick experienced software developers from our global talent pool that match closely with the nature of your task. We will thoroughly study the job requirement form you submit to us for this.",
    },
    {
      question: "What type of development professionals can you connect me to?",
      anwser:
        "We Want SaaS can connect you to diverse software development professionals, from web and app development experts to integration experts.",
    },
    {
      question:
        "Do you offer ongoing client support for software development tasks?",
      anwser:
        "Yes, the We Want SaaS project managers will provide you with exceptional ongoing support to make sure everything goes smoothly.",
    },
    {
      question:
        "How can I monitor the progress of my software development project?",
      anwser:
        "Your assigned project manager will keep you updated regarding your task at every stage via regular transparent progress reports.",
    },
  ];
  return (
    <Sec>
      <img
        className="ring"
        src="https://cdn.wewantsaas.com/images/staffAugmentation/3.svg"
        alt="Ring-Crilce"
      />
      <div className="container">
        <h1 className="text-center text-white">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <Wrap>
          <div className="accordion">
            {data.map((item, index) => (
              <div className="item" key={index}>
                <div className="title" onClick={() => toggle(index)}>
                  <h5>{item.question}</h5>
                  <span>{selected === index ? "-" : "+"}</span>
                </div>
                <div
                  className={selected === index ? "content show" : "content"}
                >
                  {item.anwser}
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </div>
    </Sec>
  );
}

export default Questions;

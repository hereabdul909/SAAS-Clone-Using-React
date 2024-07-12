import styled, { keyframes } from "styled-components";
import backImg from "./Home-Back.webp";
const textShine = keyframes`
 0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
`;
export const Main = styled.div`
  background-image: url(${backImg});
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    padding: 10px;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0 2rem 0;
    margin-top: 6rem;
    @media (max-width: 1100px) {
      flex-direction: column;
      margin-top: 5rem;
    }

    .intro-sec {
      width: 50%;
      margin-right: 10px;
      @media (max-width: 1100px) {
        text-align: center;
        width: 100%;
      }
      h1 {
        font-weight: 700;
        background: linear-gradient(
          to right,
          #000000 20%,
          #ffffff 30%,
          #000000 40%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 500% auto;
        animation: ${textShine} 8s ease-in-out infinite alternate;
      }
      .boxes {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem;
        @media (max-width: 1100px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 500px) {
          grid-template-columns: repeat(1, 1fr);
        }
        .box {
          display: flex;
          background-color: white;
          padding: 10px;
          cursor: pointer;
          border-radius: 10px;
          transition: all 0.3s ease;
          &:hover {
            border: 1px solid royalblue;
            transform: scale(1.2);
            border-radius: 10px;
          }
          img {
            width: 30px;
            height: 30px;
            margin-right: 5px;
          }
        }
      }
    }
    .form-sec {
      width: 50%;
      background-color: white;
      text-align: center;
      border-radius: 1rem;
      margin-left: 10px;
      @media (max-width: 1100px) {
        margin-top: 3rem;
        margin-left: 0;
        margin-bottom: 1rem;
        width: 100%;
      }
      h2 {
        margin-top: 1rem;
        @media (max-width: 500px) {
          font-size: 1.2rem;
        }
      }
      form {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        span {
          text-align: left;
          @media (max-width: 500px) {
            font-size: 0.8rem;
          }
        }
        .num {
          width: 100%;
          margin-top: 1.5rem;
          border: 1px solid lightgray;
          border-radius: 5px;
          padding: 5px;
          position: relative;
          span {
            position: absolute;
            top: -15px;
            background-color: white;
            border-radius: 5px;
            padding: 2px;
            font-size: 0.8rem;
            left: 2px;
            left: 1;
          }
        }
        .res {
          display: flex;
          align-items: center;
          border: 1px solid lightgray;
          border-radius: 5px;
          position: relative;
          margin-top: 1.5rem;
          @media (max-width: 500px) {
            flex-direction: column;
          }
          .res-input {
            margin-top: 2px;
          }
          div {
            background-color: lightgray;
            padding: 9px;
            @media (max-width: 500px) {
              width: 100%;
              padding: 10px;
            }
          }
          input {
            padding: 1px;
            margin-top: -3px;
            border: none;
          }
          span {
            position: absolute;
            top: -15px;
            background-color: white;
            border-radius: 5px;
            padding: 2px;
            left: 0;
            font-size: 0.8rem;
          }
        }
        .type {
          background-color: lightgray;
          padding: 0.5rem;
          border: 1px solid lightgray;
          border-radius: 5px;
          margin-top: 1.5rem;
          position: relative;
          text-align: left;
          @media (max-width: 500px) {
            text-align: center;
          }
          span {
            position: absolute;
            top: -15px;
            background-color: white;
            border-radius: 5px;
            padding: 2px;
            left: 2px;
            font-size: 0.8rem;
          }
        }
        textarea {
          border: none;
          border: 1px solid lightgray;
          margin-top: 1.5rem;
          outline: none;
          border-radius: 5px;
        }
        input {
          padding: 0.5rem;
          border-radius: 5px;
          border: none;
          border: 1px solid lightgray;
          margin-top: 1.5rem;
          outline: none;
        }
        input[type="submit"] {
          background-color: royalblue;
          color: white;
        }
      }
    }
  }
`;

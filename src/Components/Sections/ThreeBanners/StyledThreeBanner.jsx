import styled from "styled-components";
export const Sec = styled.section`
  background-color: #e8e7e7;
  width: 100%;

  .banners {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 750px) {
      flex-direction: column;
    }
    .first {
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
    .banner {
      display: flex;
      box-shadow: 1px 2px 5px 1px black;
      margin: 5px;
      border-radius: 10px;
      padding: 10px;
      margin-top: 4rem;
      background-color: white;
      .icon {
        font-size: 3rem;
      }
    }
  }
  .third-banner {
    display: flex;
    width: 50%;
    flex-direction: column;
    box-shadow: 1px 2px 5px 1px black;
    border-radius: 10px;
    padding: 40px 5px 40px 10px;
    margin-top: 4rem;
    margin: auto;
    background-color: white;
    margin-top: 3rem;
    background-color: royalblue;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin-bottom: -4rem;
    @media (max-width: 750px) {
      width: 100%;
    }
    .shape {
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: white;
      border-radius: 50%;
      top: -10px;
      left: -40px;
    }
    .shape-two {
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: #ffffff94;
      border-radius: 50%;
      bottom: -30px;
      right: -40px;
    }
    .sub {
      display: flex;
      background-color: white;
      width: 50%;
      margin: auto;
      padding: 5px;
      border-radius: 15px;
      @media (max-width: 750px) {
        width: 100%;
      }
      input {
        border: none;
        outline: none;
      }
      .go {
        margin-left: 4rem;
        font-size: 1.5rem;
        cursor: pointer;
        background-color: royalblue;
        border-radius: 20px;
        padding: 2px;
      }
    }
  }
`;

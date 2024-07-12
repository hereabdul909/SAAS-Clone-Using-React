import styled from "styled-components";
export const FooterSec = styled.footer`
  background-color: #161616;
  color: white;
  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-top: 7rem;
    gap: 10px;
    @media (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 750px) {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
    }
    .first-div {
      display: flex;
      flex-direction: column;
      img {
        padding-bottom: 20px;
        @media (max-width: 750px) {
          margin: auto;
        }
      }
      .icons {
        display: flex;
        @media (max-width: 750px) {
          justify-content: center;
        }
        span {
          margin-right: 5px;
        }
        .icon {
          font-size: 1.3rem;
          margin-inline: 5px;
        }
      }
    }
    .same-div {
      list-style: none;
      li {
        margin-top: 1rem;
      }
    }
    .last-div {
      list-style: none;
      .phone {
        display: flex;
        @media (max-width: 750px) {
          justify-content: center;
        }
        p {
          margin-left: 5px;
        }
      }
      .mail {
        display: flex;
        @media (max-width: 750px) {
          justify-content: center;
        }
        p {
          margin-left: 5px;
        }
      }
    }
  }
  .copyrights {
    text-align: center;
    border-top: 1px solid white;
  }
`;

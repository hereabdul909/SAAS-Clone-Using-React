import styled from "styled-components";
export const Fixed = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 1;
`;
export const Head = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  .menu {
    display: flex;
    align-items: center;
    @media (max-width: 1280px) {
      flex-direction: column;
      position: absolute;
      background-color: white;
      right: -100%;
      top: 0;
      height: 100vh;
      z-index: 1;
      transition: all 0.4s ease;
    }
    ul {
      display: flex;
      list-style: none;
      margin-top: 0.5rem;
      @media (max-width: 1280px) {
        flex-direction: column;
      }
      .close {
        display: none;
        @media (max-width: 1280px) {
          display: block;
          position: absolute;
          top: 0;
          right: 20px;
          font-size: 1.2rem;
        }
      }
      li {
        @media (max-width: 1280px) {
          margin-top: 20px;
        }
        a {
          text-decoration: none;
          color: black;
          padding: 0.8rem;
          font-size: 1.1rem;
          font-weight: 500;
        }
        .dropdown {
          position: absolute;
          background-color: aliceblue;
          top: 35px;
          left: 0;
          display: none;
          z-index: 1;
          width: 1200px;
          div {
            border-left: 1px solid black;
            transition: all 0.3s;
            cursor: pointer;
            div {
              padding-bottom: 5px;
              &:hover {
                background-color: royalblue;
                color: white;
              }
              h4,
              p {
                padding: 0 0.5rem 0.5rem 1rem;
              }
              .icon {
                padding: 10px 0 10px 10px;
                font-size: 3rem;
              }
              .link {
                text-decoration: underline;
                padding-bottom: 5px;
              }
            }
          }
        }
        .dropdown-2 {
          position: absolute;
          background-color: aliceblue;
          top: 35px;
          left: 0;
          display: none;
          z-index: 1;
          width: 1000px;
          div {
            border-left: 1px solid black;
            transition: all 0.3s;
            cursor: pointer;
            div {
              padding-top: 10px;
              &:hover {
                background-color: royalblue;
                color: white;
              }
              h4,
              p {
                padding: 0 0.5rem 0.5rem 1rem;
              }
            }
          }
        }
        .dropdown-3 {
          position: absolute;
          background-color: aliceblue;
          top: 35px;
          left: 0;
          display: none;
          z-index: 1;
          padding: 10px;
          width: 100px;
          border-left: 2px solid black;
        }
      }
      .staff {
        position: relative;
        &:hover .dropdown {
          display: block;
        }
      }
      .cate {
        position: relative;
        &:hover .dropdown-2 {
          display: block;
        }
      }
      .blog {
        position: relative;
        &:hover .dropdown-3 {
          display: block;
        }
      }
    }
    .button {
      background-color: royalblue;
      padding: 0.5rem;
      border-radius: 0.3rem;
      a {
        text-decoration: none;
        color: white;
        font-weight: 600;
      }
    }
  }
  .btn {
    display: none;
    @media (max-width: 1280px) {
      display: block;
      font-size: 1m;
    }
  }
`;

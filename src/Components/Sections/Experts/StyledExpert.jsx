import styled from "styled-components";
export const Sec = styled.section`
  margin-top: 5rem;
  .experts-banner {
    display: flex;
    justify-content: center;
    @media (max-width: 750px) {
      flex-direction: column;
    }
    .img {
      width: 50%;
      @media (max-width: 750px) {
        width: 100%;
      }
      img {
        width: 600px;
        position: sticky;
        top: 0;
        @media (max-width: 750px) {
          width: 300px;
        }
      }
    }
    .content {
      width: 50%;
      @media (max-width: 750px) {
        width: 100%;
      }
      .banners {
        display: flex;
        flex-direction: column;
        .banner {
          display: flex;
          border: 1px solid #f1efef;
          margin-top: 10px;
          border-radius: 10px;
          padding: 10px;
          border-left: 4px solid royalblue;
          transition: all 0.3s ease;
          box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          @media (max-width: 500px) {
            flex-direction: column;
            text-align: center;
          }
          &:hover {
            background-color: royalblue;
            color: white;
          }
          img {
            width: 100px;
            @media (max-width: 800px) {
              margin: auto;
            }
          }
          div {
            padding: 10px;
          }
        }
      }
    }
  }
`;

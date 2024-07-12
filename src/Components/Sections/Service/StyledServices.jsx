import styled from "styled-components";
export const Sec = styled.section`
  background-color: #f8f4f4;
  h1 {
    text-align: center;
    padding-top: 2rem;
  }
  .img-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    @media (max-width: 800px) {
        flex-direction: column;
      }
    img {
      width: 500px;
      border-radius: 10px;
      @media (max-width: 1000px) {
        width: 300px;
      }
    }
    .boxes {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin: 10px;
      @media (max-width: 1100px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .box {
        display: flex;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        transition: all 0.3s ease;

        @media (max-width: 1200px) {
          flex-direction: column;
        }
        @media (max-width: 1000px) {
          padding: 5px;
        }
        cursor: pointer;
        &:hover {
          background-color: royalblue;
          color: white;
        }
        .icon {
          margin: 5px;
          font-size: 1.6rem;
          color: red;
        }
      }
    }
  }
`;

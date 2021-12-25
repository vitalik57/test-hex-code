import styled from "styled-components";
export const MenuStyled = styled.div`
  padding: 20px 30px;
  background: white;
  font-family: "Roboto", sans-serif;
  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #222;
    font-size: 36px;
    padding-left: 27px;
    margin-bottom: 15px;
    border-left: 2px solid #b99d61;
  }
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    padding: 10px;
  }

  .container {
    padding: 10px;

    /* position: relative; */
    height: 50px;
    margin-top: 20px;
  }
  .container__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    /* position: absolute; */
    font-size: 26px;
    /* line-height: 40px; */
    outline: none;
    background-color: transparent;
    border: none;
  }
`;

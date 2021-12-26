import styled from "styled-components";
export const NewStyled = styled.div`
  display: flex;
  flex-direction: column;
  .form__input {
    width: 100%;
    opacity: 0.7;
    box-sizing: border-box;
    outline: none;
    border-radius: 16px;
    padding: 10px 10px;
    color: #5b5b5b;
    border: 3px solid #c1c1c1;
    margin-top: 8px;
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 768px) {
      padding: 10px 15px;
    }
  }
  .form__input:focus {
    border: 1px solid #87d78b;
  }
  button {
    /* width: 90px;
    height: 30px;
    background-color: rgba(79, 97, 112, 0.9);
    border-radius: 16px; */
    /* display: block; */
    font-size: 1.1em;
    width: 100%;
    height: 45px;
    text-decoration: none;
    font: bold 14px arial;
    text-transform: uppercase;
    padding: 10px 15px;
    margin: 20px auto;
    color: #ccc;
    background-color: #555;
    background-image: linear-gradient(top, #888 0%, #555 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #888), color-stop(1, #555));
    background-image: -moz-linear-gradient(top, #888 0%, #555 100%);
    background-image: -o-linear-gradient(top, #888 0%, #555 100%);
    border: none;
    border-radius: 3px;
    text-shadow: 0px -1px 0px #000;
    box-shadow: 0px 1px 0px #666, 0px 5px 0px #444, 0px 6px 6px rgba(0, 0, 0, 0.6);
    -webkit-transition: ease 0.15s all;
    -moz-transition: ease 0.15s all;
    -o-transition: ease 0.15s all;
    transition: ease 0.15s all;
    -webkit-animation: none;
    -moz-animation: none;
    -o-animation: none;
    animation: none;
  }
  button:hover {
    background-color: #aaaaaa;
    background-image: -webkit-linear-gradient(top, #ccc, #555);
    background-image: -moz-linear-gradient(top, #ccc, #555);
    background-image: -o-linear-gradient(top, #ccc, #555);
    background-image: linear-gradient(to bottom, #ccc, #555);
  }
`;

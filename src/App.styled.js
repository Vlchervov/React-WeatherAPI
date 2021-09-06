import styled from "styled-components";

export const FormSearch = styled.form`
  position: absolute;
  left: 43vw;
  top: 50vh;

  input {
    width: 14vw;
    height: 50px;
    border-radius: 10px;
    border: 2px solid #e6e6e6;
    padding-left: 10px;
  }
`;

export const WeatherList = styled.div `
  opacity: ${({change}) => change ? 1 : 0};


  ul {
    align-items: center;
    display: flex;
    flex-direction: column;
  }


      li {
        list-style: none;
        font-weight: 500;
        font-size: 18px;
      }
`

export const SearchButton = styled.button `
    font-size: 14px;
    width: 4.47vw;
    height: 2.78vh;
    position: relative;
    left: 47.5vw;
    top: 58vh;
    background: #f2f2f2;
    border-radius: 4px;
    border: 1px solid #f2f2f2;
`

export const Modal = styled.div `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    padding: 9rem;
`

export const ModalBody = styled.div `
    padding: 2rem;
    width: 400px;
    border-radius: 5px;
    background-image: url('https://his.ua/img/articles/3xim7lXbhX.jpg');
    height: 200px;

    li {
        list-style: none;
        color: white;
        font-size: 18px;
        font: 500;
    }

    button {
    cursor: pointer;
    color: white;
    font: 500;
    position: relative;
    top: 8vh;
    left: 9.5vw;
    font-size: 14px;
    width: 68px;
    height: 28px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: px;
    border: none;
    }
`
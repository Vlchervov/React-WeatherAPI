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
    background: #fff;
    height: 200px;

    li {
        list-style: none;
    }
`
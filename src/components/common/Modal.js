import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.translucentBlack};
  display: flex;
  align-items: center;
`;

const ModalBody = styled.div`
  height: 80%;
  width: 96%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
`;

const CloseModal = styled.div`
  text-align: right;
  height: 5%;
  font-size: 32px;
  padding: 0 10px;
`;

const Children = styled.div`
  height: 95%;
`;

const Modal = ({ children, close }) => {
  return (
    <Main>
      <GlobalStyle />
      <ModalBody>
        <CloseModal onClick={close}>&times;</CloseModal>
        <Children>{children}</Children>
      </ModalBody>
    </Main>
  );
};

export default Modal;

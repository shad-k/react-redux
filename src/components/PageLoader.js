import React from "react";
import styled, { keyframes } from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;

  span {
    font-size: 20px;
  }
`;

// loader CSS borrowed from https://codepen.io/veganben/pen/GAgsH
const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  height: 0;
  width: 0;
  padding: 15px;
  border: 6px solid #ccc;
  border-right-color: #888;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  /* left, top and position just for the demo! */
  position: absolute;
  left: 45%;
  top: 55%;
  content: "Loading";
`;

const PageLoader = () => {
  return (
    <Main>
      <span>Loading...</span>
      <Loader />
    </Main>
  );
};

export default PageLoader;

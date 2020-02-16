import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import bg from "../assets/bg.jpg";

const Main = styled.main`
  background-image: url(${bg});
  height: 100%;
  width: 100%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.translucentBlack};
  height: 100%;
  width: 100%;
`;

const AttributionLink = styled.a`
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 4px 6px;
  font-family: "-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif";
  font-size: 12px;
  font-weight: bold;
  line-height: 1.2;
  display: inline-block;
  border-radius: 3px;
  position: relative;
  z-index: 2;

  span {
    display: inline-block;
    padding: 2px 3px;
  }

  svg {
    height: 12px;
    width: auto;
    position: relative;
    vertical-align: middle;
    top: -2px;
    fill: white;
  }
`;

const CTA = styled.div`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.white};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90%;
  width: 100%;

  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
  }
`;

export default function Home() {
  return (
    <Main>
      <Overlay />
      <AttributionLink
        href="https://unsplash.com/@ryoji__iwata?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from Ryoji Iwata"
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </span>
        <span>Ryoji Iwata</span>
      </AttributionLink>
      <CTA>
        <h1>Users directory</h1>
        <Link to="/users">Click to view and edit</Link>
      </CTA>
    </Main>
  );
}

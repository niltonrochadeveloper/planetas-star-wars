"use client";

import styled from "styled-components";

const Background = styled.body`
  background-image: url("/images/background/BG.png");
  background-repeat: no-repeat;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    body {
      height: 100%;
      background-size: cover;
    }
  }
  @media (min-width: 768px) {
    body {
      height: auto;
      background-position: center;
      margin: 0;
      padding: 0;
      background-size: cover;
    }
  }
`;

export default Background;

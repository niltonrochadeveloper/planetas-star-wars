"use client";

import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: auto;
  }
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export default StyledLayout;

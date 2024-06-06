"use client";

import styled from "styled-components";

const StyledContent = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    height: "100%";
    padding-top: 68px;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    height: 100%;
    padding-top: 68;
  }
`;

export default StyledContent;

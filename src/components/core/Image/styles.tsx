"use client";

import Image, { ImageProps } from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)<ImageProps>`
  @media (max-width: 767px) {
    width: ${(props) => props.width};
  }
  @media (min-width: 768px) {
    width: ${(props) => props.width};
    max-width: 400px;
  }
`;

export default StyledImage;

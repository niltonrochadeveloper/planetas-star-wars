import styled from "styled-components";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const StyledFooterBase = styled.footer`
  background-color: #fff;
  height: 100%;
  min-height: 66px;
  max-height: 66px;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const Root = styled(StyledFooterBase)`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 735.19px;
`;

const p = styled.p`
  font-family: ${lato.style.fontFamily};
  font-weight: 500;
  font-size: 14px;
`;

const separator = styled.div`
  height: 44px;
  width: 0.5;
  background-color: #000;
`;

const Mobile = styled(StyledFooterBase)`
  @media screen and (max-width: 767px) {
    display: flex;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledFooter = { Desk: { Root, Content, p, separator }, Mobile };

export default StyledFooter;

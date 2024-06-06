import StyledLayout from "./styles";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

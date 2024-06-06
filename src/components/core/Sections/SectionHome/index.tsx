import StyledSectionHome from "./styles";
import { SectionHomeProps } from "./types";

const SectionHome: React.FC<SectionHomeProps> = ({ children }) => {
  return <StyledSectionHome>{children}</StyledSectionHome>;
};

export default SectionHome;

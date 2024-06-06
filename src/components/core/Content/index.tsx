import StyledContent from "./styles";
import { ContentProps } from "./types";

const Content: React.FC<ContentProps> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;

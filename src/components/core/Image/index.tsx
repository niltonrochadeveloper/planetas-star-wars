import { ImageProps } from "next/image";
import StyledImage from "./styles";

const Image: React.FC<ImageProps> = (props) => {
  return <StyledImage {...props} />;
};

export default Image;

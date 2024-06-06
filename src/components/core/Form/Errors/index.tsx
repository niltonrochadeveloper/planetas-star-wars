import StyledErrorsMessages from "./styles";
import { ErrorsMessageProps } from "./types";

const ErrorsMessage: React.FC<ErrorsMessageProps> = ({ children }) => {
  return <StyledErrorsMessages>{children}</StyledErrorsMessages>;
};

export default ErrorsMessage;

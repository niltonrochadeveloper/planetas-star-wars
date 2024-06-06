import { Montserrat } from "next/font/google";
import Background from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

const BackgroundImage = ({ children }: { children: React.ReactNode }) => {
  return <Background className={montserrat.className}>{children}</Background>;
};

export default BackgroundImage;

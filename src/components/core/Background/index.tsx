import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const BackgroundImage = ({ children }: { children: React.ReactNode }) => {
  return <body className={`${montserrat.className} body`}>{children}</body>;
};

export default BackgroundImage;

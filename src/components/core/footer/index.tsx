"use client";

import { Image } from "@/components/core";

import { Lato } from "next/font/google";
import StyledFooter from "./styles";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const Footer = () => {
  return (
    <>
      <StyledFooter.Desk.Root>
        <StyledFooter.Desk.Content>
          <StyledFooter.Desk.p>
            STARWARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
            reservados
          </StyledFooter.Desk.p>
          <StyledFooter.Desk.separator />
          <Image
            src={"/images/footer/logo_black.png"}
            width={84.19}
            height={37.55}
            alt="banner left home"
          />
        </StyledFooter.Desk.Content>
      </StyledFooter.Desk.Root>
      <StyledFooter.Mobile>
        <Image
          src={"/images/footer/logo_black.png"}
          width={55.04}
          height={24.55}
          alt="banner left home"
        />
      </StyledFooter.Mobile>
    </>
  );
};

export default Footer;

import Image from "next/image";

import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const Footer = () => {
  return (
    <>
      <footer
        className={`desk`}
        style={{
          backgroundColor: "#fff",
          height: "86px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "735.19px",
          }}
        >
          <p
            style={{
              fontFamily: lato.style.fontFamily,
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
            reservados
          </p>
          <div
            style={{ height: "44px", width: 0.5, backgroundColor: "#000" }}
          />
          <Image
            src={"/images/footer/logo_black.png"}
            width={84.19}
            height={37.55}
            alt="banner left home"
          />
        </div>
      </footer>
      <footer
        className={`mobile`}
        style={{
          backgroundColor: "#fff",
          height: "100%",
          minHeight: "66px",
          maxHeight: "66px",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={"/images/footer/logo_black.png"}
          width={55.04}
          height={24.55}
          alt="banner left home"
        />
      </footer>
    </>
  );
};

export default Footer;

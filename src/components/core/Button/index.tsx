import React from "react";

import { Lato } from "next/font/google";
import { ButtonProps } from "./types";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
import Image from "next/image";

const Button: React.FC<ButtonProps> = ({ loading, setValue }) => {
  return (
    <button
      className="relative flex justify-center items-center gap-3"
      style={{
        fontFamily: lato.style.fontFamily,
        fontWeight: 700,
        background: "#DE1212",
        height: "40px",
        color: "#fff",
        width: "100%",
        maxWidth: "301px",
        minWidth: "248px",
        borderRadius: "5px",
      }}
      disabled={loading}
      type="submit"
      onClick={() => setValue}
    >
      {!loading && (
        <Image
          src={"/images/home/icon-search.png"}
          width={24}
          height={24}
          alt="search icon"
        />
      )}
      {loading ? "Aguarde ..." : "Search"}
    </button>
  );
};

export default Button;

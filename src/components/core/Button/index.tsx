import React from "react";

import { Lato } from "next/font/google";
import { ButtonProps } from "./types";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const Button: React.FC<ButtonProps> = ({ loading, setValue }) => {
  return (
    <button
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
      {loading ? "Aguarde ..." : "Search"}
    </button>
  );
};

export default Button;

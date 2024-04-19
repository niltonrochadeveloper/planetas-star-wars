"use client";

import { CardPlanet, Footer, InputPlanet } from "@/components";
import { PlanetProps } from "@/services/planets/types";
import { Lato } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

type FormData = {
  name: string;
};

const Home = () => {
  const [valueChange, setValueChange] = useState<string>();
  const [planet, setPlanet] = useState<PlanetProps | null>(null);

  const methods = useForm<FormData>();

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {methods.formState.errors.name?.message && (
        <small
          style={{
            color: "#fff",
            backgroundColor: "#DE1212",
            borderRadius: 8,
            padding: "16px 32px",
            position: "absolute",
            top: 16,
            height: 50,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {methods.formState.errors.name?.message}
        </small>
      )}
      <div className={`page`}>
        <Image
          className={`imgTitle`}
          src={"/images/home/title.png"}
          width={321.55}
          height={180.41}
          alt="banner left home"
        />
        {!planet ? (
          <InputPlanet
            methods={methods}
            setPlanet={setPlanet}
            setValueChange={setValueChange}
          />
        ) : (
          <CardPlanet planet={planet} setPlanet={setPlanet} />
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Home;

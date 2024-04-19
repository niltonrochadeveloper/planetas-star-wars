import Image from "next/image";
import Button from "../core/Button";
import { SubmitHandler, useForm } from "react-hook-form";

import { Lato } from "next/font/google";
import { UseGetPlanets } from "@/services";
import { PlanetsSchema } from "@/constants/planetsSchema";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

type FormData = {
  name: string;
};

const InputPlanet = (props: any) => {
  const { getPlanets, isLoading } = UseGetPlanets();

  const onSubmit: SubmitHandler<FormData> = async ({ name }) => {
    if (name === "") {
      props.methods.setError("name", {
        message: "O campo Nome não pode ser vazio.",
      });
      setTimeout(() => {
        props.methods.clearErrors("name");
      }, 5000);
    } else {
      const planet = name.toLowerCase();
      const planetExist = await getPlanets({ name: planet });
      const hasPlanet = PlanetsSchema.includes(planet);
      if (planetExist.data.count === 1 && hasPlanet) {
        props.setPlanet(planetExist.data.results[0]);
      } else {
        props.methods.setError("name", {
          message: `O planeta com o nome ${name} não existe.`,
        });
        setTimeout(() => {
          props.methods.clearErrors("name");
        }, 3000);
      }
    }
  };

  return (
    <div
      className={`cardresponsive`}
      style={{
        backgroundColor: "#00000077",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className={`imgcard`}
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <Image
          className={`desk`}
          src={"/images/home/bannerLeft.png"}
          width={400}
          height={402}
          alt="banner left home"
          layout="responsive"
        />
        <Image
          className={`mobile`}
          src={"/images/home/bannerLeft_mobile.png"}
          width={300}
          height={188}
          alt="banner left home"
          layout="responsive"
        />
        <Image
          src={"/images/home/spaceship.png"}
          width={462}
          height={328}
          alt="banner left home"
          className={`spaceshipresponsive`}
          style={{ position: "absolute" }}
        />
      </div>

      <div className={`cardtext`}>
        <h1
          style={{
            color: "#fff",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24.38px",
            maxWidth: "292px",
            minWidth: "267px",
          }}
        >
          Discover all the information about Planets of the Star Wars Saga
        </h1>
        <form
          onSubmit={props.methods.handleSubmit(onSubmit)}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <input
            {...props.methods.register("name")}
            style={{
              maxWidth: "301px",
              minWidth: "248px",
              width: "100%",
              height: "40px",
              textAlign: "center",
              fontSize: "14px",
              borderRadius: "5px",
              fontFamily: lato.style.fontFamily,
              fontWeight: 400,
            }}
            onChange={(e) => props.setValueChange(e.target.value)}
            type="text"
            placeholder="Enter the name in the planet"
          />
          <Button loading={isLoading} disabled={isLoading} />
        </form>
      </div>
    </div>
  );
};

export default InputPlanet;

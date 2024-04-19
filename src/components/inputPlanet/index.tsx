"use client";

import Image from "next/image";
import Button from "../core/Button";
import { SubmitHandler, useForm } from "react-hook-form";

import { UseGetPlanets } from "@/services";
import { PlanetsSchema } from "@/constants/planetsSchema";
import { PlanetProps } from "@/services/planets/types";
import { useState } from "react";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

type FormData = {
  name: string;
};

const InputPlanet = (props: any) => {
  const { getPlanets, isLoading } = UseGetPlanets();
  const [inputValue, setInputValue] = useState<any>("");
  const [filteredPlanets, setFilteredPlanets] = useState<string[]>([]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    if (value === "") {
      setFilteredPlanets([]);
    } else {
      const filtered = PlanetsSchema.filter((planet) =>
        planet.toLowerCase().includes(value)
      );
      setFilteredPlanets(filtered);
    }
  };

  const handleOptionClick = (planet: string) => {
    props.methods.handleSubmit(onSubmit({ name: planet }));
    setInputValue(planet);
    props.setValueChange(planet);
    setFilteredPlanets([]);
  };

  return (
    <div
      onClick={() => setFilteredPlanets([])}
      className={`cardresponsive bg-[#00000077] rounded-[10px] flex justify-between items-center`}
    >
      <div className={`imgcard relative w-full`}>
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
          className={`spaceshipresponsive absolute`}
        />
      </div>

      <div className={`cardtext relative`}>
        <h1 className="text-white font-normal text-xl max-w-[292px] min-w-267px">
          Discover all the information about Planets of the Star Wars Saga
        </h1>
        <form
          onSubmit={props.methods.handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-2"
        >
          <input
            {...props.methods.register("name")}
            value={inputValue}
            onChange={handleInputChange}
            className={`max-w-[301px] min-w-[248px] w-full h-[40px] text-center text-sm rounded-[5px] ${lato.className} font-normal`}
            type="text"
            placeholder="Enter the name in the planet"
          />
          <div className="relative w-full max-w-[301px] min-w-[248px] -mt-2">
            {props.autoFilter && filteredPlanets.length > 0 && (
              <div className="absolute bg-white w-full z-10">
                <div className="max-h-36 overflow-y-scroll">
                  {filteredPlanets.map((planet: string, index: number) => (
                    <div
                      key={index}
                      className="p-1 cursor-pointer"
                      onClick={() => handleOptionClick(planet)}
                    >
                      {planet}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Button loading={isLoading} disabled={isLoading} />
          <div className="flex items-center justify-around gap-4 w-[240px] mt-3 text-white">
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4">
                <Image
                  src={"/images/home/icon-filter.png"}
                  width={15.23}
                  height={15.23}
                  alt="filter icon"
                />
              </div>
              <p className="font-semibold">Filter: </p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <Image
                src={"/images/home/chevron-bottom.png"}
                width={4.89}
                height={7}
                alt="filter icon"
              />
              <p className="text-sm">Name</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <Image
                src={"/images/home/chevron-bottom.png"}
                width={4.89}
                height={7}
                alt="filter icon"
              />
              <p className="text-sm">Population</p>
            </div>
          </div>
        </form>
        <div
          onClick={() => props.setAutoFilter(!props.autoFilter)}
          className="text-white text-xs absolute right-2 bottom-2 cursor-pointer"
        >
          <p>
            click to turn {props.autoFilter ? "off" : "on"} input type filtering
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputPlanet;

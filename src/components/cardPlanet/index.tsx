import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";
import { PlanetProps } from "@/services/planets/types";
import { PlanetsWithImage } from "@/constants/planetsSchema";
import Image from "next/image";
import React, { useEffect } from "react";

const CardPlanet = (props: any) => {
  const planet: PlanetProps = props.planet;

  const getIndex = (planetName: string) => {
    return PlanetsWithImage.indexOf(planetName.toLowerCase());
  };

  return (
    <div>
      <div className="max-w-xl min-w-80 flex flex-col justify-between lg:w-[592px] md:w-[592px] sm:w-[592px] bg-white rounded-xl p-5 min-h-96">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div className="flex gap-4 items-center">
            {PlanetsWithImage.includes(planet.name.toLowerCase()) && (
              <Image
                src={`https://cryptospro.com.br/planetas/planeta_000${
                  // Number(planet.url.charAt(planet.url.length - 2)) - 1
                  getIndex(planet.name.toLocaleLowerCase())
                }_${planet.name.toLocaleLowerCase()}.png`}
                width={74}
                height={74}
                alt={`planet of the ${planet}`}
              />
            )}
            <div>
              <p className="text-sm">Planet:</p>
              <h2 style={{ fontWeight: 900, fontSize: 18 }}>
                {planet.name.toUpperCase()}
              </h2>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-1 justify-center ml-6 lg:ml-0 md:ml-0 sm:ml-0">
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 text-sm">
                <Image
                  src={"/images/home/card-planet/climate.png"}
                  width={18}
                  height={18}
                  alt={"climate"}
                />
                <div className="flex gap-2 text-sm">
                  <h3 className="font-semibold">Climate:</h3>
                  <p>{capitalizeFirstLetter(planet.climate)}</p>
                </div>
              </div>
              <div className="flex gap-4 text-sm">
                <Image
                  src={"/images/home/card-planet/terrain.png"}
                  width={20}
                  height={10}
                  alt={"terrain"}
                />
                <div className="flex gap-2 text-sm">
                  <h3 className="font-semibold">Terrain:</h3>
                  <p>{capitalizeFirstLetter(planet.terrain)}</p>
                </div>
              </div>
              <div className="flex gap-4 text-sm">
                <Image
                  src={"/images/home/card-planet/population.png"}
                  width={20}
                  height={20}
                  alt={"population"}
                />
                <div className="flex gap-2 text-sm">
                  <h3 className="font-semibold">Population:</h3>
                  <p>{planet.population}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#f1f1f1] w-full min-h-28 rounded-lg p-3 ">
            <Image
              src={"/images/home/card-planet/residents.png"}
              width={15.04}
              height={15.04}
              alt={"residents"}
            />
          </div>
          <div className="bg-[#f1f1f1] w-full min-h-28 rounded-lg p-3 ">
            <Image
              src={"/images/home/card-planet/residents.png"}
              width={15.04}
              height={15.04}
              alt={"residents"}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button className="text-white" onClick={() => props.setPlanet(null)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default CardPlanet;

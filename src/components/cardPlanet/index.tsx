"use client";

import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";
import { PlanetProps } from "@/services/planets/types";
import { PlanetsWithImage } from "@/constants/planetsSchema";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const CardPlanet = (props: any) => {
  const [currentName, setCurrentName] = useState<string>(props.planet.name);
  const [editName, setEditName] = useState<boolean>(false);
  const [edited, setEdited] = useState<boolean>(false);

  const planet: PlanetProps = props.planet;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentName(value);
  };

  const getIndex = (planetName: string) => {
    return PlanetsWithImage.indexOf(planetName.toLowerCase());
  };

  const onSubmitEdit = (value: string) => {
    setEditName(false);
    setEdited(true);
    setCurrentName(value);
  };

  return (
    <div>
      <div className="max-w-xl min-w-80 mx-4 flex flex-col justify-between lg:w-[592px] md:w-[592px] sm:w-[592px] bg-white rounded-xl p-5 min-h-96">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div className="flex gap-4 items-center mb-2">
            {PlanetsWithImage.includes(planet.name.toLowerCase()) && (
              <Image
                src={`https://cryptospro.com.br/planetas/planeta_000${getIndex(
                  planet.name.toLocaleLowerCase()
                )}_${planet.name.toLocaleLowerCase()}.png`}
                width={74}
                height={74}
                alt={`planet of the ${planet}`}
              />
            )}
            <div>
              <p className="text-sm">{editName ? "Edit planet" : "Planet"}:</p>
              {!editName ? (
                <h2 className="font-black text-lg">
                  {!edited ? planet.name.toUpperCase() : currentName}
                </h2>
              ) : (
                <div
                  className={`flex border border-[#909090] max-w-[220px] min-w-[160px] w-full h-[40px] rounded-[5px]`}
                >
                  <input
                    value={currentName}
                    onChange={handleNameChange}
                    className={`font-black pl-2 min-w-[160px] max-w-[160px] h-full rounded-[5px]`}
                    type="text"
                    placeholder="Enter the name in the planet"
                  />
                  <button
                    onClick={() => onSubmitEdit(currentName)}
                    className="bg-green-600 px-2 text-white font-semibold cursor-pointer"
                  >
                    OK
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col mb-6 items-center gap-1 justify-center ml-6 lg:ml-0 md:ml-0 sm:ml-0">
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
          <div className="flex flex-col gap-2 bg-[#f1f1f1] w-full min-h-28 rounded-lg p-4 ">
            <div className="flex gap-2 items-center">
              <Image
                src={"/images/home/card-planet/residents.png"}
                width={15.04}
                height={15.04}
                alt={"residents"}
              />
              <h3 className="font-bold text-sm">Residents:</h3>
            </div>
            <div className="h-[0.1px] w-full bg-[#909090]" />
            <div className="flex flex-wrap gap-x-2 text-sm">
              {planet.residents.map((resident: string, index: number) => (
                <div key={index + 1}>
                  <p>{`People ${
                    Number(resident.match(/\d+/g)) >= 10
                      ? resident.match(/\d+/g)
                      : "0" + resident.match(/\d+/g)
                  }, `}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-[#f1f1f1] w-full min-h-28 rounded-lg p-3 ">
            <div className="flex gap-2 items-center">
              <Image
                src={"/images/home/card-planet/films.png"}
                width={15.04}
                height={15.04}
                alt={"films"}
              />
              <h3 className="font-bold text-sm">
                Films: {`(${planet.films.length})`}
              </h3>
            </div>
            <div className="h-[0.1px] w-full bg-[#909090]" />
            <div className="flex flex-wrap gap-x-2 text-sm">
              {planet.films.map((film: string, index: number) => (
                <div key={index + 1}>
                  <p>{`Film ${film.match(/\d+/g)}, `}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 justify-end my-8 mr-5 text-sm cursor-pointer">
        <Image
          src={"/images/home/chevron-left.png"}
          width={7.68}
          height={11}
          alt={"films"}
        />
        <button className="text-white" onClick={() => props.setPlanet(null)}>
          Back
        </button>
        <button className="text-white" onClick={() => setEditName(true)}>
          Edit Name
        </button>
      </div>
    </div>
  );
};

export default CardPlanet;

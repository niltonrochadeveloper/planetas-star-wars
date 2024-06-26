"use client";

import api from "@/services/api";
import { useState } from "react";

const UseGetPlanets = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [population, setPopulation] = useState<number | null>(null);

  const getPlanets = ({ name }: { name?: string; population?: string }) => {
    setIsloading(true);
    return api
      .get(`planets${name ? "?search=" + name : ""}`)
      .catch((res) => {
        if (population) {
          const planetPopulation = res.results.find((planeta: any) => {
            if (planeta.population !== "unknown") {
              return parseInt(planeta.population) === population;
            }
            return planetPopulation;
          });
        }
        if (name) {
          return res;
        }
      })
      .catch((error) => {
        setIsError(error.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const getFindPlanet = ({
    id,
    population,
  }: {
    id: number;
    population?: number;
  }) => {
    setIsloading(true);
    api
      .get(`planets/${id}`)
      .catch((res) => {
        return res;
      })
      .catch((error) => {
        setIsError(error.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return {
    isLoading,
    isError,
    getPlanets,
    getFindPlanet,
  };
};

export default UseGetPlanets;

import { PlanetProps } from "@/schemas/planets/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormFileds } from "./types";

const useHome = () => {
  const [valueChange, setValueChange] = useState<string>();
  const [planet, setPlanet] = useState<PlanetProps | null>(null);
  const [autoFilter, setAutoFilter] = useState<boolean>(true);
  const [filterName, setFilterName] = useState<string>("Name");

  const methods = useForm<FormFileds>();

  return {
    valueChange,
    setValueChange,
    planet,
    setPlanet,
    autoFilter,
    setAutoFilter,
    filterName,
    setFilterName,
    errors: methods.formState.errors,
    methods,
  };
};

export default useHome;

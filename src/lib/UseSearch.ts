import { useAtom } from "jotai";
import { useState } from "react";
import { useQuery } from "react-query";
import { citiesQuery, fetchCities } from "../api";
import { City } from "../api/entities/EntityDefinition";
import { citiesAtom } from "../global";

const MIN_CHARACTERS = 4;

const useSearch = () => {
  const { isFetching, data, error } = useQuery<City[]>(citiesQuery(), () => fetchCities());
  const [cities, setCities] = useAtom(citiesAtom);

  const filterCities = (name: string) => {
    if (name.length < MIN_CHARACTERS) {
      setCities([]);
      return;
    }

    const list: City[] = data
      ? data.filter((city: City) => city.name.indexOf(name) >= 0)
      : [];
    setCities(list);
  };

  return { isFetching, data, error, filterCities, cities };
};

export default useSearch;
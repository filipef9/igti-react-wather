import { atom } from "jotai";
import { City } from "../api/entities/EntityDefinition";

export const citiesAtom = atom<City[]>([]);
export const checkedCityAtom = atom<number | undefined>(undefined);
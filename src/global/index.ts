import { atom } from "jotai";
import { City } from "../api/entities/EntityDefinition";

export const citiesAtom = atom<City[]>([]);
import cities from './entities/cities.json';
import { City } from './entities/EntityDefinition';

const fetchCities = async (): Promise<City[]> => {
  return JSON.parse(JSON.stringify(cities));
};

export default fetchCities;
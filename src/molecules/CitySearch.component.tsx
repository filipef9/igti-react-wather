import { useAtom } from 'jotai';
import { citiesAtom } from '../global';

import { City } from '../api/entities/EntityDefinition';

import styled from 'styled-components';
import InputSearch from '../atoms/InputSearch.component';
import CityTag from '../atoms/CityTag.component';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 40%;
  margin: auto 0;
  padding-top: 5rem;
`;

const CitySearch = () => {
  const [cities] = useAtom(citiesAtom);

  return (
    <Container>
      <InputSearch hasFound={false} />
      <div>
        {cities.map((city: City) => (
          <CityTag name={city.name} />
        ))}
      </div>
    </Container>
  );
};

export default CitySearch;

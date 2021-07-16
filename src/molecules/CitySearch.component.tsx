import { useAtom } from 'jotai';
import styled from 'styled-components';
import { City } from '../api/entities/EntityDefinition';
import InputSearch from '../atoms/InputSearch.component';
import { citiesAtom } from '../global';
import useSearch from '../lib/UseSearch';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 40%;
  margin: auto 0;
  padding-top: 5rem;
  background-color: #00f;
`;

const CitySearch = () => {
  const [cities] = useAtom(citiesAtom);

  return (
    <Container>
      <InputSearch hasFound={false} />
      <div>
        {cities.map((city: City) => (
          <div>{city.name}</div>
        ))}
      </div>
    </Container>
  );
};

export default CitySearch;

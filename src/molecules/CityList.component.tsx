import { useAtom } from 'jotai';
import { checkedCityAtom, citiesAtom } from '../global';
import { City } from '../api/entities/EntityDefinition';
import styled from 'styled-components';
import CityTag from '../atoms/CityTag.component';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const CityList = () => {
  const [cities] = useAtom(citiesAtom);
  const [checkedCity, setCheckedCity] = useAtom(checkedCityAtom);

  const handleOnClick = (id: number) => {
    setCheckedCity(id);
  };

  return (
    <Container>
      {cities.map((city: City) => (
        <CityTag
          key={city.id}
          onClick={() => handleOnClick(city.id)}
          checked={checkedCity === city.id}
          name={city.name}
        />
      ))}
    </Container>
  );
};

export default CityList;

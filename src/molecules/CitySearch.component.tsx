import styled from 'styled-components';
import InputSearch from '../atoms/InputSearch.component';
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
  // const { isFetching, cities, filterCities } = useSearch();

  // if (isFetching) return <div>Carregando...</div>;

  return (
    <Container>
      <InputSearch hasFound={false} />
    </Container>
  );
};

export default CitySearch;

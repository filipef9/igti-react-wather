import styled from 'styled-components';
import InputSearch from '../atoms/InputSearch.component';
import CityList from './CityList.component';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 40%;
  margin: auto 0;
  padding-top: 5rem;
`;

const CitySearch = () => {
  return (
    <Container>
      <InputSearch hasFound={false} />
      <CityList />
    </Container>
  );
};

export default CitySearch;

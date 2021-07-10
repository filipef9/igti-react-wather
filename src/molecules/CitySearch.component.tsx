import styled from 'styled-components';
import InputSearch from '../atoms/InputSearch.component';

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
      <InputSearch />
    </Container>
  );
};

export default CitySearch;

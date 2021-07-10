import styled from 'styled-components';

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  margin: auto 2rem;
`;

interface SearchInputProps {
  hasError: boolean;
}

const SearchInput = styled.input<SearchInputProps>`
  width: 80%;
  border-radius: 100px;
  height: 1rem;
  background-color: ${ ({hasError}) => `${hasError ? '#f00' : '#999'}`};
  padding: 0.75rem 2rem;
  outline: none;
  transition: 0.2s;
  &:focus {
    width: 100%;
  }
`;

const InputSearch = () => {
  return (
    <SearchBar>
      <SearchInput hasError />
    </SearchBar>
  );
};

export default InputSearch;

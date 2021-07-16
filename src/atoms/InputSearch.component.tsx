import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import useSearch from '../lib/UseSearch';
import SearchIcon from '../SVG/SearchIcon.component';

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  margin: 2rem auto;
`;

interface SearchInputProps {
  hasError: boolean;
}

const SearchInput = styled.input<SearchInputProps>`
  width: 80%;
  border-radius: 100px;
  height: 1rem;
  margin-right: -2.5rem;
  background-color: ${({ hasError }) =>
    `${hasError ? `var(--primary)` : `var(--grey-dark-3)`}`};
  padding: 0.75rem 2rem;
  outline: none;
  transition: 0.2s;
  &:focus {
    width: 100%;
  }
`;

interface InputSearchProps {
  hasFound: boolean;
}

const InputSearch: React.FC<InputSearchProps> = ({ hasFound }) => {
  const [name, setName] = useState('');
  const { filterCities } = useSearch();

  useEffect(() => {
    filterCities(name);
  }, [name]);

  return (
    <SearchBar>
      <SearchInput
        value={name}
        onChange={e => setName(e.currentTarget.value)}
        hasError={!hasFound}
      />
      <SearchIcon />
    </SearchBar>
  );
};

export default InputSearch;

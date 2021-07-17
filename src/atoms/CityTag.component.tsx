import styled from 'styled-components';

interface TagProps {
  checked: boolean;
}

const Tag = styled.div<TagProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-right: 0.1rem;
  margin-left: 0.1rem;
  padding: 0.5rem 2rem;
  background-color: ${({ checked }) =>
    `${checked ? `var(--tag-checked)` : `var(--tag)`}`};
  cursor: pointer;
`;

const TagText = styled.span`
  margin-right: auto;
  margin-left: auto;
`;

interface CityTagProps {
  name: string;
  checked: boolean;
  onClick: () => void;
}

const CityTag: React.FC<CityTagProps> = ({ name, checked, onClick }) => (
  <Tag onClick={onClick} checked={checked}>
    <TagText>{name}</TagText>
  </Tag>
);

export default CityTag;

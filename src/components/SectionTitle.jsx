import styled from 'styled-components';

const SectionTitle = styled.h3`
  margin: 1rem 0;
  text-transform: capitalize;

  &:is(:first-child) {
    margin-top: 0;
  }
`;

export default SectionTitle;

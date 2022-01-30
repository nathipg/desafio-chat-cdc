import styled from 'styled-components';

const StyledOptionsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1.5rem;
  border-bottom: 1px solid var(--light-gray);
  padding: 1rem;
`;

const OptionsBar = ({ children }) => {
  return <StyledOptionsBar>{children}</StyledOptionsBar>;
};

export default OptionsBar;

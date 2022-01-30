import styled from 'styled-components';

const Input = styled.input`
  background: var(--pale-blue);
  border: none;
  padding: 1rem;
  border-radius: 2rem;

  &::placeholder {
    color: var(--gray);
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid var(--blue);
  }
`;

export default Input;

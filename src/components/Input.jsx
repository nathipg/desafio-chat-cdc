import styled from 'styled-components';

const Input = styled.input`
  background: var(--pale-blue);
  border: none;
  padding: ${({ size }) => size === 'sm' ? '0.25rem 0.5rem' : '1rem'};
  border-radius: 2rem;
  width: 100%;

  &::placeholder {
    color: var(--gray);
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid var(--blue);
  }
`;

export default Input;

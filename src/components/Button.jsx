import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  background: none;
  color: var(--gray);
  font-size: 1rem;
  padding: 0.25rem;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background: linear-gradient(90deg, var(--blue) 0%, var(--green) 50%);
      box-shadow: 0px 4px 9px 1px var(--light-gray);
      border-radius: 100%;
      color: white;
      padding: 0.75rem;
    `};

  &:hover {
    cursor: pointer;
  }
`;

export default Button;

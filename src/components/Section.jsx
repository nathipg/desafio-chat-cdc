import styled, { css } from 'styled-components';

const Section = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  ${({ variant }) =>
    variant === 'primary'
      ? css`
          border: 1px solid var(--light-gray);
          border-right: none;
          border-left: none;
          background: var(--white);
        `
      : null}
`;

export default Section;

import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledIcon = styled.div`
  border-radius: 100%;
  background: ${({ picture }) => `url(${picture}) no-repeat center/100%`};
  ${({ size }) =>
    size === 'lg'
      ? css`
          width: 20rem;
          height: 20rem;
        `
      : css`
          width: 2.5rem;
          height: 2.5rem;
        `}
`;

const StyledName = styled.h2`
  font-size: 1.25rem;
`;

const UserIcon = ({ picture, name, size }) => {
  return (
    <StyledContainer>
      <StyledIcon picture={picture} size={size}></StyledIcon>
      {name && <StyledName>{name}</StyledName>}
    </StyledContainer>
  );
};

export default UserIcon;

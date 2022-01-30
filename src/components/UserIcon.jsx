import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background: ${({ picture }) => `url(${picture}) no-repeat center/100%`};
`;

const StyledName = styled.h2`
  font-size: 1.25rem;
`;

const UserIcon = ({ picture, name }) => {
  return (
    <StyledContainer>
      <StyledIcon picture={picture}></StyledIcon>
      {name && <StyledName>{name}</StyledName>}
    </StyledContainer>
  );
};

export default UserIcon;

import styled from 'styled-components';

const StyledIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background: ${({ picture }) => `url(${picture}) no-repeat center/100%`};
`;

const Icon = ({ picture }) => {
  return <StyledIcon picture={picture}></StyledIcon>;
};

export default Icon;

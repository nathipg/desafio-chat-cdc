import styled from 'styled-components';

const StyledMessage = styled.span`
  display: block;
  text-align: center;
  margin: 1rem;
`;

const Message = ({ children }) => {
  return <StyledMessage>{children}</StyledMessage>;
};

export default Message;

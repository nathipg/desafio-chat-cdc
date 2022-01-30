import styled from 'styled-components';

const StyledChatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--pale-blue);
  padding: 1rem;
`;

const ChatList = ({ children }) => {
  return <StyledChatList>{children}</StyledChatList>;
};

export default ChatList;

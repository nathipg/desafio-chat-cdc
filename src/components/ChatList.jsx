import styled from 'styled-components';

const StyledChatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--pale-blue);
  padding: 1rem;
  max-height: calc(100vh - 73px - 54px); // 73px => OptionsBar height; 54px => MessageBar height
  min-height: calc(100vh - 73px - 54px); // 73px => OptionsBar height; 54px => MessageBar height
  overflow: auto;
`;

const ChatList = ({ children }) => {
  return <StyledChatList>{children}</StyledChatList>;
};

export default ChatList;

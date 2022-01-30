import styled from 'styled-components';

const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--pale-blue);
  padding: 1rem;
  max-height: calc(
    100vh - 73px - 80px
  ); // 73px => OptionsBar height; 80px => MessageBar height
  min-height: calc(
    100vh - 73px - 80px
  ); // 73px => OptionsBar height; 80px => MessageBar height
  overflow: auto;
`;

export default ChatList;

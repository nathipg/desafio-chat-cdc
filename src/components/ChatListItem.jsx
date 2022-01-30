import styled, { css } from 'styled-components';
import UserIcon from './UserIcon';

const StyledChatListItem = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: ${({ side }) => (side === 'left' ? 'row' : 'row-reverse')};
  align-items: flex-start;
`;

const StyledBallon = styled.div`
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;

  ${({ side }) =>
    side === 'left'
      ? css`
          background: var(--light-blue);

          &::before {
            content: ' ';
            position: absolute;
            border-style: solid;
            border-width: 10px 15px 10px 0;
            border-color: transparent var(--light-blue) transparent transparent;
            left: 0;
            margin-left: -0.5rem;
            margin-top: -0.3rem;
          }
        `
      : css`
          background: var(--green);
          color: var(--white);

          &::before {
            content: ' ';
            position: absolute;
            border-style: solid;
            border-width: 10px 0 10px 15px;
            border-color: transparent transparent transparent var(--green);
            right: 0;
            margin-right: -0.5rem;
            margin-top: -0.3rem;
          }
        `}
`;

const ChatListItem = ({ user, message, side }) => {
  return (
    <StyledChatListItem side={side}>
      <UserIcon picture={user.picture} />
      <StyledBallon side={side}>
        <span>{message}</span>
      </StyledBallon>
    </StyledChatListItem>
  );
};

export default ChatListItem;

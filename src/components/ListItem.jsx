import styled from 'styled-components';

import Icon from './Icon';

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: ${({ active }) => active ? 'var(--pale-blue)' : 'none'};

  .text {
    max-width: calc(100% - 3rem); // 3rem => icon width + gap

    h2 {
      font-size: 1rem;
    }

    p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;

const ListItem = ({ user, lastMessage, active, clickHandler }) => {
  return (
    <StyledListItem active={active} onClick={clickHandler}>
      <Icon picture={user.picture} />
      <div className="text">
        <h2>{user.name}</h2>
        <p>{lastMessage}</p>
      </div>
    </StyledListItem>
  );
};

export default ListItem;

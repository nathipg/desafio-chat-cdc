import styled from 'styled-components';

import UserIcon from './UserIcon';

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledText = styled.div`
  max-width: calc(100% - 3rem); // 3rem => icon width + gap

  h2 {
    font-size: 1rem;
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const User = ({ user, text }) => {
  return (
    <StyledUser>
      <UserIcon picture={user.picture} />
      <StyledText>
        <h2>{user.name}</h2>
        {text && <p>{text}</p>}
      </StyledText>
    </StyledUser>
  );
};

export default User;

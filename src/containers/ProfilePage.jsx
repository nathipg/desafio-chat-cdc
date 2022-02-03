import { useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import UserIcon from '../components/UserIcon';
import Section from '../components/Section';
import Input from '../components/Input';
import SectionTitle from '../components/SectionTitle';
import InputGroup from '../components/InputGroup';
import DefaultHeader from '../components/DefaultHeader';

import AuthContext from '../store/contexts/auth';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  background: var(--pale-blue);
  min-height: calc(100vh - 73px); // 73px => OptionsBar

  & > *:first-child {
    margin-bottom: 1rem;
  }
`;

const ProfilePage = ({ user }) => {
  const { loggedUser, changeLoggedUserHandler } = useContext(AuthContext);

  const [userName, setUserName] = useState(user.name);
  const [previousName, setPreviousName] = useState(user.name);
  const [userStatus, setUserStatus] = useState(user.status);
  const isCurrentUser = user.id === loggedUser.id;

  const submitHandler = event => {
    event.preventDefault();
    let updatedName;

    if (userName.trim().length === 0) {
      updatedName = previousName;
      setUserName(updatedName);
    } else {
      updatedName = userName.trim();
      setPreviousName(updatedName);
    }

    changeLoggedUserHandler({
      ...user,
      name: updatedName,
      status: userStatus,
    });
  };

  return (
    <>
      <DefaultHeader
        title={isCurrentUser ? 'Profile' : 'Contact'}
        to={isCurrentUser ? '/' : '/chat'}
        state={
          isCurrentUser
            ? {}
            : {
                state: {
                  currentChat: {
                    receiver: user,
                  },
                },
              }
        }
      />
      <StyledContent>
        <UserIcon picture={user.picture} size="lg" />
        {isCurrentUser ? (
          <>
            <Section variant="primary">
              <form onSubmit={submitHandler}>
                <SectionTitle>Your name</SectionTitle>
                <InputGroup>
                  <Input
                    type="text"
                    name="name"
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                  />
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faCheck} />
                  </Button>
                </InputGroup>

                <SectionTitle>Status</SectionTitle>
                <InputGroup>
                  <Input
                    type="text"
                    name="status"
                    value={userStatus}
                    onChange={event => setUserStatus(event.target.value)}
                  />
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faCheck} />
                  </Button>
                </InputGroup>
              </form>
            </Section>
            <Section>
              <p>Your name and status will be visible to your contacts.</p>
            </Section>
          </>
        ) : (
          <>
            <Section variant="primary">
              <SectionTitle>Name</SectionTitle>
              <span>{userName}</span>

              <SectionTitle>Status</SectionTitle>
              <span>{userStatus}</span>
            </Section>
          </>
        )}
      </StyledContent>
    </>
  );
};

export default ProfilePage;

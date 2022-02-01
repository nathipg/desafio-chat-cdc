import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import OptionsBar from '../components/OptionsBar';
import OptionsBarItem from '../components/OptionsBarItem';
import UserIcon from '../components/UserIcon';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import Input from '../components/Input';
import SectionTitle from '../components/SectionTitle';
import InputGroup from '../components/InputGroup';

import { formEntriesHandler } from '../util/utility';

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

const ProfilePage = ({ user, loggedUser, changeUserHandler }) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState(user.name);
  const [previousName, setPreviousName] = useState(user.name);
  const [userStatus, setUserStatus] = useState(user.status);
  const isCurrentUser = user.id === loggedUser.id;

  const submitHandler = event => {
    event.preventDefault();
    const { name, status } = formEntriesHandler(event);
    let updatedName;

    if (name.trim().length === 0) {
      updatedName = previousName;
      setUserName(updatedName);
    } else {
      updatedName = name.trim();
      setPreviousName(updatedName);
    }

    changeUserHandler({
      ...user,
      name: updatedName,
      status,
    });
  };

  return (
    <>
      <OptionsBar>
        <OptionsBarItem align="left">
          <Button onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <PageTitle>{isCurrentUser ? 'Profile' : 'Contact'}</PageTitle>
        </OptionsBarItem>
      </OptionsBar>
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

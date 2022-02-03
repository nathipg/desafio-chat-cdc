import { useContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import ChatPage from './containers/ChatPage';
import ConfigurationPage from './containers/ConfigurationPage';
import ContactsPage from './containers/ContactsPage';
import InboxPage from './containers/InboxPage';
import ProfilePage from './containers/ProfilePage';
import ErrorPage from './containers/ErrorPage';

import ConditionalWrapper from './components/ConditionalWrapper ';
import Loading from './components/Loading';
import Section from './components/Section';

import UserContext from './store/contexts/user';
import ChatContext from './store/contexts/chat';

import * as responsive from './util/responsive';

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100vh;

  ${({ isDesktop }) =>
    isDesktop &&
    css`
      display: flex;
    `};
`;

const ContentWrapper = styled.div`
  ${props => ({ ...props })}
`;

const App = () => {
  const location = useLocation();

  const { loadUsers } = useContext(UserContext);
  const { loadChats } = useContext(ChatContext);

  const [loading, setLoading] = useState({
    complete: false,
    error: false,
  });
  const [isDesktop, setIsDesktop] = useState(false);

  const wrapper = (children, extra = {}) => (
    <ContentWrapper {...extra}>{children}</ContentWrapper>
  );

  useEffect(() => {
    if (!loading.complete) {
      (async () => {
        try {
          await loadUsers();
          await loadChats();

          setLoading(prevState => ({
            ...prevState,
            complete: true,
          }));
        } catch (err) {
          console.error(err);

          setLoading(prevState => ({
            ...prevState,
            complete: true,
            error: true,
          }));
        }
      })();
    }
  }, [loadUsers, loadChats, loading]);

  useEffect(() => {
    setIsDesktop(responsive.isDesktop(window.innerWidth));

    window.addEventListener('resize', () => {
      setIsDesktop(responsive.isDesktop(window.innerWidth));
    });
  }, [setIsDesktop]);

  return (
    <Wrapper isDesktop={isDesktop}>
      {!loading.complete && <Loading />}
      {loading.complete && loading.error && <ErrorPage />}
      {loading.complete && !loading.error && (
        <>
          {isDesktop && (
            <ConditionalWrapper
              condition={isDesktop}
              wrapper={wrapper}
              extra={{ 'min-width': 340, 'max-width': 340 }}
            >
              <InboxPage
                isDesktop={true}
                wrapper={wrapper}
                receiver={
                  location.state &&
                  location.state.currentChat &&
                  location.state.currentChat.receiver
                }
              />
            </ConditionalWrapper>
          )}
          <ConditionalWrapper
            condition={isDesktop}
            wrapper={wrapper}
            extra={{ flex: 1 }}
          >
            <Routes>
              <Route
                path="/"
                exact
                element={
                  isDesktop ? (
                    <Section variant="solid"></Section>
                  ) : (
                    <InboxPage />
                  )
                }
              />
              <Route path="/contacts" exact element={<ContactsPage />} />
              <Route
                path="/configuration"
                exact
                element={<ConfigurationPage />}
              />
              {location.state && location.state.profile && (
                <Route
                  path="/profile"
                  exact
                  element={<ProfilePage user={location.state.profile} />}
                />
              )}
              {location.state && location.state.currentChat && (
                <Route
                  path="/chat"
                  element={
                    <ChatPage receiver={location.state.currentChat.receiver} />
                  }
                />
              )}
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </ConditionalWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default App;

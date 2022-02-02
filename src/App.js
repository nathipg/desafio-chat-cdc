import { useContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import ChatPage from './containers/ChatPage';
import ConfigurationPage from './containers/ConfigurationPage';
import ContactsPage from './containers/ContactsPage';
import InboxPage from './containers/InboxPage';
import ProfilePage from './containers/ProfilePage';
import ErrorPage from './containers/ErrorPage';

import Loading from './components/Loading';

import UserContext from './store/contexts/user';
import ChatContext from './store/contexts/chat';

const App = () => {
  const location = useLocation();

  const [loading, setLoading] = useState({
    complete: false,
    error: false,
  });

  const { loadUsers } = useContext(UserContext);
  const { loadChats } = useContext(ChatContext);

  useEffect(() => {
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
  }, [loadUsers, loadChats]);

  return (
    <>
      {!loading.complete && <Loading />}
      {loading.complete && loading.error && <ErrorPage />}
      {loading.complete && !loading.error && (
        <Routes>
          <Route path="/" exact element={<InboxPage />} />
          <Route path="/contacts" exact element={<ContactsPage />} />
          <Route path="/configuration" exact element={<ConfigurationPage />} />
          {location.state && location.state.profile && (
            <Route
              path="/profile"
              exact
              element={
                <ProfilePage
                  user={location.state.profile}
                  messages={location.state.messages}
                />
              }
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
      )}
    </>
  );
};

export default App;

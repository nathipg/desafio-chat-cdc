import { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import ChatPage from './containers/ChatPage';
import ConfigurationPage from './containers/ConfigurationPage';
import ContactsPage from './containers/ContactsPage';
import InboxPage from './containers/InboxPage';
import ProfilePage from './containers/ProfilePage';

import { loadUsers, loadUserChats } from './services/User';

const App = () => {
  const loggedUserId = 1; // It's fixed because there is no real login

  const navigate = useNavigate();
  const location = useLocation();

  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState({
    complete: false,
    error: false,
  });

  const changeLoggedUserHandler = user => {
    setLoggedUser(user);
  };

  const removeChatHandler = chatUsers => {
    const updatedChats = chats.filter(
      chat =>
        !(
          chat.members.indexOf(chatUsers[0].id) !== -1 &&
          chat.members.indexOf(chatUsers[1].id) !== -1
        )
    );

    setChats(updatedChats);

    navigate('/');
  };

  useEffect(() => {
    (async () => {
      try {
        const users = await loadUsers();
        const chats = await loadUserChats(loggedUserId);

        setUsers(users);
        setLoggedUser(users.find(user => user.id === loggedUserId));
        setChats(chats);

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
  }, [setUsers, setLoggedUser, setChats]);

  return (
    <>
      {loading.complete && !loading.error && (
        <Routes>
          <Route
            path="/"
            exact
            element={
              <InboxPage users={users} loggedUser={loggedUser} chats={chats} />
            }
          />
          <Route
            path="/contacts"
            exact
            element={
              <ContactsPage
                users={users}
                loggedUser={loggedUser}
                chats={chats}
              />
            }
          />
          <Route path="/configuration" exact element={<ConfigurationPage />} />
          {location.state && location.state.profile && (
            <Route
              path="/profile"
              exact
              element={
                <ProfilePage
                  loggedUser={loggedUser}
                  user={location.state.profile}
                  changeUserHandler={changeLoggedUserHandler}
                />
              }
            />
          )}
          {location.state && location.state.currentChat && (
            <Route
              path="/chat"
              element={
                <ChatPage
                  receiver={location.state.currentChat.receiver}
                  loggedUser={loggedUser}
                  messages={location.state.currentChat.messages}
                  removeChatHandler={removeChatHandler}
                />
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

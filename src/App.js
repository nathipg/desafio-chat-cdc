import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ChatPage from './containers/ChatPage';
import InboxPage from './containers/InboxPage';
import ProfilePage from './containers/ProfilePage';

import { loadUsers, loadUserChats } from './services/User';

const App = () => {
  const loggedUserId = 1; // It's fixed because there is no real login

  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [loading, setLoading] = useState({
    complete: false,
    error: false,
  });

  const changeLoggedUserName = name => {
    setLoggedUser(prevState => ({ ...prevState, name }));
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
              <InboxPage
                users={users}
                loggedUser={loggedUser}
                chats={chats}
                selectChatHandler={userId => setCurrentChat(userId)}
              />
            }
          />
          <Route
            path="/profile"
            exact
            element={
              <ProfilePage
                loggedUser={loggedUser}
                changeNameHandler={changeLoggedUserName}
              />
            }
          />
          {currentChat && (
            <Route
              path="/chat"
              element={
                <ChatPage
                  receiver={currentChat.receiver}
                  loggedUser={loggedUser}
                  messages={currentChat.messages}
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

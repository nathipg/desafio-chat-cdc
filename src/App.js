import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ChatPage from './containers/ChatPage';
import InboxPage from './containers/InboxPage';

import { loadUsers, loadUserChats } from './services/User';

const App = () => {
  const loggedUserId = 1; // It's fixed because there is no real login

  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState({
    complete: false,
    error: false,
  });

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
          <Route path="/chat" element={<ChatPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      )}
    </>
  );
};

export default App;

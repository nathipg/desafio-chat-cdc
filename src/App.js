import { useEffect, useState } from 'react';

import { loadUsers, loadUserChats } from './services/User';

const App = () => {
  const loggedUserId = 1; // It's fixed because there is no real login

  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const users = await loadUsers();
        const chats = await loadUserChats(loggedUserId);

        setUsers(users);
        setLoggedUser(users.find(user => user.id === loggedUserId));
        setChats(chats);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <></>
  );
};

export default App;

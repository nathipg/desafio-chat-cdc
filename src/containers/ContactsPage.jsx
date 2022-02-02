import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import List from '../components/List';
import ListItem from '../components/ListItem';
import Message from '../components/Message';
import User from '../components/User';
import DefaultHeader from '../components/DefaultHeader';

import AuthContext from '../store/contexts/auth';
import UserContext from '../store/contexts/user';

const ContactsPage = () => {
  const navigate = useNavigate();

  const { loggedUser } = useContext(AuthContext);
  const { users } = useContext(UserContext);

  const listUsers = () => {
    if (users.length === 0) {
      return <Message>No contacts found</Message>;
    }

    return users.map(
      user =>
        user.id !== loggedUser.id && (
          <ListItem
            key={user.id}
            clickHandler={() => clickContactHandler(user)}
          >
            <User user={user} text={user.status} />
          </ListItem>
        )
    );
  };

  const clickContactHandler = user => {
    navigate('/chat', {
      state: {
        currentChat: {
          receiver: user,
        },
      },
    });
  };

  return (
    <>
      <DefaultHeader title="Contacts" />
      <List>{listUsers()}</List>
    </>
  );
};

export default ContactsPage;

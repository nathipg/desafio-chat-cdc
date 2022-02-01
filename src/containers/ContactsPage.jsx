import { useNavigate } from 'react-router-dom';

import List from '../components/List';
import ListItem from '../components/ListItem';
import Message from '../components/Message';
import User from '../components/User';
import DefaultHeader from '../components/DefaultHeader';

const ContactsPage = ({ users, loggedUser, chats }) => {
  const navigate = useNavigate();

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
    const chat = chats.find(
      chat =>
        chat.members.indexOf(loggedUser.id) !== -1 &&
        chat.members.indexOf(user.id) !== -1
    );
    const messages = chat ? chat.messages : [];

    navigate('/chat', {
      state: {
        currentChat: {
          receiver: user,
          messages,
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

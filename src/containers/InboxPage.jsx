import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faEllipsisV,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import List from '../components/List';
import ListItem from '../components/ListItem';
import Message from '../components/Message';
import OptionsBar from '../components/OptionsBar';
import OptionsBarItem from '../components/OptionsBarItem';

const InboxPage = ({ users, loggedUser, chats }) => {
  const listChats = () => {
    if (chats.length === 0) {
      return <Message>No chats found</Message>;
    }

    return chats.map(chat => {
      const lastMessage = chat.messages.at(-1).content;
      const userId = chat.members.find(userId => userId !== loggedUser.id);
      const user = users.find(user => user.id === userId);

      return (
        <ListItem
          key={userId}
          user={user}
          lastMessage={lastMessage}
          clickHandler={() => console.log('Clicked!')}
        />
      );
    });
  };
  return (
    <>
      <OptionsBar>
        <OptionsBarItem align="left">
          <FontAwesomeIcon icon={faBars} />
        </OptionsBarItem>
        <OptionsBarItem>
          <FontAwesomeIcon icon={faSearch} />
        </OptionsBarItem>
        <OptionsBarItem>
          <FontAwesomeIcon icon={faEllipsisV} />
        </OptionsBarItem>
      </OptionsBar>
      <List>{listChats()}</List>
    </>
  );
};

export default InboxPage;

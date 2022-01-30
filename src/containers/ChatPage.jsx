import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import ChatList from '../components/ChatList';
import OptionsBar from '../components/OptionsBar';
import OptionsBarItem from '../components/OptionsBarItem';
import UserIcon from '../components/UserIcon';
import ChatListItem from '../components/ChatListItem';

const ChatPage = ({ receiver, loggedUser, messages }) => {
  const navigate = useNavigate();
  const chatUsers = [receiver, loggedUser];

  const listMessages = () => {
    return messages.map((message, key) => {
      const user = chatUsers.find(user => user.id === message.user);
      return (
        <ChatListItem
          key={key}
          user={user}
          message={message.content}
          side={user.id === loggedUser.id ? 'right' : 'left'}
        />
      );
    });
  };

  return (
    <>
      <OptionsBar>
        <OptionsBarItem align="left">
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate('/')} />
          <UserIcon picture={receiver.picture} name={receiver.name} />
        </OptionsBarItem>
        <OptionsBarItem>
          <FontAwesomeIcon icon={faEllipsisV} />
        </OptionsBarItem>
      </OptionsBar>
      <ChatList>
        {listMessages()}
      </ChatList>
    </>
  );
};

export default ChatPage;
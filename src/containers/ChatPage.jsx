import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import ChatList from '../components/ChatList';
import OptionsBar from '../components/OptionsBar';
import OptionsBarItem from '../components/OptionsBarItem';
import UserIcon from '../components/UserIcon';
import ChatListItem from '../components/ChatListItem';
import MessageBar from '../components/MessageBar';
import Backdrop from '../components/Backdrop';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

import AuthContext from '../store/contexts/auth';
import ChatContext from '../store/contexts/chat';

const ChatPage = ({ receiver }) => {
  const navigate = useNavigate();
  const elementRef = useRef();

  const { loggedUser } = useContext(AuthContext);
  const { chats, removeChat, addChatMessage, getChatByReceiver } =
    useContext(ChatContext);

  const [showMenu, setShowMenu] = useState(false);
  const chatUsers = [receiver, loggedUser];

  const listMessages = () => {
    const chat = getChatByReceiver(receiver);
    const messages = chat ? chat.messages : [];

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

  const clickRemoveChatHandler = () => {
    removeChat(chatUsers);
  };

  const clickSeeContact = () => {
    navigate('/profile', {
      state: {
        profile: receiver,
      },
    });
  };

  useEffect(() => {
    elementRef.current.scrollTop = elementRef.current.scrollHeight;
  }, [chats, receiver]);

  return (
    <>
      <OptionsBar>
        <OptionsBarItem align="left">
          <Button onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <UserIcon picture={receiver.picture} name={receiver.name} />
        </OptionsBarItem>
        <OptionsBarItem>
          <Button onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </Button>
          {showMenu && (
            <>
              <Backdrop onClick={() => setShowMenu(!showMenu)} />
              <Menu>
                <MenuItem onClick={clickSeeContact}>See contact</MenuItem>
                <MenuItem onClick={clickRemoveChatHandler}>
                  Remove chat
                </MenuItem>
              </Menu>
            </>
          )}
        </OptionsBarItem>
      </OptionsBar>
      <ChatList elementRef={elementRef}>{listMessages()}</ChatList>
      <MessageBar receiver={receiver} addChatMessage={addChatMessage} />
    </>
  );
};

export default ChatPage;

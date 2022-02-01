import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faEllipsisV,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import Input from '../components/Input';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Message from '../components/Message';
import OptionsBar from '../components/OptionsBar';
import OptionsBarItem from '../components/OptionsBarItem';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Backdrop from '../components/Backdrop';

const InboxPage = ({ users, loggedUser, chats }) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [filteredChats, setFilteredChats] = useState(chats);

  const listChats = () => {
    if (filteredChats.length === 0) {
      return <Message>No chats found</Message>;
    }

    return filteredChats.map(chat => {
      const lastMessage = chat.messages.at(-1).content;
      const userId = chat.members.find(userId => userId !== loggedUser.id);
      const user = users.find(user => user.id === userId);

      return (
        <ListItem
          key={userId}
          user={user}
          text={lastMessage}
          clickHandler={() => {
            navigate('/chat', {
              state: {
                currentChat: {
                  receiver: user,
                  messages: chat.messages,
                },
              },
            });
          }}
        />
      );
    });
  };

  const searchChat = event => {
    const search = event.target.value;
    const filteredUsers = users.filter(
      user => user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    const updatedFilteredChats = chats.filter(chat => {
      const receiverId = chat.members.find(id => id !== loggedUser.id);
      return filteredUsers.find(user => user.id === receiverId);
    });
    setFilteredChats(updatedFilteredChats);
  };

  const clickMenuHandler = () => {
    navigate('/profile', {
      state: {
        profile: loggedUser,
      },
    });
  };

  return (
    <>
      <OptionsBar>
        <OptionsBarItem align="left">
          <Button onClick={clickMenuHandler}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </OptionsBarItem>
        <OptionsBarItem>
          {showSearch && (
            <Input
              type="text"
              name="search"
              size="sm"
              onChange={searchChat}
              autoFocus
            />
          )}
          <Button onClick={() => setShowSearch(!showSearch)}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </OptionsBarItem>
        <OptionsBarItem>
          <Button onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </Button>
          {showMenu && (
            <>
              <Backdrop onClick={() => setShowMenu(!showMenu)} />
              <Menu>
                <MenuItem onClick={() => navigate('/contacts')}>
                  Contacts
                </MenuItem>
                <MenuItem>Configuration</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </>
          )}
        </OptionsBarItem>
      </OptionsBar>
      <List>{listChats()}</List>
    </>
  );
};

export default InboxPage;

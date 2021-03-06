import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faEllipsisV,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import ConditionalWrapper from '../components/ConditionalWrapper ';
import Input from '../components/Input';
import List from '../components/List';
import Message from '../components/Message';
import OptionsBar from '../components/OptionsBar';
import OptionsBarItem from '../components/OptionsBarItem';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Backdrop from '../components/Backdrop';
import ListItem from '../components/ListItem';
import User from '../components/User';

import AuthContext from '../store/contexts/auth';
import UserContext from '../store/contexts/user';
import ChatContext from '../store/contexts/chat';

const InboxPage = ({ isDesktop, wrapper, receiver }) => {
  const navigate = useNavigate();

  const { loggedUser } = useContext(AuthContext);
  const { users } = useContext(UserContext);
  const { chats } = useContext(ChatContext);

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
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
          active={receiver && receiver.id === user.id}
          clickHandler={() => {
            navigate('/chat', {
              state: {
                currentChat: {
                  receiver: user,
                },
              },
            });
          }}
        >
          <User user={user} text={lastMessage} />
        </ListItem>
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
    setSearch(search);
  };

  const clickMenuHandler = () => {
    navigate('/profile', {
      state: {
        profile: loggedUser,
      },
    });
  };

  useEffect(() => {
    setFilteredChats(chats);
  }, [chats]);

  return (
    <ConditionalWrapper
      condition={isDesktop}
      wrapper={wrapper}
      extra={{
        position: 'relative',
        'border-right': '1px solid var(--light-gray)',
        height: '100%',
      }}
    >
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
              value={search}
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
              <Menu onClick={() => setShowMenu(!showMenu)}>
                <MenuItem onClick={() => navigate('/contacts')}>
                  Contacts
                </MenuItem>
                <MenuItem onClick={() => navigate('/configuration')}>
                  Configuration
                </MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </>
          )}
        </OptionsBarItem>
      </OptionsBar>
      <List>{listChats()}</List>
    </ConditionalWrapper>
  );
};

export default InboxPage;

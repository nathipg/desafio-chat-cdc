import { createContext, useCallback, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { chatReducer, chatReducerActions } from '../reducers/chat';

import AuthContext from './auth';

import * as userService from '../../services/User';

import { getChatByMembers } from '../../util/utility';

const ChatContext = createContext({
  chats: [],
});

export const ChatContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const { loggedUser } = useContext(AuthContext);

  const [chats, dispatchChats] = useReducer(chatReducer, []);

  const loadChats = useCallback(async () => {
    const chats = await userService.loadChats(loggedUser.id);

    dispatchChats({
      type: chatReducerActions.LOAD,
      chats,
    });
  }, [dispatchChats, loggedUser]);

  const removeChat = chatUsers => {
    dispatchChats({
      type: chatReducerActions.REMOVE,
      members: [...chatUsers],
    });

    navigate('/');
  };

  const addChatMessage = (receiver, message) => {
    dispatchChats({
      type: chatReducerActions.ADD_MESSAGE,
      receiver,
      message,
      loggedUser,
    });
  };

  const getChatByReceiver = receiver => {
    return getChatByMembers(chats, receiver, loggedUser);
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        loadChats,
        removeChat,
        addChatMessage,
        getChatByReceiver,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;

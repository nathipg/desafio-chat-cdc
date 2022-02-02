import moment from 'moment';
import { filterChatsByMembers, getChatByMembers } from '../../util/utility';

const loadHandler = (prevState, action) => {
  return [...action.chats];
};

const removeHandler = (prevState, action) => {
  return filterChatsByMembers(prevState, action.members[0], action.members[1]);
};

const addMessageHandler = (prevState, action) => {
  if (action.message === '') {
    return;
  }

  const chat = getChatByMembers(prevState, action.loggedUser, action.receiver);

  let updatedMessages;

  const now = new Date();
  const date = moment(now).format('YYYY-MM-DD HH:MM:SS');

  if (chat) {
    updatedMessages = [
      ...chat.messages,
      {
        user: action.loggedUser.id,
        content: action.message,
        date: date,
      },
    ];
  } else {
    updatedMessages = [
      {
        user: action.loggedUser.id,
        content: action.message,
        date: date,
      },
    ];
  }

  const updatedChat = {
    members: [action.loggedUser.id, action.receiver.id],
    messages: updatedMessages,
  };

  const chatsWithoutCurrent = filterChatsByMembers(
    prevState,
    action.loggedUser,
    action.receiver
  );

  return [updatedChat, ...chatsWithoutCurrent];
};

export const chatReducer = (prevState, action) => {
  switch (action.type) {
    case chatReducerActions.LOAD:
      return loadHandler(prevState, action);
    case chatReducerActions.REMOVE:
      return removeHandler(prevState, action);
    case chatReducerActions.ADD_MESSAGE:
      return addMessageHandler(prevState, action);
    default:
      throw new Error('Invalid action');
  }
};

export const chatReducerActions = {
  LOAD: 'LOAD',
  REMOVE: 'REMOVE',
  ADD_MESSAGE: 'ADD_MESSAGE',
};

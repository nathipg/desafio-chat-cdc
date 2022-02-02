export const getChatByMembers = (chats, ...members) => {
  return chats.find(
    chat =>
      chat.members.indexOf(members[0].id) !== -1 &&
      chat.members.indexOf(members[1].id) !== -1
  );
};

export const filterChatsByMembers = (chats, ...members) => {
  return chats.filter(
    chat =>
      !(
        chat.members.indexOf(members[0].id) !== -1 &&
        chat.members.indexOf(members[1].id) !== -1
      )
  );
};

// Pretending that I'm consulting an api

const allChats = [
  {
    members: [1, 2],
    messages: [
      {
        user: 1,
        content: 'Hi õ/',
        date: '2021-01-29 20:23:00',
      },
      {
        user: 1,
        content: "What's up?",
        date: '2021-01-29 20:23:02',
      },
      {
        user: 2,
        content: 'Hello :)',
        date: '2021-01-29 20:30:00',
      },
      {
        user: 2,
        content: 'Fine and you?',
        date: '2021-01-29 20:30:05',
      },
      {
        user: 1,
        content: 'Good to know',
        date: '2021-01-29 20:35:00',
      },
      {
        user: 1,
        content: "I'm alright",
        date: '2021-01-29 20:35:05',
      },
      {
        user: 2,
        content: 'Hello :)',
        date: '2021-01-30 20:30:00',
      },
      {
        user: 2,
        content: "What's up?",
        date: '2021-01-30 20:23:02',
      },
      {
        user: 1,
        content: 'Hi õ/',
        date: '2021-01-30 20:23:00',
      },
      {
        user: 1,
        content: 'Alright and you?',
        date: '2021-01-30 20:30:05',
      },
      {
        user: 2,
        content: 'Fine',
        date: '2021-01-30 20:35:00',
      },
      {
        user: 2,
        content: 'Do you know if we are going to work on the holyday?',
        date: '2021-01-30 20:35:30',
      },
      {
        user: 1,
        content: 'Hmmm',
        date: '2021-01-30 20:45:00',
      },
      {
        user: 1,
        content: "That's a good question",
        date: '2021-01-30 20:45:10',
      },
      {
        user: 1,
        content: "Candice may know this, but I don't",
        date: '2021-01-30 20:45:00',
      },
    ],
  },
  {
    members: [2, 3],
    messages: [
      {
        user: 1,
        content: 'This should not be loaded',
        date: '2021-01-29 20:23:00',
      },
      {
        user: 1,
        content: "I know, right? --'",
        date: '2021-01-29 20:32:02',
      },
    ],
  },
  {
    members: [3, 1],
    messages: [
      {
        user: 3,
        content: 'You are late :|',
        date: '2021-01-29 20:23:00',
      },
      {
        user: 1,
        content: 'My bad, I oversleept :/',
        date: '2021-01-29 20:32:02',
      },
    ],
  },
];

const users = [
  {
    id: 1,
    name: 'Nathália Pissuti',
    picture: 'https://github.com/nathipg.png',
  },
  {
    id: 2,
    name: 'Debra Harris',
    picture: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
  {
    id: 3,
    name: 'Candice Frazier',
    picture: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

export const loadUsers = () => {
  return Promise.resolve(users);
};

export const loadUserChats = userId => {
  return Promise.resolve(
    allChats.filter(chat => chat.members.indexOf(userId) !== -1)
  );
};

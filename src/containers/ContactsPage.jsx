import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../components/Button';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Message from '../components/Message';
import OptionsBar from '../components/OptionsBar';
import OptionsBarItem from '../components/OptionsBarItem';
import PageTitle from '../components/PageTitle';

const ContactsPage = ({ users, loggedUser }) => {
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
            user={user}
            text={user.status}
            clickHandler={() => console.log('Clicked')}
          />
        )
    );
  };

  return (
    <>
      <OptionsBar>
        <OptionsBarItem align="left">
          <Button onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <PageTitle>Contacts</PageTitle>
        </OptionsBarItem>
      </OptionsBar>
      <List>{listUsers()}</List>
    </>
  );
};

export default ContactsPage;

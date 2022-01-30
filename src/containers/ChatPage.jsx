import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import OptionsBar from '../components/OptionsBar';
import OptionsBarItem from '../components/OptionsBarItem';
import UserIcon from '../components/UserIcon';

const ChatPage = ({ receiver, loggedUser, messages }) => {
  const navigate = useNavigate();

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
    </>
  );
};

export default ChatPage;

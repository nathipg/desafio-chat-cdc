import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import OptionsBar from '../components/OptionsBar';
import OptionsBarItem from '../components/OptionsBarItem';

const ChatPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <OptionsBar>
        <OptionsBarItem align="left">
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate('/')} />
        </OptionsBarItem>
        <OptionsBarItem>
          <FontAwesomeIcon icon={faEllipsisV} />
        </OptionsBarItem>
      </OptionsBar>
    </>
  );
};

export default ChatPage;

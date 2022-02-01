import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import OptionsBar from './OptionsBar';
import OptionsBarItem from './OptionsBarItem';
import PageTitle from './PageTitle';

const DefaultHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <OptionsBar>
      <OptionsBarItem align="left">
        <Button onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <PageTitle>{title}</PageTitle>
      </OptionsBarItem>
    </OptionsBar>
  );
};

export default DefaultHeader;

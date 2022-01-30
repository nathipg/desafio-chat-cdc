import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperclip,
  faGrin,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import Input from './Input';

const StyledMessageBar = styled.div`
  display: flex;
  gap: 1rem;
  border-top: 1px solid var(--light-gray);
  padding: 1rem;
`;

const MessageBar = () => {
  return (
    <StyledMessageBar>
      <Button>
        <FontAwesomeIcon icon={faPaperclip} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faGrin} />
      </Button>
      <Input style={{ flex: 1 }} placeholder="Leave a comment..." />
      <Button variant="primary">
        <FontAwesomeIcon icon={faPaperPlane} />
      </Button>
    </StyledMessageBar>
  );
};

export default MessageBar;

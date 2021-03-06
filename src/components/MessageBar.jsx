import { useState } from 'react';
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
  min-height: 80px;
  max-height: 80px;

  form {
    display: flex;
    flex: 1;
    gap: 1rem;
  }
`;

const MessageBar = ({ receiver, addChatMessage }) => {
  const [message, setMessage] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    setMessage('');
    addChatMessage(receiver, message);
  };

  return (
    <StyledMessageBar>
      <Button>
        <FontAwesomeIcon icon={faPaperclip} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faGrin} />
      </Button>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          name="message"
          style={{ flex: 1 }}
          placeholder="Leave a comment..."
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <Button variant="primary">
          <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </form>
    </StyledMessageBar>
  );
};

export default MessageBar;

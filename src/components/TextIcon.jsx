import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledTextIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TextIcon = ({ icon, text }) => {
  return (
    <StyledTextIcon>
      <FontAwesomeIcon icon={icon} />
      {text}
    </StyledTextIcon>
  );
};

export default TextIcon;

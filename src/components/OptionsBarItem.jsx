import styled from 'styled-components';

const OptionsBarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  ${({ align }) => {
    if (align === 'left') {
      return 'margin-right: auto;';
    }

    if (align === 'center') {
      return 'margin: auto;';
    }

    return '';
  }}
`;

export default OptionsBarItem;

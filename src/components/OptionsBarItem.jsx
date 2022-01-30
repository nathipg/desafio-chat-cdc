import styled from 'styled-components';

const StyledOptionsBarItem = styled.div`
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

const OptionsBarItem = ({ children, align }) => {
  return <StyledOptionsBarItem align={align}>{children}</StyledOptionsBarItem>;
};

export default OptionsBarItem;

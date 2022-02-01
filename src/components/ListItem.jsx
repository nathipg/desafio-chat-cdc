import styled from 'styled-components';

const StyledListItem = styled.div`
  background-color: ${({ active }) => (active ? 'var(--pale-blue)' : 'none')};
  padding: 1rem;

  &:hover {
    cursor: pointer;
    background-color: var(--pale-blue);
  }
`;

const ListItem = ({ children, active, clickHandler }) => {
  return (
    <StyledListItem active={active} onClick={clickHandler}>
      {children}
    </StyledListItem>
  );
};

export default ListItem;

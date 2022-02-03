const ConditionalWrapper = ({ condition, wrapper, extra, children }) => {
  return condition ? wrapper(children, extra) : children;
};

export default ConditionalWrapper;

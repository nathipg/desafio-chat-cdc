const ComposeContext = ({ children, contextProviders }) => {
  return (
    <>
      {contextProviders.reduceRight(
        (content, ContextProvider) => (
          <ContextProvider>{content}</ContextProvider>
        ),
        children
      )}
    </>
  );
};

export default ComposeContext;

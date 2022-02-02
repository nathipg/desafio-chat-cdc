import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

const ErrorPage = () => {
  return (
    <>
      <Section>
        <SectionTitle>Error</SectionTitle>
        <p>Could not load app :(</p>
        <p>Please, try again later</p>
      </Section>
    </>
  );
};

export default ErrorPage;

import {
  BecomeMember,
  Collaboration,
  ProjectsSection,
  YoutubeSection,
  Header,
  EventsSection,
  Newsletter,
} from '../components/pages/Home-Page-Components';

const Home = () => {
  return (
    <>
      <Header />
      <BecomeMember />
      <div className='w-[90%] mx-auto'>
        <YoutubeSection />
        <Collaboration />
        <ProjectsSection />
        <EventsSection />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;

import Story from './Story.jsx';
import Accommodation from './Accomodation.jsx';
import Schedule from './Schedule.jsx';

const Home = () => {
  return (
    <div className='Conatiner w-full h-auto '>
      {/* hero section */}
      <div className="bg-[url('Images/hero.jpg')] bg-cover relative bg-no-repeat h-[600px]">
        <div className='font-italiano text-5xl tracking-wider capitalize absolute right-24 top-32'>
          We're getting <br /> married!!
        </div>
        <span className='absolute inset-0 bg-black/30'></span>
      </div>
      <Story />
      <Schedule />
      <Accommodation />
    </div>
  );
};

export default Home;

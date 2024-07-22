import Story from './Story.jsx';
import Accommodation from './Accomodation.jsx';
import Schedule from './Schedule.jsx';

const Home = () => {
  return (
    <div className='Conatiner w-full h-auto '>
      {/* hero section */}
      <div className="bg-[url('Images/hero.jpg')] bg-cover relative bg-no-repeat lg:h-[600px] h-[350px]">
        <div className='font-italiano text-4xl lg:text-5xl tracking-wider capitalize absolute lg:right-24 lg:top-32  top-52 right-14 z-10 opacity-80'>
          We`&apos;`re getting <br /> married!!
        </div>
        <span className='absolute inset-0 bg-black/40'></span>
      </div>
      <Story />
      <Schedule />
      <Accommodation />
    </div>
  );
};

export default Home;

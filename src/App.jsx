import Navbar from './shared/Navbar.jsx';
import Home from './pages/Home.jsx';
import Story from './pages/Story.jsx';
import Accommodation from './pages/Accomodation.jsx';
import Gallery from './pages/Gallery.jsx';
import Registry from './pages/Registry.jsx';
import Schedule from './pages/Schedule.jsx';
import Footer from './shared/Footer';

const App = () => {
  return (
    <section className='bg-[#FBF8F2] text-black overflow-hidden'>
      <Navbar />
      <Home id='home' />
      <Story id='story' />
      <Schedule id='schedule' />
      <Accommodation id='accommodation' />
      <Gallery id='gallery' />
      <Registry id='registry' />
      <Footer />
    </section>
  );
};

export default App;

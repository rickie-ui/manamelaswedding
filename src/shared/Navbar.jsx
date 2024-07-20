import { Outlet, Link } from 'react-router-dom';
import Footer from '../shared/Footer';

const Navbar = () => {
  return (
    <section className='bg-black text-white'>
      <div className='capitalize tracking-wider  flex justify-between font-italiano items-center text-3xl px-8 py-5'>
        <h3>September 24, Pretoria East</h3>
        <h3>#AbeyWedsCarol</h3>
      </div>
      <h3 className='text-5xl text-center mb-4 font-title'>Carol & Abey</h3>
      {/* navigation: to be moved to navbar */}
      <nav className='flex w-8/12 mx-auto items-center py-6 gap-14 justify-center text-lg uppercase font-title'>
        <Link to={`/`}>Home</Link>
        <Link to={`story`}>Our Story</Link>
        <Link to={`Schedule`}>Schedule</Link>
        <Link to={`Accomodation`}>Accomodation</Link>
        <Link to={`Accomodation`}>Gallery</Link>
        <Link to={`Registry`}>Registry</Link>
      </nav>
      <Outlet />
      <Footer />
    </section>
  );
};

export default Navbar;

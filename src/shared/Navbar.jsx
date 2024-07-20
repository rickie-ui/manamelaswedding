import { Outlet, Link } from 'react-router-dom';
import Footer from '../shared/Footer';
import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { FaBars } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';

const Navbar = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 1024px)');
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <section className='bg-black text-white overflow-hidden'>
      <div className='capitalize tracking-wider text-lg flex justify-between font-italiano items-center lg:text-3xl lg:px-8 px-2 py-5'>
        <h3>September 24, Pretoria East</h3>
        <h3>#AbeyWedsCarol</h3>
      </div>
      <h3 className=' text-4xl lg:text-5xl text-center mb-4 font-title'>
        Carol & Abey
      </h3>
      {/* navigation: to be moved to navbar */}

      {!isSmallDevice ? (
        <nav className='flex w-8/12 mx-auto items-center py-6 gap-14 justify-center text-lg uppercase font-title'>
          <Link to={`/`}>Home</Link>
          <Link to={`story`}>Our Story</Link>
          <Link to={`Schedule`}>Schedule</Link>
          <Link to={`Accomodation`}>Accomodation</Link>
          <Link to={`Accomodation`}>Gallery</Link>
          <Link to={`Registry`}>Registry</Link>
        </nav>
      ) : (
        <div className='flex items-center justify-end  px-2'>
          <button
            className=' right-4 rounded-md p-4 self-end'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FaBars className='text-2xl' />
          </button>
        </div>
      )}
      {/* mobile menu */}
      {isSmallDevice && isMenuToggled && (
        <div className='fixed bottom-0 right-0 z-40 h-full w-[300px] bg-black/75 drop-shadow-xl'>
          {/* close Icon */}
          <div className=' flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <LiaTimesSolid className='h-6 w-6 text-gray-300' />
            </button>
          </div>
          {/* menu items */}

          <div className='flex flex-col items-center  text-center gap-4 text-base text-white/60 font-title uppercase'>
            <a
              href='#'
              className='w-full py-2 hover:text-[#C3AC5B]'
              onClick={() => setIsMenuToggled(false)}
            >
              Home
            </a>
            <a
              href='#'
              className='w-full py-2 hover:text-[#C3AC5B]'
              onClick={() => setIsMenuToggled(false)}
            >
              Our Story
            </a>
            <a
              href='#'
              className='w-full py-2 hover:text-[#C3AC5B]'
              onClick={() => setIsMenuToggled(false)}
            >
              Schedule
            </a>
            <a
              href='#'
              className='w-full py-2 hover:text-[#C3AC5B]'
              onClick={() => setIsMenuToggled(false)}
            >
              Accomodation
            </a>
            <a
              href='#'
              className='w-full py-2 hover:text-[#C3AC5B]'
              onClick={() => setIsMenuToggled(false)}
            >
              Gallery
            </a>
            <a
              href='#'
              className='w-full py-2 hover:text-[#C3AC5B]'
              onClick={() => setIsMenuToggled(false)}
            >
              Registry
            </a>
          </div>
        </div>
      )}
      <Outlet />
      <Footer />
    </section>
  );
};

export default Navbar;

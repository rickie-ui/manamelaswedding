import { Outlet, NavLink } from 'react-router-dom';
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
          <NavLink
            className={({ isActive }) => (isActive ? 'text-[#C3AC5B]' : '')}
            to={`/`}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-[#C3AC5B]' : '')}
            to={`story`}
          >
            Our Story
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-[#C3AC5B]' : '')}
            to={`schedule`}
          >
            Schedule
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-[#C3AC5B]' : '')}
            to={`accomodation`}
          >
            Accomodation
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-[#C3AC5B]' : '')}
            to={`gallery`}
          >
            Gallery
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-[#C3AC5B]' : '')}
            to={`registry`}
          >
            Registry
          </NavLink>
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
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                `w-full py-2 hover:text-[#C3AC5B] ${
                  isActive ? 'text-[#C3AC5B]' : ''
                }`
              }
              onClick={() => setIsMenuToggled(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={'story'}
              className={({ isActive }) =>
                `w-full py-2 hover:text-[#C3AC5B] ${
                  isActive ? 'text-[#C3AC5B]' : ''
                }`
              }
              onClick={() => setIsMenuToggled(false)}
            >
              Our Story
            </NavLink>
            <NavLink
              to={'schedule'}
              className={({ isActive }) =>
                `w-full py-2 hover:text-[#C3AC5B] ${
                  isActive ? 'text-[#C3AC5B]' : ''
                }`
              }
              onClick={() => setIsMenuToggled(false)}
            >
              Schedule
            </NavLink>
            <NavLink
              to={'accomodation'}
              className={({ isActive }) =>
                `w-full py-2 hover:text-[#C3AC5B] ${
                  isActive ? 'text-[#C3AC5B]' : ''
                }`
              }
              onClick={() => setIsMenuToggled(false)}
            >
              Accomodation
            </NavLink>
            <NavLink
              to={'gallery'}
              className={({ isActive }) =>
                `w-full py-2 hover:text-[#C3AC5B] ${
                  isActive ? 'text-[#C3AC5B]' : ''
                }`
              }
              onClick={() => setIsMenuToggled(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to={'registry'}
              className={({ isActive }) =>
                `w-full py-2 hover:text-[#C3AC5B] ${
                  isActive ? 'text-[#C3AC5B]' : ''
                }`
              }
              onClick={() => setIsMenuToggled(false)}
            >
              Registry
            </NavLink>
          </div>
        </div>
      )}
      <Outlet />
      <Footer />
    </section>
  );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { FaBars } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';

const Navbar = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 1024px)');
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${sectionId}`);
    }
    if (isSmallDevice) {
      setIsMenuToggled(false);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  const NavItem = ({ to, children }) => (
    <button
      onClick={() => scrollToSection(to)}
      className={`hover:text-[#C3AC5B] ${
        window.location.hash === `#${to}` ? 'text-[#C3AC5B]' : ''
      }`}
    >
      {children}
    </button>
  );

  return (
    <>
      <div className='capitalize bg-black text-[#FBF8F2] tracking-wider text-lg flex justify-between font-italiano items-center lg:text-2xl lg:px-8 px-2 py-2.5'>
        <h3>September 24, Pretoria East</h3>
        <h3>#AbeyWedsCarol</h3>
      </div>
      <h3 className=' text-4xl lg:text-5xl text-center my-4 title'>
        Carol & Abey
      </h3>

      {!isSmallDevice ? (
        <nav className='flex w-8/12 mx-auto items-center py-6 gap-14 justify-center text-lg font-title'>
          <NavItem to='home'>Home</NavItem>
          <NavItem to='story'>Our Story</NavItem>
          <NavItem to='schedule'>Schedule</NavItem>
          <NavItem to='accommodation'>Accommodation</NavItem>
          <NavItem to='gallery'>Gallery</NavItem>
          <NavItem to='registry'>Registry</NavItem>
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

      {isSmallDevice && isMenuToggled && (
        <div className='fixed bottom-0 right-0 z-40 h-full w-[300px] bg-black/75 drop-shadow-xl'>
          <div className=' flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <LiaTimesSolid className='h-6 w-6 text-gray-300' />
            </button>
          </div>
          <div className='flex flex-col items-center  text-center gap-4 text-base text-white/60 font-title uppercase'>
            <NavItem to='home'>Home</NavItem>
            <NavItem to='story'>Our Story</NavItem>
            <NavItem to='schedule'>Schedule</NavItem>
            <NavItem to='accommodation'>Accommodation</NavItem>
            <NavItem to='gallery'>Gallery</NavItem>
            <NavItem to='registry'>Registry</NavItem>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

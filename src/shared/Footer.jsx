import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='container-fluid Footer w-full h-auto py-5 text-base'>
      <div className='md:w-7/12 mx-auto w-full md:flex-row flex-col flex justify-between items-center'>
        <p className='copyright flex items-center'>
          &copy; 2024{' '}
          <a href='https://themanswedding.com/'>&nbsp;The MansWedding </a>
        </p>
        <p className='flex items-center gap-x-1 text-[#FBF8F2]'>
          Developed with <FaHeart className='mx-2' /> by{' '}
          <a
            href='https://muciraerick.netlify.app/'
            className='hover:text-red-400 duration-150'
            target='_blank'
            rel='noopener noreferrer'
          >
            Erick
          </a>
          and
          <a
            href='https://portfolio-ecru-five-97.vercel.app/'
            className='hover:text-red-400 duration-150'
            target='_blank'
            rel='noopener noreferrer'
          >
            Hlobi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

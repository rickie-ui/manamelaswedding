import MrPriceRegistryLink from '../components/MrPriceRegistryLink';
import Yuppiechef from '../components/Yuppiechef';

const Registry = ({ id }) => {
  return (
    <div
      className='container-fluid App text-[#171511] w-full h-full pb-5'
      id={id}
    >
      <h1
        className='flex justify-center text-5xl md:text-7xl pt-8 title uppercase font-bold
      '
      >
        Registry
      </h1>
      <h2 className='my-6 text-xl px-4 md:px-0 flex justify-center mx-auto md:w-7/12 w-full font-title'>
        Your presence is a valued gift to us! However, if you wish to gift us,
        we have compiled a registry for your convenience and made alternative
        gifting arrangements as per below. We deeply appreciate these, and other
        thoughtful gifts of your choice. Any voucher will be appreciated.
      </h2>
      <div className='content m-4'>
        <MrPriceRegistryLink />
        <Yuppiechef />
      </div>
    </div>
  );
};

export default Registry;

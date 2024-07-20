import MrPriceRegistryLink from '../components/MrPriceRegistryLink'; 
import Yuppiechef from '../components/Yuppiechef'; 

const App = () => {
  return (
    <>
    <div className="container-fluid App bg-black text-white w-full h-full pb-5">
      <h1 className='flex justify-center text-3xl font-sans font-medium pt-8 registry-heading'>Our Registry</h1>
      <h2 className="pt-4 text-2xl flex justify-center font-medium m-10 text-wrap">
      Your presence is a valued gift to us! However, if you wish to gift us, we have compiled a registry for your convenience and made alternative gifting arrangements as per below.
      We deeply appreciate these, and other thoughtful gifts of your choice. Any voucher will be appreciated.
      </h2>
      <div className='content m-4'>
        <MrPriceRegistryLink />
        <Yuppiechef />
      </div>
    </div>
    </>
  );
};

export default App;


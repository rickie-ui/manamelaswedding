import MrPriceRegistryLink from '../components/MrPriceRegistryLink'; 
import Yuppiechef from '../components/Yuppiechef'; 


const App = () => {
  return (
    <>
    <div className="container-fluid App bg-black text-white w-full h-full">
      <h1 className='flex justify-center text-2xl font-sans font-medium pt-8 registry-heading'>Welcome to Our Registry</h1>
      <p className="pt-4 text-xl flex justify-center font-medium m-10">
      Your presence is a valued gift to us! However, if you wish to gift us, we have compiled a registry for your convenience and made alternative gifting arrangements as per below.
      </p>
      <p className='pt-4 text-xl flex justify-center font-medium m-11'>
      We deeply appreciate these, and other thoughtful gifts of your choice.
      Any voucher will be appreciated.
      </p>
      <div className='content m-4'>
        <MrPriceRegistryLink />
        <Yuppiechef />
      </div>
    </div>
    </>
  );
};

export default App;

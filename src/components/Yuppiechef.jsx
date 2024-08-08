import yuppiechef from "../Images/yuppiechefbanner.jpg"


const MrPriceRegistryLink = () => {
  const registryUrl = "https://www.yuppiechef.com/registry.htm?action=view&orderid=7893952";

  return (
    <div className="registry-link flex justify-center">
      <a href={registryUrl} target="_blank" rel="noopener noreferrer">
        <img src={yuppiechef} alt="Yuppiechef Registry" className="w-full h-auto pt-8 pb-10 items-center" style={{ width: '800px', height: 'auto' }} />
      </a>
    </div>
  );
};

export default MrPriceRegistryLink;
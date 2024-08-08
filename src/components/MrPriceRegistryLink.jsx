import RegistryImage from "../Images/mrpricehomebanner.png"

const MrPriceRegistryLink = () => {
  const registryUrl = "https://www.mrphome.com/en_za/giftregistry/view/index/id/CMWEDD9452";

  return (
    <div className="registry-link flex justify-center">
      <a href={registryUrl} target="_blank" rel="noopener noreferrer">
        <img src={RegistryImage} alt="Mr Price Home Registry" className="w-full h-auto pt-8 pb-10 items-center" style={{ width: '800px', height: 'auto' }} />
      </a>
    </div>
  );
};

export default MrPriceRegistryLink;

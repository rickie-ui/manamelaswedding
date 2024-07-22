import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  // add images here
  const projectImages = [
    { id: 1, path: '/src/Images/hero.jpg' },
    { id: 2, path: '/src/Images/flower.jpg' },
    { id: 3, path: '/src/Images/f1.jpg' },
  ];

  const detailSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const stripSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="py-12 bg-[#222] font-['Josefin_Slab']">
      <h2 className='text-5xl text-center text-white mb-5 font-italiano'>
        Forever and Always
      </h2>
      <small className='block text-center font-title text-white text-lg opacity-50 mb-12'>
        Capturing timeless moments
        <br />
        of love and tradition.
      </small>
      <div className='relative py-12'>
        <div className='my-[150px] blur-[10px]'>
          <Slider {...stripSettings}>
            {projectImages.map((image) => (
              <div key={image.id} className='cursor-pointer'>
                <img
                  src={console.log(image.path)}
                  alt={`Project ${image.id}`}
                  className='max-w-full w-full h-auto'
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className='w-[768px] h-[451px] absolute inset-0 m-auto'>
          <div className='absolute left-0 right-0 w-[578px] h-[361px] mt-8 mx-auto z-10 bg-[#333] overflow-hidden'>
            <Slider {...detailSettings}>
              {projectImages.map((image) => (
                <div key={image.id}>
                  <img
                    src={image.path}
                    alt={`Project ${image.id}`}
                    className='max-w-full object-cover object-center w-full h-auto'
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div
            className='absolute w-[768px] h-[451px] bg-no-repeat'
            style={{ backgroundImage: "url('/Images/mrprice.png')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

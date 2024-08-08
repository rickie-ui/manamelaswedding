import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectImages = [
    {
      id: 1,
      path: 'https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80',
      title: 'Bunker',
    },
    {
      id: 2,
      path: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      title: 'Words Remain',
    },
    {
      id: 3,
      path: 'https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      title: 'Falling Out',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    focusOnSelect: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '10%',
        },
      },
    ],
  };

  return (
    <div
      className='w-full max-w-4xl mx-auto h-screen flex flex-col justify-center items-center p-4'
      id={id}
    >
      <h1 className='flex justify-center pt-8 title font-bold uppercase text-5xl md:text-7xl'>
        Gallery
      </h1>
      <div className="font-['Josefin_Slab']">
        <small className='block text-center font-title  text-black text-lg  mb-12'>
          Capturing timeless moments of love <br />
          and tradition.
        </small>
      </div>

      <div className='w-full relative mb-8'>
        <Slider {...settings}>
          {projectImages.map((image, index) => (
            <div key={image.id} className='px-2'>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 scale-100 blur-none'
                    : 'opacity-40 scale-75 blur-sm'
                }`}
              >
                <img
                  src={image.path}
                  alt={`Project ${image.id}`}
                  className='w-full h-96 object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;

const Home = ({ id }) => {
  return (
    <div className='w-full h-auto ' id={id}>
      {/* hero section */}
      <div className="bg-[url('Images/hero.jpg')] bg-cover relative bg-no-repeat lg:h-[600px] h-[350px]">
        <div className='font-italiano text-3xl text-[#FBF8F2] lg:text-5xl tracking-wider capitalize absolute lg:right-24 lg:top-32  top-52 right-5 z-30 opacity-80'>
          We`&apos;`re getting <br /> married!!
        </div>
        <span className='absolute inset-0 bg-black/40'></span>
      </div>
    </div>
  );
};

export default Home;

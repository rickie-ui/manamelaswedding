import YoutubeEmbed from '../components/YoutubeEmbed';

const Story = ({ id }) => {
  return (
    <div
      className='w-full h-auto md:pt-5 py-6  bg-[#FBF8F2] text-black'
      id={id}
    >
      <h1 className='flex justify-center pt-8 title font-bold uppercase text-5xl md:text-7xl'>
        Our Story
      </h1>
      <div className='container flex justify-center'>
        <div className='w-full h-auto  text-black'>
          <YoutubeEmbed embedId='KA_-rmowqa8' />
        </div>
      </div>
      <div className='Container-theme pt-10 pb-8 block justify-center'>
        <h2 className='flex justify-center pt-8 title font-bold uppercase text-5xl md:text-7xl sm:pb-4 sm:pt-8'>
          Dress Code
        </h2>
        <p className='md:w-7/12 w-full mx-auto my-1 px-4 md:px-0 md:my-4 text-xl font-title mt-8'>
          All black formal event(Black Tie). Ladies are encouraged to wear black
          formal dresses or 2-piece sets (formal pants are allowed). Gents are
          strictly required to wear a black suit, with a white shirt(tie is
          optional and if worn, must be black). Dress to impress, like paparazzi
          is going to snap you because its your event too! Kindly see link for
          inspiration.
        </p>
        <button className='btn-primary text-white  items-center bg-black hover:text-[#FBF8F2] self-start hover:bg-black/80 duration-150 inspiration-btn p-4 flex'>
          <a
            href='https://za.pinterest.com/ntshepim/the-mans-wedding/?invite_code=703b572d6f284815925b0a86bce53421&sender=200410389576424756'
            target='_blank'
          >
            Get Inspiration
          </a>
        </button>
      </div>
    </div>
  );
};

export default Story;

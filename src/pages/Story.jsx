import YoutubeEmbed from '../components/YoutubeEmbed';

const Story = () => {
  return (
    <div className='Container-fluid  w-full h-auto md:pt-5 bg-black text-white'>
      <h1 className='Heading text-4xl flex font-medium justify-center'>
        {' '}
        Our Story
      </h1>
      <div className='container flex justify-center'>
        <div className='w-full h-auto bg-black text-white'>
          <YoutubeEmbed embedId='KA_-rmowqa8' />
        </div>
      </div>
      <div className='Container-theme pt-10 pb-8 block justify-center'>
        <h2 className='Heading  text-4xl pt-10 flex justify-center sm:pb-4 sm:pt-8'>
          {' '}
          Theme
        </h2>
        <p className='md:w-7/12 w-full mx-auto text-3rd my-1 px-4 md:px-0 md:my-4 text-xl'>
          All black formal event(Black Tie). Ladies are encouraged to wear black
          formal dresses or 2-piece sets (formal pants are allowed). Gents are
          strictly required to wear a black suit, with a white shirt(tie is
          optional and if worn, must be black). Dress to impress, like paparazzi
          is going to snap you because its your event too! Kindly see link for
          inspiration.
        </p>
        <button className='btn btn-primary inspiration-btn  text-white rounded-md p-4 flex  items-center  hover:bg-white hover:text-black hover:text-bold translate-x-2'>
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

const Story = () => {
  return (
     <div className="Container w-full h-auto pt-5 pb-5 bg-black text-white">
      <h1 className="Heading text-4xl flex justify-center">
      Our Story
      </h1>
      <div className="Container-theme pt-20 pb-10 block justify-center">
        <h2 className="Heading 2xl pt-10 flex justify-center text-3xl"> Theme</h2>
        <p className="pt-10 md:text-2xl flex p-20 pb-5  " > 
        All black formal event(Black Tie). Ladies are encouraged to wear black formal 
        dresses or 2-piece sets (formal pants are allowed). Gents are strictly required
        to wear a black suit, with a white shirt(tie is optional and if worn, must be black).
        Dress to impress, like paparazzi is going to snap you because its your event too! Kindly see link for inspiration.
        </p>
        <button className="btn btn-primary text-white rounded-md p-4 flex ml-40 items-center  hover:bg-white hover:text-black hover:text-bold translate-x-2">
          <a href="https://za.pinterest.com/ntshepim/the-mans-wedding/?invite_code=703b572d6f284815925b0a86bce53421&sender=200410389576424756">
          Get Inspiration
          </a>
        </button>
      </div>
    </div>
  )
  ;
};

export default Story;

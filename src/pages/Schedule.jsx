
const Schedule = () => {
    return (
      <div className="container w-full h-auto md:mx-auto bg-gray schedule-container p-10">
        <h1 className=" flex justify-center mb-10 text-4xl Heading">Schedule</h1>
        <p className="text-xl m-10 items-centered">
        Kindly arrive at 13:00 pm for your convenience, a chance to know fellow guests,
        take pictures and to be seated as the wedding talk will start at 14:00 pm and the 
        whole event will end at18:00 pm. Programme will be shared electronically before or on the day.
        </p>
        <p className=" text-xl m-10 items-centered">
        There’s an open bar at the venue for your preferred alcoholic beverages.
        It’s a no cash facility, only card swipes.
        The whole programme will be at Rosemary Hill, The Greenhouse Café. Click link to get directions.</p>
        <button className="btn btn-primary bg-black text-white rounded-md p-4 items-center text-bold ml-40 hover:bg-white hover:text-black hover:text-bold translate-x-2">
        <a href="https://www.rosemaryhill.co.za/accommodation/" target="_blank">
        Get Directions
        </a>
        </button>
        <div className="more-info ml-10">
        <p className="text-xl pt-10">
        For more information, kindly contact Wedding Coordinator
        </p>
        <p className="contact-info text-xl">
        <span className="text-xl  pr-1">
          Bell Mpebe : 
         </span>
           072 581 2840
        </p>
        </div>
      </div>
    )
}
export default Schedule;
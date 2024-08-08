import Timeline from '../components/Timeline';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Schedule = ({id}) => {
  return (
    <div
      className='container-fluid w-full py-6 h-auto bg-[#FBF8F2] text-black font-medium '
      id={id}
    >
      <div className='md:w-7/12 px-4 w-full md:px-0 mx-auto bg-[#FBF8F2]'>
        <h1 className='flex justify-center pt-8 title font-bold uppercase text-5xl md:text-7xl'>
          Schedule
        </h1>
        <p className='text-xl pb-8 pt-8 font-title'>
          Kindly arrive at 13:00 pm for your convenience, a chance to know
          fellow guests, take pictures and to be seated as the wedding talk will
          start at 14:00 pm and the whole event will end at 18:00 pm. Programme
          will be shared electronically before or on the day.
        </p>
        <p className='text-xl  pb-5 font-title'>
          There’s an open bar at the venue for your preferred alcoholic
          beverages. It’s a no cash facility, only card swipes. The whole
          programme will be at Rosemary Hill, The Greenhouse Café. Click link to
          get directions.
        </p>
        <button className='btn-primary text-white  items-center bg-black hover:text-[#FBF8F2] self-start hover:bg-black/80 duration-150 px-44  d-flex  justify-center'>
          <a
            href='https://www.rosemaryhill.co.za/accommodation/'
            target='_blank'
          >
            Get Directions
          </a>
        </button>
        <Timeline />
        <div className='more-info text-3rd font-title'>
          <p className='text-xl pt-6'>
            For more information, kindly contact Wedding Coordinator
          </p>

          <div className=' font-title flex justify-start contact-info text-black text-xl pt-3'>
            <PersonOutlinedIcon/>
            &nbsp;
            <p className=' text-xl'>Bell Mpebe : 072 581 2840</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Schedule;

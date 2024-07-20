const Accommodation = () => {
  return (
    <div className='Acc h-auto pb-10 md:w-7/12 w-full mx-auto'>
      <h1 className='flex justify-center pt-8 Heading text-4xl pb-6 text-white'>
        Accommodation
      </h1>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-2 py-10 mb-8 space-y-6 md:space-y-0 pl-4 md:pl-0'>
        <div className='flex flex-col gap-y-3'>
          <p className='text-xl color-white text-white'>
            The wedding venue has accommodation that's dependent on
            availability. Click link to have a view and book.
          </p>
          <button className='btn-primary text-white rounded-md items-center hover:bg-white hover:text-black self-start'>
            <a
              href='https://www.rosemaryhill.co.za/accommodation/'
              target='_blank'
            >
              Book Accomodation
            </a>
          </button>
        </div>
        <div className='flex flex-col gap-y-4'>
          <p className='text-xl color-white text-white'>
            Alternatively, you can book on Airbnb at any place near or
            surrounding the venue.Click link to have a view and book.
          </p>
          <button className='btn-primary self-start  bg-black text-white rounded-md items-center hover:bg-white hover:text-black'>
            <a
              href='https://www.airbnb.co.za/s/Equestria--Gauteng--South-Africa/homes?tab_id=home_tab&refinement_paths%255B%255D=/homes&flexible_trip_lengths%255B%255D=one_week&monthly_start_date=2024-07-01&monthly_length=3&monthly_end_date=2024-10-01&price_filter_input_type=0&channel=EXPLORE&query=Equestria,%2520Gauteng&place_id=ChIJ_QZZh1xelR4RgLzeTCF2UaY&location_bb=wc34+EHi1q7BzjqKQeKSZw==&date_picker_type=calendar&checkin=2024-09-24&checkout=2024-09-25&source=structured_search_input_header&search_type=autocomplete_click'
              target='_blank'
            >
              Book Accomodation
            </a>
          </button>
        </div>
      </div>
      <p className='text-xl text-white pl-4 md:pl-0'>
        Kindly arrange for personal transport as there's no public transport
        available to and from the venue. There's a tollagte at N4(Donkerhoek
        Boschkop),as you off-ramp into the dirt road leading to the farm. Kindly
        ensure you have cash or card that swipes or taps, It's about R20.
      </p>
    </div>
  );
};

export default Accommodation;

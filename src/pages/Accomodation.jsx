
const Accommodation = () => {
    return (
        <>
        <div className="container-fluid Acc w-full h-auto pb-10">
        <h1 className="flex justify-center pt-8 Heading text-4xl pb-6 text-white">Accommodation</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mb-8 items-center ">
        <div className="grid-item   justify-center pl-10"> 
        <p className="text-2xl color-white pb-6 text-white md:p-4 sm:p-10">
        The wedding venue has accommodation that's dependent on availability. Click link to have a view and book.
        </p>
        <button className="btn btn-primary btn-accom text-white rounded-md p-4 items-center md:ml-40  hover:bg-white hover:text-black">
        <a href="https://www.rosemaryhill.co.za/accommodation/" target="_blank">
        Book Accomodation
        </a>
        </button>
        </div>
        <div className="grid-item 2nd-grid  md:pt-0 sm:pt-10 "> 
        <p className="text-2xl color-white pb-6 text-white md:p-6 alt-para">
        Alternatively, you can book on Airbnb at any place near or surrounding the venue.
        </p>
        <button className="btn btn-primary bg-black btn-acc text-white rounded-md p-4 items-center text-bold md:ml-40  hover:bg-white hover:text-black hover:text-bold translate-x-2">
        <a href="https://www.airbnb.co.za/s/Equestria--Gauteng--South-Africa/homes?tab_id=home_tab&refinement_paths%255B%255D=/homes&flexible_trip_lengths%255B%255D=one_week&monthly_start_date=2024-07-01&monthly_length=3&monthly_end_date=2024-10-01&price_filter_input_type=0&channel=EXPLORE&query=Equestria,%2520Gauteng&place_id=ChIJ_QZZh1xelR4RgLzeTCF2UaY&location_bb=wc34+EHi1q7BzjqKQeKSZw==&date_picker_type=calendar&checkin=2024-09-24&checkout=2024-09-25&source=structured_search_input_header&search_type=autocomplete_click" target="_blank">
          Book Accomodation
        </a>
      </button>
    </div>
  </div>
        <p className="text-2xl flex items-center pl-8 md:pt-6 sm: text-white">Kindly arrange for personal transport as there's no public transport available to and from the venue.
           There's a tollagte at N4(Donkerhoek Boschkop),as you off-ramp into the dirt road leading to the farm.
           Kindly ensure you have cash or card  that swipes or taps, It's about R20.
        </p>
        </div>
        </>
    )
}

export default Accommodation;
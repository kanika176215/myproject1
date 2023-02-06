
import itinerary from './Logo/itinerary.svg';
import hotel from "./Logo/hotel.svg";
import car from "./Logo/car.svg";
import flight from "./Logo/flight.svg";
import verified from "./Logo/verified.svg";
import cross from "./Logo/cross.svg";
import luggage from "./Logo/luggage.svg";
import important from "./Logo/important.svg";
import about from "./Logo/about.svg";
import location from "./Logo/location.svg";

import faq from "./Logo/faq.svg";
import cancel from "./Logo/cancel.svg";
import review from "./Logo/review.svg";







const Page3 = () => {
    return (


        
    <div className="flex  space-x-6  h-auto w-auto bg-red-20 items-center  pb-2 overflow-x-scroll scroll-m-1 border-b-[1px] ">
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative " ><img src={itinerary} /><p> </p>Itinerary </button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" > <img src={flight} /><p> </p>Flight</button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" ><img src={hotel}/> <p> </p>Hotels</button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" > <img src={car} /><p> </p>Transportsize</button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" ><img src={verified} /><p> </p>Inclusions</button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" ><img src={cross} /><p> </p>Exclusion</button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" ><img src={luggage} /><p> </p>Things_to_pack </button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" ><img src={important} /><p> </p> Important</button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" ><img src={about} /><p> </p> About </button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" ><img src={location} /><p> </p> Pick_up_location</button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" > <img src={cancel} /><p> </p>Cancelation_Policy  </button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" > <img src={review} /><p> </p>Reviews  </button>
                <button className="pl-8 pr-8 mr-4 ml-4 h-9 w-auto space-x-1 text-center  items-center justify-center flex bg-white hover:bg-gray-100 text-gray-800 font-semibold border-[1px] border-black    rounded shadow py-2 px-4 relative" > <img src={faq} /><p> </p>FAQ's  </button>
                
    </div>
    

        


    );
}




export default Page3;
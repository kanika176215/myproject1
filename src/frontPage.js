
import './App.css';
import React from 'react';
import './App.css';
import car from "./Logo/car.svg";


import star from "./Logo/star.svg"
import search from "./Logo/search.svg";
import menu4 from "./Logo/menu4.svg";
import heart from "./Logo/heart.svg";

import cart from "./Logo/cart.svg";
import arrowdown from "./Logo/arrowdown.svg";
import share from "./Logo/share.svg";
import location from "./Logo/location.svg";

import clock from "./Logo/clock.svg";
import Slide1 from './Slide1';
import Slide2 from './slide2';

import Change from './hotel';



const Frontpage = () => {
  return (



    <div className="bg-[url('/images/top.jpg')] bg-cover bg center w-screen   h-[400px] relative "  >
      <div className=' opacity-800 h-[150px] w-400 bg-gradient-to-b  brightness-300 overflow-x-hidden  from-black to-transparent   '>
        <div className=' opacity-800 h-[400px] w-400 bg-gradient-to- from-black to-transparent overflow-x-hidden  '>





          <div className=' w-[100%] absolute text-white bg-blue h-16 bg-orange-4'>
            <div className='flex absolute w-[40%] h-[45%] bg-r left-0 text-[17px] top-4 space-x-1 bg-red-4 mx-2 font-Roboto'>
              <img src={menu4} />
<<<<<<< HEAD
              <p></p>Shimla one two
=======

            

>>>>>>> 22a1bcb7a35c9250cfecfae7af6b2abdba22d79a
              <img src={arrowdown} />
            </div>




            <div className="flex space-x-4 h-5 justify-center right-0 top-4 absolute bg-yellow-5 w-40  bg-green-3   ">
              <img src={search} />
              <img src={heart} />

              <img src={share} />
              <img src={cart} />
            </div>

          </div>



          <div className=' bg-pink-6 w-screen h-28  absolute bottom-0 bg-yellow-5 font-Roboto bg-gradient-to-t from-black to-transparent flex'>



            <div className='w-[100%] h-auto  bg-red-5 bg-red-6'>



              <div className='bg-orange-4 h-auto  w-screen  text-white text-[12px] mx-2 my-0 bottom-4 absolute bg-gradient-to-t '>

                <div className='flex font-Roboto font-bold leading-9'>
                  <img src={clock} /><p> </p><p></p> 6 Days/5 Nights
                </div>


                <div className='text-[25px] w-[60%] h-auto bg-red- leading-[26px]'>
                  <h1>
                    Manali is very good place
                  </h1>
                </div>


              </div>
            </div>

            <div className='h-10  w-[30%] flex text-white text-[25px] bg-purple-90 justify-center   bg-red-4 float-right pt-4   '>
              <img src={arrowdown} />
            </div>

          </div>












        </div>
      </div>


    </div>



  );
}
export default Frontpage;

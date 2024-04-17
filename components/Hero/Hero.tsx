"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Arrow_down from "@/app/assets/arrow_down.svg";
import Arrow_right from "@/app/assets/arrow_right.svg";
import Test from "@/app/assets/test1.png";
import ClassType from "../Classtype/Classtype";
import PassengerType from "../Passengertype/Passengertype";
import TripType from "../Triptype/Triptype";
import SearchHistory from "../SearchHistory/SearchHistory";

const Hero = () => {
  const [openDropdownType, setOpenDropdownType] = useState<string | null>(null);
  const [tripType, setTripType] = useState<string>("One Way");
  const [classType, setClassType] = useState("First class");
  // const [noPeople, setNoPeople] = useState("passenger");
  // const [, setWindowSize] = useState(window.innerWidth);

  // const handleResize = () => {
  //   // Client-side-only code
  //   setWindowSize(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="h-full w-full relative mt-6 ">
      <Image
        src={Test}
        alt="Airpocket hero image"
        className="w-full h-[37rem] min-[576px]:h-[22rem] md:h-[30rem] rounded-lg mx-auto max-w-screen-2xl "
      />
      <div className="absolute top-[3%] sm:top-[4%] md:top-[15%] w-full px-6 md:px-14">
        <h1 className="capitalize text-white font-bold tracking-widest text-center text-sm sm:text-lg  lg:text-3xl">
          Embark on a journey to secure the ideal gateway
        </h1>

        <div className="bg-white shadow-sm md:shadow-lg rounded-md mt-4 lg:mt-6 px-6 py-6   w-full mx-auto">
          <form className="w-full">
            <div className="grid grid-cols-1 min-[576px]:grid-cols-2 gap-8 w-full sm:w-fit">
              <div
                onClick={() => setOpenDropdownType("trip")}
                className=" rounded-md gap-2 relative sm:w-fit "
              >
                <div className="flex items-center justify-between sm:justify-center bg-[#afdeeb] bg-opacity-40 px-1 py-1 md:px-6 md:py-3 rounded-md w-full sm:w-fit relative">
                  {tripType}
                  <Image src={Arrow_down} alt="Arrow_down" />
                </div>
                <div className="absolute top-[2.4rem] z-10 w-fit bg-white shadow-md rounded-sm ">
                  {openDropdownType === "trip" && (
                    <TripType tripType={tripType} setTripType={setTripType} />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-8 sm:ml-[-4rem] lg:ml-[-6rem] ">
                <div
                  onClick={() => setOpenDropdownType("passenger")}
                  className="w-full sm:w-fit  relative  flex items-center justify-center bg-[#afdeeb] bg-opacity-40 px-1 py-1 md:px-6 md:py-3 rounded-md gap-2 text-xs sm:text-base"
                >
                  Passenger <Image src={Arrow_down} alt="Arrow_down" />
                  <div className="absolute top-[2.4rem] left-0 w-fit  bg-white shadow-md rounded-md ">
                    {openDropdownType === "passenger" && <PassengerType />}
                  </div>
                </div>
                <div
                  onClick={() => setOpenDropdownType("class")}
                  className=" w-full sm:w-fit relative flex items-center justify-center bg-[#afdeeb]  bg-opacity-40 px-1 py-1 md:px-6 md:py-3 rounded-md gap-2 text-xs sm:text-base whitespace-nowrap"
                >
                  {classType} <Image src={Arrow_down} alt="Arrow_down" />
                  <div className="absolute top-[2.4rem] w-fit bg-white shadow-md rounded-sm ">
                    {openDropdownType === "class" && (
                      <ClassType classType={classType} setClassType={setClassType} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 min-[576px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-8 mt-6 flex-wrap">
              <div className="flex flex-col ">
                <label className="text-sm md:text-base">Departure</label>
                <input
                  type="text"
                  placeholder="Wher are you coming from "
                  className="bg-[#283841] bg-opacity-10 p-2 rounded-md border-none outline-none"
                />
              </div>
              {/* <div className="flex items-end h-16 w-[2px] bg-[#283841] bg-opacity-10" /> */}
              <div className="flex flex-col ">
                <label className="text-sm md:text-base">Destination</label>
                <input
                  type="text"
                  placeholder="Wher are you going "
                  className="bg-[#283841] bg-opacity-10 p-2 rounded-md border-none outline-none  "
                />
              </div>
              {/* <div className="flex items-end h-16 w-[2px] bg-[#283841] bg-opacity-10" /> */}

              <div className="flex flex-col ">
                <label className="text-sm md:text-base">Check in</label>
                <input
                  type="date"
                  placeholder="choose date"
                  className="bg-[#283841] bg-opacity-10 p-2 h-[40px] rounded-md border-none outline-none"
                />
              </div>
              {/* <div className="flex items-end h-16 w-[2px] bg-[#283841] bg-opacity-10" /> */}

              <div className="flex flex-col">
                <label className="text-sm md:text-base">Check out</label>
                <input
                  type="date"
                  className="bg-[#283841] bg-opacity-10 p-2 h-[40px] rounded-md border-none outline-none"
                />
              </div>
              <div className="flex items-end text-white rounded-md ">
                <button className="flex items-center sm:items-start gap-4 px-3 py-2 w-full sm:w-fit bg-[#03C3F8] rounded-md whitespace-nowrap text-sm">
                  Search Flights
                  <Image src={Arrow_right} alt="arrow_right" className="flex items-center" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <SearchHistory />
    </div>
  );
};

export default Hero;

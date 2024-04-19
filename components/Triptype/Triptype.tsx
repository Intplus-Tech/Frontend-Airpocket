import { PassengersProps } from "@/types/type";
import React from "react";

type TriptypProps = {
  tripType: string;
  setTripType: React.Dispatch<React.SetStateAction<string>>;
  setOpenDropdownType: React.Dispatch<React.SetStateAction<string | null>>;
};

const TRIP_TYPES: PassengersProps = [
  { id: "1", text: "One Way", value: "ONEWAY" },
  { id: "2", text: "Round Trip", value: "ROUNDTRIP" },
];

const TripType = ({
  tripType,
  setTripType,
  setOpenDropdownType,
}: TriptypProps) => {
  const selectTripType = (type: string) => {
    setTripType(type);
  };

  return (
    <div className="w-full z-20 ">
      {TRIP_TYPES.map(({ id, text, value }) => (
        <p
          onClick={() => {
            selectTripType(text), setOpenDropdownType(null);
          }}
          className="py-2 px-4 text-sm whitespace-nowrap hover:bg-gray-50 cursor-pointer"
          key={id}
        >
          {text}
        </p>
      ))}

      {/* <p
        onClick={() => setOpenDropdownType(null)}
        className={`hover:bg-gray-50 px-4 py-2 text-sm sm:text-base cursor-pointer ${
          tripType === "One Way" && "bg-gray-50"
        }`}
      >
        One Way
      </p>
      <p
        onClick={() => {
          selectTripType("Round Trip"), setOpenDropdownType(null);
        }}
        className={`hover:bg-gray-50 px-4 py-2 text-sm sm:text-base cursor-pointer ${
          tripType === "Round Trip" && "bg-gray-50"
        }`}
      >
        Round Trip
      </p> */}
    </div>
  );
};

export default TripType;

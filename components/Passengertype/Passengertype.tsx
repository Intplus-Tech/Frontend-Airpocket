import React, { useState } from "react";
import { PassengersProps } from "@/types/type";
import { Minus, Plus } from "lucide-react";

type Props = {
  setPassengers: React.Dispatch<React.SetStateAction<string>>;
};

const passengers: PassengersProps = [
  { id: "adult", text: "Adults(13 and above)" },
  { id: "children", text: "Children (Age 2-12)" },
  { id: "infants", text: "Infants (under 2)" },
];
const PassengerType = ({ setPassengers }: Props) => {
  const [passengerNumber, setPassengerNumber] = useState<{
    [key: string]: number;
  }>({
    adult: 0,
    children: 0,
    infants: 0,
  });

  const handleIncrease = (id: string) => {
    setPassengerNumber((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const handleDecrease = (id: string) => {
    if (passengerNumber[id] > 0) {
      setPassengerNumber((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] - 1,
      }));
    }
  };

  return (
    <div className=" py-2 pr-2 z-20">
      {passengers.map(({ id, text }) => (
        <div
          key={id}
          className="w-full flex gap-3 justify-between items-center"
        >
          <p
            className="py-2 px-4 text-sm whitespace-nowrap hover:bg-gray-50"
            key={id}
          >
            {text}
          </p>
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => handleDecrease(id)}
              className="rounded-[50%] border  p-[5px]"
            >
              <Minus size={12} />
            </button>
            {passengerNumber[id]}
            <button
              onClick={() => handleIncrease(id)}
              type="button"
              className="rounded-[50%] border p-[5px]"
            >
              <Plus size={12} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PassengerType;

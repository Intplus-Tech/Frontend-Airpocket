import { X } from "lucide-react";
import Pricerange from "../PriceRange/PriceRange";
import Airline from "../Airline/Airline";
import Stops from "../Stops/Stops";
import AirportSelect from "../CountrySelect/CountrySelect";

const Filters = () => {
  return (
    <section className="bg-[#EDEDED] bg-opacity-40 min-h-[100vh] flex items-start  justify-center px-8 rounded-md">
      <div className="mt-10 w-[294px]">
        <div className=" flex justify-between">
          <h1>Filters</h1>

          <X className="text-[#1B96D6]" />
        </div>
        <div className=" mt-8">
          <div>
            <Pricerange />
          </div>
          <div>
            <Airline />
          </div>
          <div>
            <Stops />
          </div>
          <div>
            <AirportSelect />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;

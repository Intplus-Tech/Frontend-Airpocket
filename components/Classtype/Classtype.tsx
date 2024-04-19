import { PassengersProps } from "@/types/type";

type ClassTypProps = {
  classType: string;
  setClassType?: React.Dispatch<React.SetStateAction<string>>;
};

const ClassType = ({ setClassType }: ClassTypProps) => {
  const passengers: PassengersProps = [
    { id: "1", text: "Economy", value: "ECONOMY" },
    { id: "2", text: "Economy Premium", value: "ECONONMYPREMIUM" },
    { id: "3", text: "Business Class", value: "BUSINESSCLASS" },
    { id: "4", text: "First Class", value: "FIRSTCLASS" },
  ];

  const selectClassType = (type: string) => {
    setClassType?.(type);
  };

  return (
    <div className="text-lg z-20 ">
      {passengers.map(({ id, text }) => (
        <p
          onClick={() => selectClassType(text)}
          className="py-2 px-4 text-sm whitespace-nowrap hover:bg-gray-50 cursor-pointer"
          key={id}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default ClassType;

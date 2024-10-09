// "use client";
// import { useEffect  } from "react";

const EkipCard = ({ person }) => {
  return (
    <div className=" border-2 border-dark-red   transition-all duration-1000 rounded-lg  pb-4 shadow-md shadow-dark-red group  relative  transform   ">
      <img
        src="/images/hovershapes.png"
        alt=""
        className="absolute w-full h-full z-30   opacity-0 group-hover:opacity-30  group-hover:scale-125 transition-all duration-1000"
      />
      <div className="flex flex-col gap-9  h-full justify-between">
        <div className="flex-1 overflow-hidden">
          <img
            src={person?.image}
            alt="egitmen"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 rounded-t-lg object-top"
          />
        </div>

        <div className=" flex-1 px-5 flex flex-col gap-5">
          <p className=" font-bold text-xl poppins-font ">{person.fullName}</p>
          <span className="bg-gray-500 h-0.5 w-full "></span>
          <p className="text-gray-600    text-md poppins-font">
            {person.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EkipCard;

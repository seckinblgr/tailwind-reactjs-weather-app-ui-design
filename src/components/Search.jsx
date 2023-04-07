import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Search() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center ">
        <input
          type="text"
          placeholder=" Search "
          className="text-xl font-light border-b p-2 text-white w-full shadow-xl focus:outline-none text-center capitalize  bg-transparent"
        />
        <UilSearch
          size={25}
          className="text-white  ml-6 cursor-pointer transition ease-out hover:scale-150"
        />
      </div>

      <div className="flex flex-row w-1/4  mx-auto items-center justify-center">
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer mx-auto transition ease-out hover:scale-150"
        />
      </div>
    </div>
  );
}

export default Search;

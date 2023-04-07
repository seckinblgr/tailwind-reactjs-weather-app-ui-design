import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex  text-center items-center justify-center my-6">
        <p className="text-white flex flex-col text-lg  sm:flex-row font-extralight">
          <p>Tuesday 28 May 2023 </p> <p>15 :30 PM </p>
        </p>
      </div>

      <div className="flex  items-center justify-center my-3">
        <p className="text-white text-3xl font-medium"> İstanbul</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;

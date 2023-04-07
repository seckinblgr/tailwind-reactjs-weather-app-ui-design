import React from "react";

function DailyForecast() {
  return (
    <div>
      <div className=" items-center justify-start mt-6 mb-4">
        <p className="text-white font-medium uppercase ">Daily Forecast</p>
      </div>
      <hr className="my-2 mb-6" />
      <div className="flex flex-col sm:flex-row  justify-between items-center mb-6 text-white">
        <div className="flex flex-col items-center justify-center my-3">
          <p className="font-light text-sm ">Wednesday</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
          />
          <p className=" font-medium mb-3">23°</p>
          <hr className="block  sm:hidden   w-40" />
        </div>
        <div className="flex flex-col items-center justify-center my-3">
          <p className="font-light text-sm ">Wednesday</p>

          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
          />
          <p className=" font-medium mb-3">23°</p>
          <hr className="block  sm:hidden   w-40" />
        </div>
        <div className="flex flex-col items-center justify-center my-3">
          <p className="font-light text-sm ">Wednesday</p>

          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
          />
          <p className=" font-medium mb-3">23°</p>
          <hr className="block  sm:hidden   w-40" />
        </div>
        <div className="flex flex-col items-center justify-center my-3">
          <p className="font-light text-sm ">Wednesday</p>

          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
          />
          <p className=" font-medium mb-3">23°</p>
          <hr className="block  sm:hidden   w-40" />
        </div>
        <div className="flex flex-col items-center justify-center my-3">
          <p className="font-light text-sm ">Wednesday</p>

          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
          />
          <p className=" font-medium mb-3">23°</p>
          <hr className="block  sm:hidden   w-40" />
        </div>
      </div>
    </div>
  );
}

export default DailyForecast;

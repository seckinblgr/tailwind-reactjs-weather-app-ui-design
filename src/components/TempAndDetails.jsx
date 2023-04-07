import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";

function TempAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center  py-2  text-cyan-100">
        <p>Cloudy</p>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          className="w-20"
          alt="forecast"
        />
        <p className="text-6xl my-3 mb-3">13°</p>
        <div className="flex flex-col space-y-2 sm:flex-col">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real Fell :<span className="font-medium ml-1">10°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidty :<span className="font-medium ml-1">65%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind :<span className="font-medium ml-1">32km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center  space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light flex ">
          Rise: <span className="font-medium ml-2">06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-2">07:45 PM</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp />
        <p className="font-light">
          Max : <span className="font-medium ml-2">19°</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown />
        <p className="font-light">
          Min : <span className="font-medium ml-2">8°</span>
        </p>
      </div>
    </div>
  );
}

export default TempAndDetails;

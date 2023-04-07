import "./index.css";
import Search from "./components/Search";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocatin";
import DailyForecast from "./components/DailyForecast";

function App() {
  return (
    <div className="app mx-auto max-w-screen-md sm:mt-8 justify-center items-center rounded-xl  py-6 px-32 bg-gradient-to-br from-cyan-900 to-blue-900 h-fit shawdow-xl shadow-gray-400">
      <Search />
      <TimeAndLocation />
      <TempAndDetails />
      <DailyForecast title="Daily" />
    </div>
  );
}

export default App;

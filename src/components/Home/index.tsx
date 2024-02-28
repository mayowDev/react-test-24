import { useState } from "react";
import BTCIcon from "../../assets/btcicon.svg";
import arrowdown from "../../assets/arrowdown.svg";
import HighestPriceIcon from "../../assets/greencircle.svg";
import LowestPriceIcon from "../../assets/redcircle.svg";
import ArrowUp from "../../assets/arrowup.svg";
import Chart from "../Chart";
import BuySellBTC from "../BuySellBtc";
import Card from "../Card";

import { oneDayData } from "../../oneDayaData";
import { oneWeekData } from "../../oneWeekData";
import { oneMonthData } from "../../oneMonthData";
import { oneYearData } from "../../oneYearData";
import "./style.scss";

type ITabOptions = "day" | "week" | "month" | "year";

interface IFilterProps {
  activeTab: ITabOptions;
  setActiveTab: React.Dispatch<React.SetStateAction<ITabOptions>>;
}
const GraphFilters = ({ activeTab, setActiveTab }: IFilterProps) => {
  return (
    <ul className="graph-filter">
      <li
        className={activeTab == "day" ? "active" : ""}
        onClick={() => setActiveTab("day")}
      >
        Day
      </li>
      <li
        className={activeTab == "week" ? "active" : ""}
        onClick={() => setActiveTab("week")}
      >
        Week
      </li>
      <li
        className={activeTab == "month" ? "active" : ""}
        onClick={() => setActiveTab("month")}
      >
        Month
      </li>
      <li
        className={activeTab == "year" ? "active" : ""}
        onClick={() => setActiveTab("year")}
      >
        Year
      </li>
    </ul>
  );
};
const Home = () => {
  const [showGraph, setShowGraph] = useState(false);
  const [activeTab, setActiveTab] = useState<ITabOptions>("week");
  const handleGraphVisibility = () => {
    setShowGraph(!showGraph);
  };

  const data =
    activeTab == "day"
      ? oneDayData
      : activeTab == "week"
      ? oneWeekData
      : activeTab == "month"
      ? oneMonthData
      : oneYearData;

  const priceHistory = data.history;
  const HighestBtcPrice = Math.max(...priceHistory.map((o) => Number(o.BTC)));
  const LowestBtcPrice = Math.min(...priceHistory.map((o) => Number(o.BTC)));

  return (
    <>
      <section className="home">
        <div className="row">
          <div className="btc">
            <img src={BTCIcon} alt="btc-icon" />
            <span>Bitcoin</span>
          </div>
          <p>BTC</p>
        </div>
        <div className="row balance">
          <h3>3.529020 BTC</h3>
        </div>
        <div className="row money-changes">
          <span>$19.153 USD</span>
          <span className="changes">{data?.change}%</span>
        </div>
        <div className="row graph">
          <button onClick={handleGraphVisibility}>
            <img src={showGraph ? ArrowUp : arrowdown} alt="" />
          </button>
        </div>
      </section>
      {showGraph && (
        <GraphFilters activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      <Card className="parent-container" width={"inherit"} height={"inherit"}>
        <Card className="indicators-container" width={"inherit"} height={30}>
          <div>
            <img src={LowestPriceIcon} alt="lowest-price" />
            <p className="lowest-btc">
              Lowest: ${LowestBtcPrice.toLocaleString()}{" "}
            </p>
          </div>
          <div>
            <img src={HighestPriceIcon} alt="highest-price" />
            <p className="highest-btc">
              Highest: ${HighestBtcPrice.toLocaleString()}
            </p>
          </div>
        </Card>
        <Chart data={data.history} height={showGraph ? 80 : 90} />
      </Card>

      {showGraph && <BuySellBTC />}
    </>
  );
};

export default Home;

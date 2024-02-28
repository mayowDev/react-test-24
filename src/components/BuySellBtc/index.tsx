import Card from "../Card";
import BuyBtcIcon from "../../assets/buybtc.svg";
import SellBtc from "../../assets/sellbtc.svg";
import "./style.scss";

const BuySellBTC = () => {
  return (
    <section className="buy-sell">
      <Card width={300} height={100}>
        <img src={BuyBtcIcon} alt="buy-btc" />

        <p className="buy-btc">Buy BTC</p>
      </Card>
      <Card width={300} height={100}>
        <img src={SellBtc} alt="sell-btc" />
        <p className="sell-btc">Sell BTC</p>
      </Card>
    </section>
  );
};

export default BuySellBTC;

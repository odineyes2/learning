import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); // 디펜던시가 없으면 최초 렌더링 시에만 실행
  return (
    <div>
      <h1>Coin Tracker ({coins.length})</h1>
      {loading ? "Loading..." : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name}({coin.symbol}) : {coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Coin;

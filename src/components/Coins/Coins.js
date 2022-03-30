import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => setCoins(data));
  }, []);

  return (
    <div className="mx-auto font-mono px-6 py-10 max-w-7xl">
      <div className="mb-14">
        <p className="text-center text-3xl font-bold text-slate-900 my-2">
          Available Crypto Currencies
        </p>
        <p className="text-center text-2xl font-bold text-slate-900 my-2">
          Total Coins : {coins.length}
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {coins.map((coin) => ( <CoinCard coin={coin} key={coin.id}></CoinCard> ))}
      </div>
    </div>
  );
};

export default Coins;

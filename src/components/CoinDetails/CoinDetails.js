import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => response.json())
      .then((data) => setCoin(data));
  }, [id]);

  console.log(coin);
  return (
    <div className="h-[65vh] px-16 py-10 font-mono text-slate-900 max-w-7xl md:px-28 mx-auto">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl font-medium mb-2">General Info: </h1>
          <p className="text-xl">Coin name : {coin.name}</p>
          <p className="text-xl">Market Cap rank : {coin.market_cap_rank}</p>
          <p className="text-xl">Origin : {coin.country_origin ? coin.country_origin : "not available"}</p>
          <p className="text-xl">Categories : {coin.categories}</p>
        </div>
        <div className="order-1 lg:order-2">
          <img src={coin.image?.large} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;

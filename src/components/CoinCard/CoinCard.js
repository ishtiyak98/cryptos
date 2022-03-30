import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <div className="bg-white text-slate-900 p-5 rounded-2xl w-[280px] shadow-lg mx-auto">
      <Link to={`coin-details/${coin.id}`}>
        <div className="flex items-center">
          <div className="w-[70px] mr-5">
            <img src={coin.image} alt="" />
          </div>
          <div className="w-[150px]">
            <p className="font-bold">{coin.name}</p>
            <p className="text-slate-400">Symbol: {coin.symbol}</p>
            <p className="text-slate-400">
              Price: ${coin.current_price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;

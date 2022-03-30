import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 bg-slate-900 text-white py-1 px-16  md:flex justify-center items-center md:justify-between">
      <div className="font-mono font-bold text-3xl md:block my-3 hover:text-red-500">
        <Link to={"/"}>Cryptos</Link>
      </div>
      <div className="flex gap-12 text-xl font-mono my-3 ">
          <Link className="hover:text-red-500" to={"/"}>Home</Link>
          <Link className="hover:text-red-500" to={"/coins"}>Coins</Link>
          <Link className="hover:text-red-500" to={"/contact"}>Contact</Link>
          <Link className="hover:text-red-500" to={"/about"}>About</Link>
      </div>
    </div>
  );
};

export default Header;

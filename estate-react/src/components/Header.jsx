import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="bg-slate-300 shadow-lg p-4">
      <div>
        <form
          action=""
          className=" flex justify-between  flex-wrap bg-transparent"
        >
          <h1 className=" font-bold bg-stone-300">
            <span className="text-black"> Tsegay</span>
            <span className="text-slate-700">Estate</span>
          </h1>
          <div>
            <input
              type="text"
              placeholder="search..."
              className=" font-mono rounded-lg p-4 font-extrabold"
            />
            <button className="bg-blue-600 rounded-full ml-3 p-2">
              search
            </button>
          </div>
          <div className="flex justify-between gap-6">
            <div>
              <Link to={"/"}>Home</Link>
            </div>
            <div>
              {" "}
              <Link to={"/about"}>About Us</Link>
            </div>
            <div>
              {" "}
              <Link to="/signin">signin</Link>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

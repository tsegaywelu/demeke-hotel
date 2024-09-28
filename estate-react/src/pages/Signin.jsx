import React from "react";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex flex-col md:w-1/3 bg-slate-500 p-7 gap-8 justify-center align-middle mt-7"
      >
        <h1 className=" text-center">Sign in here!</h1>
        <input
          type="email"
          placeholder="email"
          className=" p-3 rounded-lg border"
        />
        <input
          type="password"
          placeholder="password"
          className=" p-3 rounded-lg border"
        />
        <button className="bg-white rounded-lg p-3">signin</button>
        <div>
          have no an account ?{" "}
          <Link to={"/signup"} className="bg-blue-400 rounded-lg p-3">
            Sign up here{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

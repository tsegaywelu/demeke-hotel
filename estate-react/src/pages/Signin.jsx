import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signinfailure,
  signinstart,
  signinsucess,
} from "../redux/user/UserSlice";
export const Signin = () => {
  const { loading, error } = useSelector((state) => state.user); //i am bringing the loading and error from store to use on this page
  const [FormData, setformdata] = useState({});

  const dispatch = useDispatch();

  const handleinput = (e) => {
    setformdata({
      ...FormData,
      [e.target.id]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signinstart());
      const response = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      const data = await response.json();

      if (data.success == false) {
        dispatch(signinfailure(data.message));
      }
      dispatch(signinsucess(data));
    } catch (error) {
      dispatch(signinfailure(error.message));
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handlesubmit}
        className="flex flex-col md:w-1/3 bg-slate-500 p-7 gap-8 justify-center align-middle mt-7"
      >
        <h1 className=" text-center">Sign in here!</h1>
        <input
          type="email"
          placeholder="email"
          className=" p-3 rounded-lg border"
          onChange={handleinput}
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className=" p-3 rounded-lg border"
          onChange={handleinput}
          id="password"
        />
        <button
          disabled={loading}
          className="bg-black text-white rounded-lg p-3 disabled:bg-red-900"
          type="submit"
        >
          {loading ? "loading....." : "signin"}
        </button>
        <div>
          have no an account ?{" "}
          <Link to={"/signup"} className="bg-blue-400 rounded-lg p-3">
            Sign up here{" "}
          </Link>
        </div>
        {error && <p className="text-red-800 font-semibold">{error}!</p>}
      </form>
    </div>
  );
};

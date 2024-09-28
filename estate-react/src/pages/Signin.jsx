import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signin = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [FormData, setformdata] = useState({});

  const handleinput = (e) => {
    setformdata({
      ...FormData,
      [e.target.id]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      const data = response.json();
      if (!response.ok) {
        const message = `Error: ${response.status} ${response.statusText}`;
        seterror(message); // Set error message from the response
        setloading(false);
        return;
      }
      console.log(data);

      setloading(false);
      seterror(null);
    } catch (error) {
      setloading(false);
      seterror(error);
    }
  };

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
          onClick={handlesubmit}
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

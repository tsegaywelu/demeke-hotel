import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [error, seteror] = useState(null);
  const [loading, setloading] = useState(false);
  const [formdata, setformdata] = useState({});
  const handleinput = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      console.log(data);

      if (data.success == false) {
        seteror(data.message);
        setloading(false);
        return;
      }
      seteror(null);
      setloading(false);
      navigate("/signin");
    } catch (error) {
      seteror(error.message);
      setloading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handlesubmit}
        className="flex flex-col md:w-1/3 bg-slate-500 p-7 gap-8 justify-center align-middle mt-7"
      >
        <h1 className=" text-center">Sign Up here!</h1>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 rounded-lg border"
          onChange={handleinput}
        />
        <input
          type="email"
          placeholder="email"
          className=" p-3 rounded-lg border"
          id="email"
          onChange={handleinput}
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
          className="bg-black text-white rounded-lg p-3   disabled:bg-red-900"
          type="submit"
        >
          {loading ? "loading......." : "sign Up"}
        </button>
        <div>
          have an account ?{" "}
          <Link to={"/signin"} className="bg-blue-400 rounded-lg p-3">
            loin here{" "}
          </Link>
        </div>
        <div>
          {error && <p className="text-red-900 font-semibold">{error}!</p>}
        </div>
      </form>
    </div>
  );
};

export default Signup;

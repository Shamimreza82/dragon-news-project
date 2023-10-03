import React from "react";
import Navber from "../Shared/Navber/Navber";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="bg-slate-100 lg:w-[40%] mx-auto h-[450px] rounded-lg">
        <h1 className="text-center lg:pt-8 font-bold mb-6">Login your account</h1>
        <hr  />
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <h1 className="text-sm text-center">Dont’t Have An Account ? <Link className="text-red-500">Register</Link></h1>
      </div>
    </div>
  );
};

export default Login;

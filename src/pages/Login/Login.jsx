import React, { useContext } from "react";
import Navber from "../Shared/Navber/Navber";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Home from "../Home/Home";
import SocalLogin from "../Shared/SocialLogin/SocalLogin";

const Login = () => {
    const {login, user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    const handleLogin = e => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.error(error))
    }


  return (
    <div>
      <Navber></Navber>
      <div className="bg-slate-100 lg:w-[40%] mx-auto h-[450px] rounded-lg">
        <h1 className="text-center pt-8 font-bold mb-6">Login your account</h1>
        <hr  />
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-red-500">
                Forgot password?
              </a>
            </label>
          </div>
          {
            user ? <Navigate to='/'></Navigate> : <div className="form-control mt-3">
            <button className="btn btn-primary">Login</button>
          </div>
          }
          
        </form>
        <h1 className="text-sm text-center">Dont’t Have An Account ? <Link to='/register' className="text-red-500">Register</Link></h1>
        <SocalLogin></SocalLogin>
      </div>
      
    </div>
  );
};

export default Login;

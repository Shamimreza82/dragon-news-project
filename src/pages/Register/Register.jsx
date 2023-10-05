import React, { useContext, useState } from 'react';
import Navber from '../Shared/Navber/Navber';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Register = () => {
    const {handleRegister} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')

  const handleRegister2 = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        // const url = e.target.url.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;

        const form = new FormData(e.currentTarget); 
        const name = form.get('name'); 
        const url = form.get('url'); 
        const email = form.get('email'); 
        const password = form.get('password'); 


        setErrorMessage('')
       
        console.log(email, password, name, url);

        handleRegister(email, password)
        .then(result => {
            console.log(result.user);
            swal({
                title: "Yahh",
                text: 'Now You can Login',
                icon: "success",
                button: "Back to Register",
            });
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(" Mail Already Exisit");
            swal({
                title: "Sorry!!",
                text: errorMessage,
                icon: "error",
                button: "Back to Register",
            });

        })
    }


    return (
        <div className='min-h-screen'>
            <Navber></Navber>
            <div className="bg-slate-100 lg:w-[40%] mx-auto pb-2 rounded-lg">
        <h1 className="text-center pt-8 font-bold mb-6">Register your account</h1>
        <hr  />
        <form onSubmit={handleRegister2} className="card-body -mt-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="Name"
              className="input input-bordered"
              
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name='url'
              placeholder="Photo Url"
              className="input input-bordered"
             
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="email"
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
              name='password'
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-red-500">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <h2 className='ml-4 -mt-3 mb-3 text-red-600'>{errorMessage}</h2>
        <h1 className="text-sm text-center">Dont’t Have An Account ? <Link to='/login' className="text-red-500">Login</Link></h1>
      </div>
        </div>
    );
};

export default Register;
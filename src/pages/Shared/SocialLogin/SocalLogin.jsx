import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const SocalLogin = () => {
    const {googleSineIn} = useContext(AuthContext)

    const handleGoogleLogin =() => {
      googleSineIn()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
    }

    return (
        <div className="space-y-2">
        <h2 className="text-xl py-2 font-bold">Login With</h2>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full hover:bg-sky-600 hover:border-emerald-300">
          <FaGoogle className="text-xl"></FaGoogle>
            Login with Google
        </button>
        <button className="btn btn-outline w-full hover:bg-sky-600 hover:border-emerald-300">
          <FaGithub className="text-xl"></FaGithub>
            Login with Github
        </button>
      </div>
    );
};

export default SocalLogin;
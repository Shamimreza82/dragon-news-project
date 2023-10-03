import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import Qzone from '../../../assets/qZone1.png'
import Qzone1 from '../../../assets/qZone2.png'
import Qzone2 from '../../../assets/qZone3.png'
import bg from '../../../assets/bg.png'


const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-2">
        <h2 className="text-xl py-2 font-bold">Login With</h2>
        <button className="btn btn-outline w-full hover:bg-sky-600 hover:border-emerald-300">
          <FaGoogle className="text-xl"></FaGoogle>
            Login with Google
        </button>
        <button className="btn btn-outline w-full hover:bg-sky-600 hover:border-emerald-300">
          <FaGithub className="text-xl"></FaGithub>
            Login with Github
        </button>
      </div>

      {/* find us Section */}

      <div className="mt-3">
        <h2 className="text-xl py-2 font-bold">Find Us On</h2>
        <a href="#" className=" flex items-center py-3 rounded-t-lg border font-bold hover:bg-slate-300  ">
          <FaFacebook className="mx-2 text-xl"></FaFacebook>
            <p className="text-gray-500">facebook</p>
        </a>
        <a href="#" className=" flex items-center py-3 border-x font-bold hover:bg-slate-300  ">
          <FaTwitter className="mx-2 text-xl"></FaTwitter>
          <p className="text-gray-500">Twitter</p>
        </a>
        <a href="#" className=" flex items-center py-3 rounded-b-lg border font-bold hover:bg-slate-300 ">
          <FaInstagram className="mx-2 text-xl"></FaInstagram>
          <p className="text-gray-500">Instagrame</p>
        </a>
      </div>

       {/* Q-Zone  */}
        <div className="space-y-5 mt-3 ">
            <h2 className="text-xl py-2 font-bold">Q-Zone</h2>
            <img src={Qzone} alt="" />
            <img src={Qzone1} alt="" />
            <img src={Qzone2} alt="" />
        </div>
        {/* Banner  */}
        <div className="mt-3">
            <img src={bg} alt="" />
        </div>


    </div>
  );
};

export default RightSideNav;

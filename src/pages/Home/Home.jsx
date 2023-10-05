import React, { createContext, useContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Navber from '../Shared/Navber/Navber';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav.jsx/RightSideNav';
import BrakingNews from './BrakingNews';
import Newes from '../Newes/Newes';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Userss from '../Userss/Userss';
import PrivateRoute from '../../Router/PrivateRoute/PrivateRoute';

export const NewsContex = createContext(null)

const Home = () => {
    const [news, setNews, loading] = useState([])
    console.log(news);
    const {user} = useContext(AuthContext)

    useEffect(()=> {
        fetch('news.json')
      .then(res => res.json())
      .then(data => setNews(data)) 
    },[])   


    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navber></Navber>
            {
              user ? <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <NewsContex.Provider value={news}>
                <div className='border'>
                     <LeftSideNav></LeftSideNav>
                 </div>
                 <div className='md:col-span-2 border'>
                     <Newes></Newes>
                 </div>
                 <div className='border'>
                     <RightSideNav></RightSideNav>
                 </div>
                </NewsContex.Provider>
             </div> : <Userss></Userss>
            }

        </div>
    );
};

export default Home;
import React, { createContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Navber from '../Shared/Navber/Navber';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav.jsx/RightSideNav';
import BrakingNews from './BrakingNews';
import Newes from '../Newes/Newes';

export const NewsContex = createContext(null)

const Home = () => {
    const [news, setNews] = useState([])
    console.log(news);

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
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
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
            </div>
        </div>
    );
};

export default Home;
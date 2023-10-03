import React from 'react';
import Header from '../Shared/Header/Header';
import Navber from '../Shared/Navber/Navber';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav.jsx/RightSideNav';
import BrakingNews from './BrakingNews';
import Newes from '../Newes/Newes';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navber></Navber>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 border'>
                    <Newes></Newes>
                </div>
                <div className='border'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
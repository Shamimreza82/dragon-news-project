import React from 'react';
import Navber from '../Shared/Navber/Navber';
import { Helmet } from 'react-helmet';
import Header from '../Shared/Header/Header';
import BrakingNews from '../Home/BrakingNews';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navber></Navber>
        </div>
    );
};

export default About;
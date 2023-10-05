import React from 'react';
import { Helmet } from 'react-helmet';
import Navber from '../Shared/Navber/Navber';
import Header from '../Shared/Header/Header';

const Career = () => {
    return (
        <div>
            <Helmet>
                <title>Career</title> 
            </Helmet>
            <Header></Header>
            <Navber></Navber>
        </div>
    );
};

export default Career;
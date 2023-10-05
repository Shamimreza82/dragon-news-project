import React, { useContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav.jsx/RightSideNav';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryNews from './CategoryNews';



const Newsdetails = () => {
    const Anews = useLoaderData()
    const {id} = useParams()
    const [findCateNews, setFindCateNews] = useState([])

    const findNews = Anews.find(news => news._id == id)

    const handleCategoryNews = (cateID) => {
        console.log(cateID);
        const findCateNews = Anews.filter(categoryNews => categoryNews.category_id == cateID)
        setFindCateNews(findCateNews);  
    }

    return (
        <div >
            <Header></Header>
            <div className='grid lg:grid-cols-4 gap-5 mt-6'>
                
                <div className='lg:col-span-3 '>  
                    <h1 className="text-xl py-2 font-bold">Dragon News</h1>
                    <img className='w-full' src={findNews.image_url} alt="" />
                    <h2 className='text-2xl mt-2 font-bold'>{findNews.title}</h2>
                    <p className='mt-5'>{findNews.details}</p>
                    <button onClick={()=> handleCategoryNews(findNews.category_id)} className='btn mt-3 bg-red-600 text-white hover:bg-green-500'>All News in this categories</button>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            findCateNews.map(findCateNews => <CategoryNews key={findCateNews._id} findCateNews={findCateNews}></CategoryNews> )
                        }
                    </div>
                </div>
                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Newsdetails;
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NewsContex } from '../../Home/Home';
import Marquee from "react-fast-marquee";

const LeftSideNav = () => {
    const [categorys, setCategorys] = useState([])
    const [sidebarNews, setSideBarNews] = useState([])
    const [empty, setEmpty] = useState('')
    const news = useContext(NewsContex)

    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategorys(data))

    }, [])

  
    const handleCateHomeNews = (id) => {
        setEmpty('') 

        const sideBarNews = news.filter(SNews => SNews.category_id == id)
        console.log(sideBarNews);
        if(sideBarNews.length === 0){
            setEmpty("News not Avalable in this category !!");
        }
        setSideBarNews(sideBarNews);
    }

    return (
        <div>
            <h2 className='text-xl font-bold py-3'>All Category</h2>
            {
               categorys.map(category => (
                    <NavLink  onClick={()=> handleCateHomeNews (category.id)} key={category.id}>
                        <div className="bg-gray-100 p-3 rounded-lg mt-2 hover:bg-sky-500 hover:text-white">
                            <h3>{category.name}</h3>
                        </div>
                    </NavLink>
                ))
            }
            <div>
                <div className='flex justify-center mt-5 text-center font-bold text-red-600'>
                    <h1 className=''>{empty}</h1>
                </div>
            
            {
                sidebarNews.map(newss => <Link to={`/newsdetails/${newss._id}`} key={newss.id} className='space-y-2 mt-4'>
                    <img src={newss.image_url} alt="" />
                     <Marquee>
                     <h1>n{newss.title}</h1> 
                     
                     </Marquee>
                     <div>
                        <h1>News  {newss.author.published_date }</h1>
                    </div>  
                </Link> )
            }
            
           
            </div>
        </div>
    );
};

export default LeftSideNav;
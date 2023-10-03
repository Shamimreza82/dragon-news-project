import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NewsContex } from '../../Home/Home';
import Marquee from "react-fast-marquee";

const LeftSideNav = () => {
    const [categorys, setCategorys] = useState([])
    const news = useContext(NewsContex)


    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategorys(data))

    }, [])

    return (
        <div>
            <h2 className='text-xl font-bold py-3'>All Category</h2>
            {
               categorys.map(category => (
                    <NavLink to={`/category/${category.id}`} key={category.id}>
                        <div className="bg-gray-100 p-3 rounded-lg mt-2">
                            <h3>{category.name}</h3>
                        </div>
                    </NavLink>
                ))
            }
            <div>
            
            {
                news.map(newss => <div key={newss.id} className='space-y-2 mt-4'>
                    <img src={newss.image_url} alt="" />
                     <Marquee>
                     <h1>n{newss.title}</h1> 
                     
                     </Marquee>
                     <div>
                        <h1>News  {newss.author.published_date }</h1>
                    </div>  
                </div> )
            }
            
           
            </div>
        </div>
    );
};

export default LeftSideNav;
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categorys, setCategorys] = useState([])

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
        </div>
    );
};

export default LeftSideNav;
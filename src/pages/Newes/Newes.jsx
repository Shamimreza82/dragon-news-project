import React, { useEffect, useState } from 'react';
import News from './News';



const Newes = () => {

    const [newes, setNewes] = useState([])
    console.log(newes);
    useEffect(()=> {
        fetch('news.json')
       .then(res => res.json())
       .then(data => setNewes(data)) 
    },[])

    return (
        <div>
            <h2 className='text-xl py-3 font-bold'>Dragon News Home</h2>
            {
                newes.map(news => <News key={news.id} news={news}></News>)
            }
        </div>
    );
};

export default Newes;
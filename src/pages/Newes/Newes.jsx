import React, { useEffect, useState } from 'react';
import News from './News';



const Newes = () => {

    const [newes, setNewes] = useState([])
    const [isShow, setIsShow] = useState(false)

    useEffect(()=> {
        fetch('news.json')
       .then(res => res.json())
       .then(data => setNewes(data)) 
    },[])

    return (
        <div>
            <h2 className={ isShow ? "text-red-600 ": 'text-xl py-3 font-bold'}>Dragon News Home</h2>
            {
              isShow ?  newes.slice(0, 3).map(news => <News key={news.id} news={news}></News>) : newes.map(news => <News key={news.id} news={news}></News>)
            }
            
            <button onClick={()=> setIsShow(!isShow)} className='btn'>See All</button>
        </div>
    );
};

export default Newes;
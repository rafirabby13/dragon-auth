import React, { useEffect, useState } from 'react';
import AllNews from '../AllNews/AllNews.jsx';

const News = () => {
    const [news, setNews] = useState([])

    useEffect(()=>{
        fetch('./news.json')
        .then(res=> res.json())
        .then(data=>{
            //  console.log(data);
             setNews(data)
        })
    },[])
    return (
        <div className='grid gap-5'>
            {
                news.map(news=> <AllNews
                key={news._id}
                news={news}
                ></AllNews>)
            }
        </div>
    );
};

export default News;
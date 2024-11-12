import { useEffect, useState } from "react";
import NewsCategory from "./NewsCategory.jsx";

const LeftSideBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=> res.json())
        .then(data=>{
            //  console.log(data.data.news_category);
            setCategories(data.data.news_category)
        })
    },[])
    return (
        <div >
            <h1 className="mb-6 text-3xl font-bold">All Category</h1>
            <div className=" space-y-6 text-xl">
            {
                categories.map(category=>(
                    <NewsCategory
                    key={category.category_id
                    }
                    category={category}
                    ></NewsCategory>
                ))
            }
            </div>
        </div>
    );
};

export default LeftSideBar;
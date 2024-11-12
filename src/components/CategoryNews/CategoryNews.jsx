import { useLoaderData } from "react-router-dom";
import AllNews from "../AllNews/AllNews.jsx";

const CategoryNews = () => {
  const data = useLoaderData();
  const news = data.data;
  // console.log(news);
  return (
    <div>
      <div className="grid gap-5">
        {news.map((news) => (
          <AllNews key={news._id} news={news}></AllNews>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;

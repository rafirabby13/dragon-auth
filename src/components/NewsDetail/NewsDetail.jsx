import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import {  useLoaderData } from 'react-router-dom';

const NewsDetail = () => {
    const data = useLoaderData()
    const news = data.data[0];
    
    const {
        author,
        details,
        category_id,
        _id,
        image_url,
        thumbnail_url,
        title,
        total_view,
        rating,
      } = news;
    return (
        <div className="space-y-3 border-2 rounded-md">
      <div className="flex justify-between gap-5 items-center bg-slate-100 py-4 px-4">
        <div className="flex justify-start gap-5 items-center">
          <img className="h-12 rounded-full" src={author?.img} alt="Image" />
          <div>
            <p>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="flex justify-between gap-5 items-center text-3xl">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className="px-4 space-y-3">
        <h1>{title}</h1>
        <img className="w-full rounded-none h-80" src={thumbnail_url} alt="" />
        <p>{details}</p>
       

        <div className="flex items-center justify-between border-t-2 py-3">
          <div className="flex items-center gap-3 text-2xl">
          
            <p>{rating?.number}</p>
          </div>
          <div className="flex items-center gap-3 text-2xl ">
            <MdOutlineRemoveRedEye />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default NewsDetail;
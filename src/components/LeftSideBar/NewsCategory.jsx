/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const NewsCategory = ({ category }) => {
  // console.log(category);
  const { category_id, category_name } = category;
  return (
    <div>
      <NavLink to={`/news/category/${category_id}`}>
        {({ isActive }) => (
          <h1
            className={`${
              isActive ? "active" : ""
            } bg-slate-100 px-8 font-semibold py-4 `}
          >
            {category_name}
          </h1>
        )}
      </NavLink>
    </div>
  );
};

export default NewsCategory;

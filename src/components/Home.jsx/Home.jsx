import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import LeftSideBar from "../LeftSideBar/LeftSideBar.jsx";

// import News rom "../News/News.jsx";
import RightSideBar from "../RightSideBar/RightSideBar.jsx";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Header/>
            <div className="grid grid-cols-12 gap-4">
           <div className="border-2 col-span-3 border-red-600"><LeftSideBar/></div>
           <div className=" col-span-6 border-red-600"><Outlet/></div>
           <div className="border-2 col-span-3 border-red-600"><RightSideBar/></div>
        </div>
           
        </div>
    );
};

export default Home;
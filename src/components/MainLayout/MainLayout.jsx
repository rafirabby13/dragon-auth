import LeftSideBar from "../LeftSideBar/LeftSideBar.jsx";
import News from "../News/News.jsx";
import RightSideBar from "../RightSideBar/RightSideBar.jsx";

const MainLayout = () => {
    return (
        <div className="grid grid-cols-12 gap-4">
           <div className="border-2 col-span-3 border-red-600"><LeftSideBar/></div>
           <div className=" col-span-6 border-red-600"><News/></div>
           <div className="border-2 col-span-3 border-red-600"><RightSideBar/></div>
        </div>
    );
};

export default MainLayout;
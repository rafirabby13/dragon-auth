import Navbar from "./Navbar.jsx";

const Header = () => {
  return (
    <div className="space-y-3">
      <div className="text-center space-y-4 text-3xl">
        <h1 className=" title text-7xl">The Dragon News</h1>
        <p>Journalism Without Fear or Favour</p>
        <p>Sunday, November 27, 2025</p>
      </div>
      <div className="flex items-center gap-4 p-3 bg-slate-200">
        <button className="bg-red-600 text-white px-4 py-2">Latest</button>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </div>
      <Navbar/>
    </div>
  );
};

export default Header;

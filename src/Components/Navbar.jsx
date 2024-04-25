import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black w-full p-5 ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/feature">Features</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Tourism Management</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex justify-center items-center gap-5 font-base text-xl">
              <div className="flex gap-3 items-center justify-center">
                <Link to="/">Home</Link>
                <Link to="/allSpot">All Tourists Spot</Link>
              </div>
              <Link to="/addSpot">Add Tourists Spot</Link>
              <Link to='/myList'>My List</Link>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
            <button className="btn mr-3"><Link to="/login">Login</Link></button>
            <button className="btn"><Link to="/register">Register</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

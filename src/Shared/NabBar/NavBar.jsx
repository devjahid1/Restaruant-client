import { Link } from "react-router-dom";

const NavBar = () => {

    const navOptions = <>
    <li><Link to='/'>HOME</Link></li>
    <li><Link to='contact'>CONTACT US</Link></li>
    <li><Link to='/dashboard'>DASHBOARD</Link></li>
    <li><Link to='/menu'>OUR MENU</Link></li>
    <li><Link to='/shop/salad'>OUR SHOP</Link></li>
    <li><Link to='/login'>Login</Link></li>
    </>



    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mx-3 w-52 px-2 shadow font-bold text-black">
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
        {navOptions}
    </ul>
  </div>
  {/* Button here */}
</div>
        </div>
    );
};

export default NavBar;
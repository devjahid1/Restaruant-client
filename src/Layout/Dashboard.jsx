import { FaAd, FaBook, FaHome, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCalendar, FaEnvelope, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                    <li>
                    <NavLink to="/dashboard/adminHome">
                    <FaHome/>
                    Admin Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/addItems">
                    <FaUtensils/>
                    Ad Items
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/manageItem">
                    <FaList/>
                    Manage Items
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/manageBooking">
                    <FaBook/>
                    Manage Bookings
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/users">
                    <FaUsers/>
                    All Users
                    </NavLink>
                    </li>
                        </>
                        :
                        <></>
                    }

                    <div className="divider"></div>
                    <li>
                    <NavLink to="/">
                    <FaHome/>
                    Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/shop/salad">
                    <FaSearch/>
                    Menu
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/shop/contact">
                    <FaEnvelope/>
                    Contact
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
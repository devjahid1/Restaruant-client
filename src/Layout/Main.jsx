import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NabBar/NavBar';

const Main = () => {
    const location = useLocation();
    const noLogin = location.pathname.includes('login');
    return (
        <div>
            {noLogin || <NavBar/>}
            <Outlet/>
            {noLogin || <Footer/>}
        </div>
    );
};

export default Main;
import Header from '../components/Header';
import Navigatebar from '../components/Navbar';
import {Outlet} from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header/>
            <Navigatebar/>
            <Outlet/>
        </>
    );
}

export default Layout;
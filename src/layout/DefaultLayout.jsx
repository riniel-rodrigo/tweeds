import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
// import Footer from '../components/Footer';

export default function DefaultLayout() {
    const location = useLocation();
    const hideHeader = location.pathname === "/Login" || location.pathname === "/Register";

    return (
        <>
            {!hideHeader && <Header />}
            <Outlet />
            {/* <Footer /> */}
        </>
    );
}

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';

// Outlet: react-router-dom에서 지원하는 기능으로 부모인 Layout 컴포넌트가 랜더링되는 순간
//         자식 경로의 컴포넌트를 바꿔치기해서 랜더링 가능
function Layout() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>   {/* Outlet: 바뀔 부분 => App.js의 부모인 <Route></Route>안의 자식<Route/>들이 해당 */}
        </>
    );
}

export default Layout;
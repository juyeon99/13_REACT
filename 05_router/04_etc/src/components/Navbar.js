import {NavLink} from 'react-router-dom';
import navStyle from './Navbar.module.css';

function Navbar() {
    const activeStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <div className={navStyle.NavbarList}>
            <ul>
                <li><NavLink className={navStyle.navlink} to="/" style={({isActive}) => isActive ? activeStyle : undefined}>Home</NavLink></li>     {/* 바뀌는 부분만 리랜더링 */}
                <li><NavLink className={navStyle.navlink} to="/mypage" style={({isActive}) => isActive ? activeStyle : undefined}>마이페이지</NavLink></li>
                <li><NavLink className={navStyle.navlink} to="/login" style={({isActive}) => isActive ? activeStyle : undefined}>로그인</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
import {NavLink, Link} from 'react-router-dom';

function Navbar() {
    const activeStyle = {
        backgroundColor: 'lightsalmon',
    }

    return (
        <div>
            <ul>
                {/* <li><a href={"/"}>Home</a></li>             화면 전체를 리랜더링 => 비효율적
                <li><a href={"/mypage"}>마이페이지</a></li>
                <li><a href={"/login"}>로그인</a></li> */}
                
                {/* <li><Link to="/">Home</Link></li>           바뀌는 부분만 리랜더링
                <li><Link to="/mypage">마이페이지</Link></li>
                <li><Link to="/login">로그인</Link></li> */}

                <li><NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined}>Home</NavLink></li>     {/* 바뀌는 부분만 리랜더링 */}
                <li><NavLink to="/mypage" style={({isActive}) => isActive ? activeStyle : undefined}>마이페이지</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive ? activeStyle : undefined}>로그인</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
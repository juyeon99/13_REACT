import {useEffect, useState} from 'react';
import {getMenuList} from '../api/MenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';
import {useNavigate} from 'react-router-dom';   // 컴포넌트형, 함수형 모두 사용 가능

function Menu() {
    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();     // 함수형

    // Menu 컴포넌트가 마운트 되기 전에 데이터를 가져와서 state에 담기
    useEffect(() => {
        // 데이터를 가져오는 로직
        // console.log(getMenuList());

        // json 형태로 파싱된 데이터는 table 형태로 출력 가능
        // table이 나오지 않으면 파싱이 제대로 안된 것
        // console.table(getMenuList());

        setMenuList(getMenuList());
    },[]);

    const onClickHandler = () => {
        // console.log(searchValue);

        navigate(`/menu/search?menuName=${searchValue}`);   // 함수형
    }

    return (
        <>
            <h1>판매 메뉴 목록</h1>
            <div>
                <input type='search' name='menuName' onChange={(e) => setSearchValue(e.target.value)}/>
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {/* 메뉴 컴포넌트를 반복해서 보여주기 */}
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu /* props로 넘겨주기 */}></MenuItem>)}
            </div>
        </>
    );
}

export default Menu;
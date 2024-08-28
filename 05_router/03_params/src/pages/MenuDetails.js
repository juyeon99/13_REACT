import {useParams} from "react-router-dom"; // 전달된 PathVariable 사용 가능
import {getMenuDetail} from '../api/MenuAPI';
import {useEffect, useState} from "react";

function MenuDetails() {
    const {menuCode} = useParams();     // PathVariable 받아오기
    // console.log(menuCode);  // menuCode에 따라 유동적으로 처리 가능
    
    // const [menu, setMenu] = useState({});   // 객체 형태
    const [menu, setMenu] = useState({  // 개발 시 useState를 위에서처럼 빈 객체로 초기화해도 되지만 menu의 형태를 임시로 써놓으면 도움이 된다.
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        detail: {}
    });

    useEffect(() => {
        setMenu(getMenuDetail(menuCode))
    }, []);
    
    return (
        <>
            <h2>메뉴 상세 설명</h2>
            <h3>메뉴 이름: {menu.menuName}</h3>
            <h3>메뉴 가격: {menu.menuPrice}</h3>
            <h3>메뉴 종류: {menu.categoryName}</h3>
            <h3>메뉴 설명: {menu.detail.description}</h3>
            <img src={menu.detail.image} style={{maxWidth: 500}}/>
        </>
    );
}

export default MenuDetails;
import menus from '../data/menu-detail.json';

// 전체 메뉴 리스트를 반환하는 메소드
export function getMenuList() {
    // json으로 파싱된 데이터를 반환
    return menus;
}

// MenuDetails에서 넘겨준 메뉴코드와 일치하는 메뉴 객체 반환
export function getMenuDetail(menuCode) {
    // console.log('details 페이지에서 넘어온 메뉴코드 값: ', menuCode);
    // console.log(typeof menuCode);   // string => PathVariable에서 꺼내온 값은 문자열

    // menus 배열에서 filter의 콜백함수가 true를 반환하게 하는 배열요소만을 가지고 다시 배열로 반환
    // 이때, 파싱된 데이터에서 꺼낸 객체의 menuCode는 숫자이므로 PathVariable로 넘겨받은 값(문자열)을 숫자형으로 변경 필요
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}

export function searchMenu(searchMenuName) {
    // console.log('searchMenuName 전달됨: ', searchMenuName);

    // match 함수는 인수 값이 포함되어 있으면 객체를 반환
    // menu.menuName에 검색어가 들어있는 menu 객체들을 배열로 반환
    // console.log(menus.filter(menu => menu.menuName.match(searchMenuName)));

    return menus.filter(menu => menu.menuName.match(searchMenuName));
}
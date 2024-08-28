import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';
import MenuDetails from './pages/MenuDetails';
import MenuSearchResult from './pages/MenuSearchResult';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='menu'>
              <Route index element={<Menu/>}/>                      {/* http://localhost:3000/menu */}
              <Route path=':menuCode' element={<MenuDetails/>}/>    {/* :menuCode => PathVariable을 사용해 값 전달 */}
              <Route path='search' element={<MenuSearchResult/>}/>  {/* 쿼리스크링을 사용해 값 전달 */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
